import type { RequestEvent } from '@sveltejs/kit';

import {createCanvas, loadImage} from "canvas";

import fetch, { blobFrom } from 'node-fetch';

import { RateLimiterMemory } from 'rate-limiter-flexible';

import sizeOf from "image-size";

const opts = {
	points: 15,
	duration: 10
};

const rateLimiter = new RateLimiterMemory(opts);
 
/** @type {import('./$types').RequestHandler} */
export async function GET({url, getClientAddress}: RequestEvent) {
    let rateLimit = await rateLimiter.get(getClientAddress());
	if (rateLimit && !rateLimit.remainingPoints) return new Response(JSON.stringify({error: `You are being ratelimited. Try again in ${rateLimit.msBeforeNext}ms`}), { status: 429 });
	rateLimiter.consume(getClientAddress(), 1);
    
    let image = url.searchParams.get('img');
    if(!image) return new Response(JSON.stringify({error: "Missing 'img' query."}));
    //Fetch image from remote
    let response = await fetch(image);
    if(!response.status || response.status !== 200) return new Response(JSON.stringify({error: `Request to 'img' URL failed with status code ${response.status}`}), {status: 400});
    //Convert to blob
    let imageBlob = await response.blob();
    //Convert to buffer
    const buffer: any = Buffer.from(await imageBlob.arrayBuffer());
    //Get dimensions from buffer
    const dimensions = sizeOf(buffer);
    if(!dimensions.width || !dimensions.height) return new Response(JSON.stringify({error: `Cannot get dimensions of image. Make sure it's in a standard format.`}), {status: 406});
    //Limit image dimensions to prevent lag
    if(dimensions.width > 1920 || dimensions.height > 1920) return new Response(JSON.stringify({error: `Image cannot exceed 1920px in either height or width.`}), {status: 406});

    //Create canvas
    const canvas = createCanvas(dimensions.width, dimensions.height);
    const ctx = canvas.getContext("2d");

    //Load image to canvas
    let img = await loadImage(buffer);

    //Flip canvas by X coordinate
    ctx.scale(-1,1);
    ctx.drawImage(img, -dimensions.width, 0);

    return new Response(canvas.toBuffer(), {status: 200});
}
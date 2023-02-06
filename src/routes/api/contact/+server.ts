import type { RequestEvent } from '@sveltejs/kit';
import type { Body } from './req';

import fetch from 'node-fetch';

import { RateLimiterMemory } from 'rate-limiter-flexible';

const opts = {
	points: 3,
	duration: 60
};

const rateLimiter = new RateLimiterMemory(opts);

export async function POST({ request, getClientAddress }: RequestEvent) {
	//RATELIMIT
	let rateLimit = await rateLimiter.get(getClientAddress());
	if (rateLimit && !rateLimit.remainingPoints) return new Response(null, { status: 429 });
	rateLimiter.consume(getClientAddress(), 1);
	//END RATELIMIT

	const { name, email, subject, content }: Body = await request.json();
	if (!email || typeof email !== 'string' || !email.trim())
		return new Response(null, { status: 406 });
	if (!content || typeof content !== 'string' || !content.trim())
		return new Response(null, { status: 406 });

	const fields = [
		{
			name: 'E-mail',
			value: email,
			inline: true
		}
	];
	if (name && typeof name == 'string' && name.trim())
		fields.unshift({
			name: 'Name',
			value: name,
			inline: true
		});
	if (subject && typeof subject == 'string' && subject.trim())
		fields.push({
			name: 'Subject',
			value: subject,
			inline: false
		});

	fields.push({
		name: 'Content',
		value: content,
		inline: false
	});

	const params = {
		content: '<@261465909321924609>',
		username: 'em1t.xyz',
		avatar_url: 'https://em1t.dev/api/canvas/flip/xy?img=https://cdn.discordapp.com/attachments/823512256842170389/1071032015434027048/xy.png',
		embeds: [
			{
				title: 'New message!',
				color: 15258703,
				fields
			}
		]
	};
	//CONTACT FORM SENDS DATA OVER TO DISCORD VIA WEBHOOKS.
	const res = await fetch(
		'https://discord.com/api/webhooks/1070303486346006578/ly2jnrkXyWzubFZGnU5_iCCxWQ_L36X7ntD_EmHA4z7VC8KprddrFwnBl8UMmsZWrd-C',
		{
			method: 'POST',
			headers: {
				'Content-type': 'application/json'
			},
			body: JSON.stringify(params)
		}
	);

	const result: any = await res.json().catch((e) => e);
	//Code exists only if request failed
	if (result?.code) return new Response(null, { status: 500 });

	return new Response(null, { status: 201 });
}

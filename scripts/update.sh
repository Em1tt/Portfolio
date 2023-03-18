#!/bin/bash

echo "[Em1t.dev]: Started updating code"

echo "[Em1t.dev]: Installing dependencies"

npm install

echo "[Em1t.dev]: Building code"

npm run build

echo "[Em1t.dev]: Restarting process"

pm2 restart 0

echo "[Em1t.dev]: Updating code done"
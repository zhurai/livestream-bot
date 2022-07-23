#!/bin/sh
cd /home/twitch-bot-main/livestream-bot/
output=$(git pull)
expected="Already up to date."

if [ "$output" != "$expected" ]
then
        killall node
        node index.js &
fi

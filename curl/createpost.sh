#!/bin/bash
TITLE="My First Post"
CONTENT="This is the post content"

curl -X POST http://localhost:3000/posts \
  -H "Content-Type: application/json" \
  -d "{\"title\": \"$TITLE\", \"content\": \"$CONTENT\"}"

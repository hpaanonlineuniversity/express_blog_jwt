#!/bin/bash
TITLE="My Third Post"
CONTENT="This is the post content"

curl -v -X POST http://localhost:3000/posts \
  -H "Content-Type: application/json" \
  -d "{\"title\": \"$TITLE\", \"content\": \"$CONTENT\"}"

#!/bin/bash

# Update a post by ID
POST_ID="68dfeb626f593e5c013c6c15"
TITLE="Updated Post Title"
CONTENT="This is the updated content"

curl -v -X PUT http://localhost:3000/posts/$POST_ID \
  -H "Content-Type: application/json" \
  -d "{\"title\": \"$TITLE\", \"content\": \"$CONTENT\"}"

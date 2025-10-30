#!/bin/bash

# Update a post by ID
POST_ID="690333640d2da3eaa3236434"
TITLE="Updated Post Title"
CONTENT="This is the updated content"

curl -X PUT http://localhost:3000/posts/$POST_ID \
  -H "Content-Type: application/json" \
  -d "{\"title\": \"$TITLE\", \"content\": \"$CONTENT\"}"

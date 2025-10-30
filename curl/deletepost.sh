#!/bin/bash

# Delete a post by ID
POST_ID="690333500d2da3eaa3236432"

curl -X DELETE http://localhost:3000/posts/$POST_ID \
  -H "Content-Type: application/json"




# First, get all posts to find the ID
##   ./getposts.sh

# Then delete with the specific ID
##    POST_ID="507f1f77bcf86cd799439011" ./deletepost.sh

#!/bin/bash

echo "Getting all posts..."
curl -X GET http://localhost:3000/posts \
  -H "Content-Type: application/json"
curl -X POST http://localhost:3000/users/register \
  -H "Content-Type: application/json" \
  -d '{
    "username": "user01",
    "email": "user01@example.com",
    "password": "password"
  }'
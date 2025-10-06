FROM node:alpine3.21
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm install
COPY . .
ENV PORT=3000
EXPOSE ${PORT}
CMD ["npm", "run", "dev"]
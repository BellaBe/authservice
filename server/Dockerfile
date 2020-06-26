# Use a lighter version of Node as a parent image
FROM node:12.10.0-alpine

WORKDIR /app/server

COPY . .

RUN npm install

EXPOSE 8080

# Run the app when the container launches
CMD ["npm", "start"]
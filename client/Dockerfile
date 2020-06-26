# Use a lighter version of Node as a parent image
FROM node:12.10.0 as builder

WORKDIR /app/client 

COPY . .

RUN npm install react-scripts -g --silent

RUN npm install

RUN npm run build

EXPOSE 3000


FROM node:12.10.0
RUN npm install -g serve
WORKDIR /app/client
COPY --from=builder /app/client .


# Run the app when the container launches
CMD ["serve", "-s", "."]doc
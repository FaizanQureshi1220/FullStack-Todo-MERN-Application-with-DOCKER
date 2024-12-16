
# first stage as build 
FROM node:18-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npx tsc -b

#second stage to run 
FROM node:18-alpine

WORKDIR /app

COPY --from=build /app /app

EXPOSE 3002

CMD ["node" , "dist/routes.js"]



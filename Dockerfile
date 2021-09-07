FROM node:14.17.5-alpine3.14 AS builder
WORKDIR /app
COPY . .
RUN npm i
RUN npm run build

FROM node:14.17.5-alpine3.14

ENV TZ=Europe/Paris
RUN apk add --no-cache tzdata
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

RUN npm install pm2@latest -g

WORKDIR /app
COPY --from=builder /app ./
CMD ["npm","run","start:docker"]
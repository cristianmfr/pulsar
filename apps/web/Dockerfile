FROM alpine:3.18.4 as build

RUN apk update
RUN apk add --no-cache nodejs npm
RUN npm install -g yarn

WORKDIR /app

COPY ../../ .

RUN yarn install
RUN yarn turbo run build

FROM nginx:stable-alpine-slim as production

COPY --from=build /app/apps/web/dist .

EXPOSE 3000

CMD [ "nginx", "-g", "daemon off;" ]

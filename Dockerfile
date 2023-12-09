FROM node:18.17.1 as build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:1.15.11-alpine

RUN apk add --no-cache bash

COPY --from=build /app/dist /usr/share/nginx/html

COPY default.conf /etc/nginx/conf.d/default.conf

RUN cp /etc/nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf.orig && \
    sed -i 's/listen[[:space:]]*80;/listen 1824;/g' /etc/nginx/conf.d/default.conf

EXPOSE 1824

ENTRYPOINT [ "nginx", "-g", "daemon off;" ]

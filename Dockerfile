FROM node:alpine

WORKDIR /app

COPY package*.json ./

RUN npm install -g @angular/cli

COPY . .
RUN npm run build

FROM nginx
EXPOSE 80
COPY --from=0 /app/dist/comics-gui /usr/share/nginx/html


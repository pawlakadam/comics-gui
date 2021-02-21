FROM node:10.14.1 as builder

WORKDIR /app

COPY package.json ./

RUN npm install -g @angular/cli

COPY . .
RUN npm run build

FROM nginx
EXPOSE 80
COPY --from=builder /app/dist/comics-gui /usr/share/nginx/html


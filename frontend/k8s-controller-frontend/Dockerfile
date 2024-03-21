FROM node:lts-alpine3.19 as build

WORKDIR /usr/src/app

ENV REACT_APP_BACKEND_URL=k8s-endpoint-svc.k8s-go-controller.svc.cluster.local

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

FROM nginx:stable-alpine as run

COPY --from=build /usr/src/app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

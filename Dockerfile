FROM node:18.19-alpine AS builder

ARG VITE_SERVER_BASE_URL
ENV VITE_SERVER_BASE_URL=$VITE_SERVER_BASE_URL

WORKDIR /app

RUN apk add --no-cache libc6-compat

COPY . ./

RUN yarn install --immutable
RUN yarn build

# 실행 단계
FROM nginx:alpine AS runner

RUN echo "\
server {\
    listen 3000;\
    location / {\
        root   /usr/share/nginx/html;\
        index  index.html index.htm;\
        try_files \$uri \$uri/ /index.html =404;\
    }\
}" > /etc/nginx/conf.d/default.conf

COPY --from=builder /app/dist /usr/share/nginx/html

# 3000포트 열기
EXPOSE 3000

# Nginx 시작
CMD ["nginx", "-g", "daemon off;"]
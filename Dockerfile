FROM node:20-slim AS builder
LABEL maintainer="Sousa Vilankaze"
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY bin ./bin
COPY src ./src

FROM node:20-alpine
ARG NODE_ENV
WORKDIR /app
COPY --from=builder /app ./
EXPOSE 4000
CMD [ "npm","start"]
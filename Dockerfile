FROM node:16.3.0-alpine

ENV DATABASE_URL="mongodb://localhost:27017/test"

WORKDIR /app

COPY package.json .
RUN npm i

#WORKDIR /app/src

ADD src/ ./src
ADD tsconfig.json ./
ADD auth/auth.json ./auth/

RUN npm run tsc

CMD [ "npm", "start" ]
EXPOSE 8080
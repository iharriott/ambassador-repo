FROM node:14.6

WORKDIR /app
COPY package.json .
RUN npm install
COPY . .

CMD npm run start:dev
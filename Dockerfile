FROM node:14.17.0-alpine

WORKDIR /usr/src/app/frontend
COPY package*.json ./

RUN npm install

EXPOSE 3000

CMD ["npm", "dev"]
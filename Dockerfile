FROM node:20-slim

WORKDIR /califica-empresas

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5000

CMD ["npm","start"]
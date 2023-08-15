FROM node:19.3.0
WORKDIR /app
COPY package.json .
RUN npm install -g npm@9.6.6
RUN npm install
COPY . .
CMD ["node", "index.js"]


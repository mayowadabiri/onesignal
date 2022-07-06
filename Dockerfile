FROM node:14

EXPOSE 1111

WORKDIR /src

RUN npm install i npm@latest -g

COPY package.json package-lock*.json ./

RUN npm  install 

COPY . . 

CMD ["node", "src/server.js"]


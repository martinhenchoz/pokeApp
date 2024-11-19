FROM node:18

RUN mkdir -p /home/pokeapp

WORKDIR /home/pokeapp

COPY ./package.json /home/pokeapp/package.json

RUN npm i -g nodemon

RUN npm install

EXPOSE 3000

CMD ["nodemon", "--exec", "npm", "start"]
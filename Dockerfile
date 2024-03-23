FROM node:alpine

WORKDIR /usr

COPY . /usr/

RUN npm install

COPY *.json /usr/

EXPOSE 2312

RUN npx prisma generate

CMD [ "npm", "run", "start" ]

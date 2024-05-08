FROM node:alpine

WORKDIR /apps/notes-challenge
ENV DB_NAME=notesdb
ENV DB_USER=postgres
ENV DB_PASSWORD=123456
ENV DB_PORT=5432
ENV DB_HOST=192.168.100.6

COPY package.json ./
RUN npm i
COPY ./ ./

EXPOSE 3000

CMD ["npm", "run" , "dev"]
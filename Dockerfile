FROM node:8
EXPOSE 4000
COPY / /src/
WORKDIR /src
RUN npm install
CMD npm start

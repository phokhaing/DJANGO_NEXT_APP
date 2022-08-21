FROM node:14-alpine

# WORKDIR /usr/src/app/next_app

# WORKDIR ./next_app

COPY package*.json .
RUN npm install

# WORKDIR ./next_app
# CMD ["npm", "install"]

COPY . .

EXPOSE 3000

CMD ["npm", "run", "start:dev"]
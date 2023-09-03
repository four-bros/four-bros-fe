# Fetching the latest node image on alpine linux
FROM node:18-alpine AS development
# Declaring env
ENV NODE_ENV development
# Setting up the work directory
WORKDIR /four-bros-fe
# Installing dependencies
COPY ./package.json /four-bros-fe
RUN npm install
# Copying all the files in our project
COPY . .
# TODO: Find a way to run local backend
# Export port
EXPOSE 3000
# Starting our application
CMD ["npm", "start"]

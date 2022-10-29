FROM node:16-alpine as annabuilds
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install
# RUN npm install react-scripts@3.4.1 -g --silent

# add app
COPY . ./

# start app
# CMD ["npm", "start"] // for prod, we want to build not start

# production environment
RUN npm run build
FROM nginx:1.23.2
COPY --from=annabuilds /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]








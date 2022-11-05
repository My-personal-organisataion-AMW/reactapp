# Docker

## Docker Compose

1. `docker-compose -f docker-compose.yaml up -d --build` for production build
2. `docker-compose -f docker-compose.local.yaml up -d --build` for production build

## Learning docker (notes)

### CLI (local)

- build: `docker build -f Dockerfile.local -t foodapp:dev .`
- run: `docker run -it --rm -p 4000:80 foodapp`

Above corrosponds with:

```sh
docker run \
    -it \
    --rm \
    -v ${PWD}:/app \
    -v /app/node_modules \
    -p 4000:3000 \
    -e CHOKIDAR_USEPOLLING=true \
    foodapp:dev
```

### CLI (prod)

- build: `docker build -f Dockerfile -t foodapp .`
- run: `docker run -it --rm -p 4000:80 foodapp`

### Push Image

[Github action](https://docs.github.com/en/actions/publishing-packages/publishing-docker-images#publishing-images-to-github-packages) takes care of it.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:4000](http://localhost:3000) to view it in your browser.

Changed in `package.json` `"start": "PORT=4000 react-scripts start"`

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

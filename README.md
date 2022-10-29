# Docker

## Locally

CLI:
`docker build -f Dockerfile.local -t foodapp:dev .`

DOCKER COMPOSE:
`docker-compose -f docker-compose.local.yaml up -d --build`

Above corrosponds with:

```sh
docker run \
    -it \
    --rm \
    -v ${PWD}:/app \
    -v /app/node_modules \
    -p 3000:3000 \
    -e CHOKIDAR_USEPOLLING=true \
    foodapp:dev
```

## production build

CLI
`docker build -f Dockerfile -t foodapp .`
`docker run -it --rm -p 1234:80 foodapp`

DOCKER COMPOSE
`docker-compose -f docker-compose.yaml up -d --build`

### Push Image

[Github action](https://docs.github.com/en/actions/publishing-packages/publishing-docker-images#publishing-images-to-github-packages) takes care of it.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

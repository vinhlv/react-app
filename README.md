# React app

## Requirements installed

These are the minimum requirements for the project setup:

- [Node.js](http://nodejs.org) - `v4.5+`
- [Git](https://git-scm.com/)

## Getting started

Open your preferred command line tool and run follow some steps below:

1. `npm install` automatically to install plugins required for the build script based in `package.json` file.
2. `npm start` to preview and development. This command auto run url `http://localhost:3000` in your browser.
3. `npm run build-staging` to build staging version.
4. `npm run build-live` to build final version.


## Project structure

````

react-app/
├── public/
├── src/
│   ├── actions
│   ├── assets
│   │   ├── fonts
│   │   ├── images
│   │   └── styles
│   ├── components
│   │   ├── auth
│   │   ├── common
│   │   ├── home
│   │   ├── layouts
│   ├── constants
│   ├── containers
│   ├── helpers
│   ├── middleware
│   ├── reducers
│   ├── routes
│   ├── store
│   └── index.js
└── package.json

````

## License

[MIT License](react-app/LICENSE)

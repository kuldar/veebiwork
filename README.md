# Veebiwork

### Getting started

Install dependencies and run the server:

```bash
yarn
yarn dev
```

## How it works

Sites take its content from markdown files in `/content`. Two of pages (`home` and `about`) are referencing directly their respective markdown files.

Component loads all jobs (during build!) and lists them out. [More about this](https://medium.com/@shawnstern/importing-multiple-markdown-files-into-a-react-component-with-webpack-7548559fce6f)

Job listings are separate static sites thanks to dynamically created export map. [More about this](https://medium.com/@joranquinten/for-my-own-website-i-used-next-js-725678e65b09)

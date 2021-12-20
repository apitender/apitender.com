# APItender.com

APItender.com is the official website of APItender. The website includes marketing pages and developer documentation.

### Local Development

**Setup**

```bash
$ git clone https://github.com/apitender/apitender.com.git
$ cd apitender.com
$ npm install
```

**Run Local Development Server**
```bash
$ npm run docusaurus start
```

This command starts a local development server on `localhost:3000` and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```bash
$ npm run docusaurus build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

_(Inaccurate)_

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

# SVG Scene

This is a browser app for creating a graphical scene of simple shapes.

Built on top of React, Babel, Webpack, and Scss.

React itself is responsible for dealing with SVGs because SVG is XML-based and
JSX compatible. Shape configuration maps directly to SVG attributes. 

Data export of initial scene is available in `frontend/fixtures.jsx`. It's
possible to export scene to console.

[Demo here.](http://dagrev.is/svg-scene/)

## Development

Make sure you have [Node.js](https://nodejs.org/en/download/) and
[Sass](http://sass-lang.com/install) installed.

Clone the repo:

~~~
git clone git@github.com:daGrevis/svg-scene.git
~~~

Install `webpack` and `http-server` globally:

~~~
npm install -g webpack http-server
~~~

Go to cloned repo and install dependencies:

~~~
cd svg-scene/
npm install
~~~

**Now you're ready to continue development!**

Start `webpack` to rebuild static:

~~~
webpack -w
~~~

Then serve `static/` with `http-server`:

~~~
cd static/
http-server
~~~

Web UI should be available on http://127.0.0.1:8080.

App code entry point is located in `frontend/app.jsx`.

## Deployment

There's no backend for this app, it's all static! We could serve it with
something like Nginx.

Build static from development environment:

~~~
webpack
~~~

Static files will be built to `static/`.

Assuming we want to deploy quickly, we can achieve this with Docker and
Nginx like so:

~~~
docker run -it --rm -p 80:80 -v "$(pwd)/static":/usr/share/nginx/html:ro nginx:stable-alpine
~~~

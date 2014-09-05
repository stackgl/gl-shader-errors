# gl-shader-errors [![experimental](http://badges.github.io/stability-badges/dist/experimental.svg)](http://github.com/badges/stability-badges)

"Parses" the log output of `gl.getShaderInfoLog` to get separate error objects.

## Usage

[![NPM](https://nodei.co/npm/gl-shader-errors.png)](https://nodei.co/npm/gl-shader-errors/)

### `errors = parse(log)`

Where `log` is the string output of `gl.getShaderInfoLog`, return an array
of errors with the following properties:

* `message`: the error message
* `line`: the line the error appears in the shader.
* `column`: the column of that line the error refers to.

## License

MIT. See [LICENSE.md](http://github.com/stackgl/gl-shader-errors/blob/master/LICENSE.md) for details.

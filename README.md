gulp-js-module-wrapper
==============

> add js module define wrap js content.

## Install
```
npm install --save-dev gulp-js-module-wrapper
```

## Usage

```js
var gulp = require('gulp');
var jsModWrapper = require('gulp-js-module-wrapper');
var path = require('path');

gulp.task('default', function () {
  return gulp.src('app/*')
    .pipe(jsModWrapper.cmd2amd({
      baseDir: path.resolve('./app')
    }));
```

it will gengerate a amd header wrappred cmd module like this
```
define(module_id,["module","exports"],function(module,exports){

//your origin js code here ...

}
```

## License

gulp-js-module-wrapper.js is [MIT Licensed](./LICENSE.md).
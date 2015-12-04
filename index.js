var gulp_wrapper2 = require('gulp-wrapper2');
var path = require('path');

module.exports = {
  //the same api of gulp_wrapper2
  default: function(opt) {
    return gulp_wrapper2(opt);
  },

  amd: function(opt) {
    opt = opt || {};

    var wrapperOpt = {

      header: function(f) {
        var filePath = f.path;
        var fileBaseName = path.basename(filePath, path.extname(filePath));
        var moduleName = fileBaseName;
        if(typeof opt.baseDir === 'string' && path.isAbsolute(opt.baseDir)) {
          var deltaPath = path.relative(opt.baseDir, filePath);
          if(!(deltaPath && deltaPath.length > 2 && deltaPath.substr(0, 2) === '..')) {//it is out of src we think is top mod.
            moduleName = path.dirname(deltaPath) + '/' + path.basename(deltaPath, path.extname(deltaPath));
            if(moduleName && moduleName.length > 2 && moduleName.substr(0, 2) === './') {
              moduleName = moduleName.substr(2);
            }
          }
        }

        return `define("${moduleName}",["module","exports"],function(module,exports){\n`
      },

      footer: '\n});'
    }

    return gulp_wrapper2(wrapperOpt);
  }
}
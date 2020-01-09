var gulp = require("gulp"),
  header = require("gulp-header"),
  pkg = require("./package.json"),
  watch = require("gulp-watch"),
  sass = require("gulp-sass");
(concat = require("gulp-concat")),
  (rename = require("gulp-rename")),
  (handlebars = require("gulp-compile-handlebars")),
  (sourcemaps = require("gulp-sourcemaps")),
  (autoprefixer = require("gulp-autoprefixer")),
  (uglify = require("gulp-uglify-es").default),
  (babel = require("gulp-babel")),
  (mergeStream = require("merge-stream"));

function getBundles(regexPattern, files) {
  return files.filter(function(bundle) {
    return regexPattern.test(bundle.output);
  });
}

const regex = {
  css: /\.css$/,
  html: /\.(html|htm)$/,
  js: /\.js$/,
  po: /\.po$/
};
//* /*!\n* <%= pkg.name %> - v <%= pkg.version %> \n* <%= pkg.description %> \n* Author :<%= pkg.author %>\n*/\n  */
var config = {
  header: "",
  sassOptions: {
    outputStyle: "compressed"
  },
  css: {
    src: ["./src/scss/**/*.scss"],
    dist: "./dist/assets/css",
    map: "./maps",
    prefixerOptions: {
      browsers: ["last 2 versions", "> 5%", "Firefox ESR"]
    }
  },
  js: {
    src: "./src/js/**/*.js",
    files: [
      {
        output: "lib.js",
        es6: false,
        inputs: [
          "./node_modules/jquery/dist/jquery.min.js",
          "./node_modules/bootstrap/dist/js/bootstrap.min.js"
        ]
      },
      {
        output: "scripts.js",
        es6: true,
        inputs: ["./src/js/scripts.js"]
      },
      {
        output: "carousel.js",
        es6: false,
        inputs: [
          "./node_modules/owl.carousel/dist/owl.carousel.min.js",
          "./src/js/carousel.js"
        ]
      },
      {
        output: "countdown.js",
        es6: true,
        inputs: ["./src/js/countdown.js"]
      },
      {
        output: "thumbs.js",
        es6: true,
        inputs: ["./src/js/carousel-thumbs.js"]
      },
      {
        output: "search.js",
        es6: true,
        inputs: ["./src/js/search.js"]
      },
      {
        output: "validation.js",
        es6: false,
        inputs: [
          "./node_modules/jquery-validation/dist/jquery.validate.min.js",
          "./node_modules/jquery-validation/dist/additional-methods.js",
          "./node_modules/jquery-validation-unobtrusive/dist/jquery.validate.unobtrusive.min.js"
        ]
      },
      {
        output: "rfq.js",
        es6: true,
        inputs: ["./src/js/rfq.js"]
      },
      {
        output: "category.js",
        es6: true,
        inputs: ["./src/js/category.js"]
      },
      {
        output: "magnific.js",
        es6: false,
        inputs: [
          "./node_modules/magnific-popup/dist/jquery.magnific-popup.min.js",
          "./src/js/magnific.js"
        ]
      },
      {
        output: "seller.js",
        es6: true,
        inputs: ["./src/js/seller.js"]
      }
    ],
    dist: "./dist/assets/js"
  },

  html: {
    src: "src/templates/*.hbs",
    watch: ["src/templates/**/*.hbs", "./src/json/*.json"],
    ltrData: require("./src/local/en"),
    rtlData: require("./src/local/ar"),
    options: {
      ignorePartials: true,
      batch: ["./src/templates/partials"],
      helpers: {
        capitals: function(str) {
          return str.toUpperCase();
        },
        toJSON: function(object) {
          return JSON.stringify(object);
        },
        isRtl: function(dir) {
          return dir == "rtl";
        }
      }
    }
  },
  images: {
    src: "./src/images/**/*",
    dist: "./dist/assets/img/"
  },
  copy: {
    js: {
      src: [],
      dist: "./dist/assets/js"
    }
  }
};

// ----------------------------------------------------
// -------------   handlebars/html  -------------------
// ----------------------------------------------------
gulp.task("hbs:ltr", function() {
  return gulp
    .src(config.html.src)
    .pipe(handlebars(config.html.ltrData, config.html.options))
    .pipe(
      rename({
        extname: ".html"
      })
    )
    .pipe(gulp.dest("dist"));
});

gulp.task("hbs:rtl", function() {
  return gulp
    .src(config.html.src)
    .pipe(handlebars(config.html.rtlData, config.html.options))
    .pipe(
      rename({
        suffix: "-ar",
        extname: ".html"
      })
    )
    .pipe(gulp.dest("dist"));
});

// ----------------------------------------------------
// -----------------   sass/css  ----------------------
// ----------------------------------------------------

gulp.task("style", function() {
  return (
    gulp
      .src(config.css.src)
      //.pipe(sourcemaps.init())
      .pipe(sass(config.sassOptions).on("error", sass.logError))
      .pipe(
        rename({
          suffix: ".min"
        })
      )
      .pipe(
        header(config.header, {
          pkg: pkg
        })
      )
      .pipe(autoprefixer(config.css.prefixerOptions))
      //.pipe(sourcemaps.write(config.css.map))
      .pipe(gulp.dest(config.css.dist))
  );
});

// ----------------------------------------------------
// -----------------   javascript/js  -----------------
// ----------------------------------------------------
gulp.task("script", function() {
  let bundles = getBundles(regex.js, config.js.files);
  mergeStream(
    bundles.map(file => {
      let _file;
      if (file.es6) {
        _file = gulp
          .src(file.inputs, { base: ".", allowEmpty: true })
          .pipe(concat(file.output))
          .pipe(babel());
      } else {
        _file = gulp
          .src(file.inputs, { base: ".", allowEmpty: true })
          .pipe(concat(file.output));
      }

      _file
        .pipe(uglify({ mangle: false }))
        .pipe(rename({ suffix: ".min" }))
        .pipe(header(config.header, { pkg: pkg }))
        .pipe(gulp.dest(config.js.dist));
      return _file;
    })
  );
});

// ----------------------------------------------------
// -----------------   Images/copy  -----------------
// ----------------------------------------------------

gulp.task("copy:img", function() {
  return gulp.src(config.images.src).pipe(gulp.dest(config.images.dist));
});

gulp.task("copy:js", function() {
  return gulp.src(config.copy.js.src).pipe(gulp.dest(config.copy.js.dist));
});

// ----------------------------------------------------
// -----------------   watch/files  -----------------
// ----------------------------------------------------
gulp.task("watch", function() {
  gulp.watch(config.js.src, ["script"]);
  gulp.watch(config.css.src, ["style"]);
  gulp.watch(config.html.watch, ["hbs"]);
  gulp.watch(config.images.src, ["copy:img"]);
});

gulp.task("hbs", ["hbs:ltr", "hbs:rtl"]);

gulp.task("default", ["script", "style", "hbs", "watch"]);

/* handlebars.Handlebars.registerHelper("MakeList", function(obj, options) {
  var result = "";

  if (obj.subLinks) {
    result += `<li  class="has_submenu">
            <a href="#collapse-${obj.id}" class=""  data-toggle="collapse"   role="button" aria-expanded="false" aria-controls="collapse-${obj.id}">
               ${obj.Link}
              <i class="fas fa-chevron-left"></i>
             </a> <div class="collapse" id="collapse-${obj.id}"> <ul>`;
    obj.content.forEach(element => {
      if (element.published && element.add_to_submenu) {
        result += `
                       <li>
                         <a href="#${element.id}" class="">${element.title}</a>
                       </li>
               `;
      }
    });
    result += ` </ul></div></li>`;
  } else {
    result += `<li> <a href="#${obj.id}"> ${obj.Link}</a> </li>`;
  }

  return result;
}); */

/* handlebars.Handlebars.registerHelper("MakeNav", function(obj, options) {
  var result = "";

  if (obj.subLinks) {
    result += `<span><a class="nav-link" href="#${obj.id}"> <i class="fas fa-chevron-left"></i> ${obj.Link} </a>`;
    result += ` <nav class="nav subnav flex-column">`;

    obj.content.forEach(element => {
      if (element.published && element.add_to_submenu) {
        result += `<a class="nav-link" href="#${element.id}">${element.title}</a> `;
      }
    });
    result += ` </nav></span>`;
  } else {
    result += `<span><a class="nav-link" href="#${obj.id}">${obj.Link} </a></span>`;
  }

  return result;
}); */

handlebars.Handlebars.registerHelper("is", function(v1, v2, options) {
  if (v1 === v2) {
    return options.fn(this);
  }
  return options.inverse(this);
});

handlebars.Handlebars.registerHelper("times", function(n, block) {
  var accum = "";
  for (var i = 0; i < n; ++i) accum += block.fn(i);
  return accum;
});
handlebars.Handlebars.registerHelper("for", function(from, to, incr, block) {
  var accum = "";
  for (var i = from; i < to; i += incr) accum += block.fn(i);
  return accum;
});

handlebars.Handlebars.registerHelper("each_up_to", function(ary, max, options) {
  if (!ary || ary.length == 0) return options.inverse(this);

  var result = [];
  for (var i = 0; i < max && i < ary.length; ++i)
    result.push(options.fn(ary[i]));
  return result.join("");
});

handlebars.Handlebars.registerHelper("each_from_to", function(
  ary,
  from,
  max,
  options
) {
  if (!ary || ary.length == 0) return options.inverse(this);

  var result = [];
  for (var i = from; i < max + from && i < ary.length; ++i)
    result.push(options.fn(ary[i]));
  return result.join("");
});

handlebars.Handlebars.__switch_stack__ = [];

handlebars.Handlebars.registerHelper("switch", function(value, options) {
  handlebars.Handlebars.__switch_stack__.push({
    switch_match: false,
    switch_value: value
  });
  var html = options.fn(this);
  handlebars.Handlebars.__switch_stack__.pop();
  return html;
});
handlebars.Handlebars.registerHelper("case", function(value, options) {
  var args = Array.from(arguments);
  var options = args.pop();
  var caseValues = args;
  var stack =
    handlebars.Handlebars.__switch_stack__[
      handlebars.Handlebars.__switch_stack__.length - 1
    ];

  if (stack.switch_match || caseValues.indexOf(stack.switch_value) === -1) {
    return "";
  } else {
    stack.switch_match = true;
    return options.fn(this);
  }
});
handlebars.Handlebars.registerHelper("default", function(options) {
  var stack =
    handlebars.Handlebars.__switch_stack__[
      handlebars.Handlebars.__switch_stack__.length - 1
    ];
  if (!stack.switch_match) {
    return options.fn(this);
  }
});

handlebars.Handlebars.registerHelper("even", function(number, options) {
  if (number % 2 == 0) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
});

handlebars.Handlebars.registerHelper("odd", function(number, options) {
  if (number % 2 != 0) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
});

handlebars.Handlebars.registerHelper("ifObject", function(item, options) {
  if (typeof item === "object") {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
});

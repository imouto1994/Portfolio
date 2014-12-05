'use strict';

module.exports = function(grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Help when optimizing build times
  require('time-grunt')(grunt);

  // Configurable paths for the application
  var appConfig = {
    source: 'public',
    dist: 'dist'
  }

  // Define the configuration for all tasks
  grunt.initConfig({
      /*******************************/
     /*      REFRESH FOLDERS        */
    /*******************************/
    clean: {
      dist: [appConfig.dist, '!' + appConfig.dist + '/sftp-config.json']
    },

      /*******************************/
     /*         COPY FILES          */
    /*******************************/
    copy: {
      img: {
        expand: true,
        cwd: appConfig.source + '/images/',
        src: ['{,*/}*'],
        dest: appConfig.dist + '/images/'
      },
      sftp: {
        expand: true,
        flatten: true,
        src: appConfig.source + '/sftp-config.json',
        dest: appConfig.dist + '/'
      },
      favicon: {
        expand: true,
        flatten: true,
        cwd: appConfig.source + '/',
        src: ['*.png'],
        dest: appConfig.dist + '/'
      },
      fonts: {
        expand: true,
        flatten: true,
        cwd: appConfig.source + '/fonts/',
        src: ['**/*.eot', '**/*.ttf', '**/*.otf', '**/*.woff','**/*.woff2', '**/*.svg'],
        dest: appConfig.dist + '/fonts/'
      },
      html: {
        files: [
          {
            expand: true,
            flatten: true,
            src: appConfig.source + '/*.html',
            dest: appConfig.dist + '/'
          }/*,
          { 
            expand: true,
            flatten: true,
            src: appConfig.source + '/views/templates/*.html',
            dest: appConfig.dist + '/views/templates/'
          },
          {
            expand: true,
            flatten: true,
            src: appConfig.source + '/views/*.html',
            dest: appConfig.dist + '/views/'
          }*/
        ]
      },
      vendor: {
        files: [
          {
            src: "bower_components/html5-boilerplate/css/normalize.css", 
            dest: appConfig.dist + "/vendor/css/html5-boilerplate/normalize.css"
          },
          {
            src: "bower_components/html5-boilerplate/css/main.css", 
            dest: appConfig.dist + "/vendor/css/html5-boilerplate/main.css"
          },
          {
            src: "bower_components/animate.css/animate.min.css",
            dest: appConfig.dist + "/vendor/css/animate.css/animate.min.css"
          },
          {
            src: "bower_components/bootstrap/dist/css/bootstrap.min.css",
            dest: appConfig.dist + "/vendor/css/bootstrap/bootstrap.min.css"
          },
          {
            src: "bower_components/angular/angular.min.js", 
            dest: appConfig.dist + "/vendor/js/angular.min.js"
          },
          {
            src: "bower_components/angular-route/angular-route.min.js", 
            dest: appConfig.dist + "/vendor/js/angular-route.min.js"
          },
          {
            src: "bower_components/angular-animate/angular-animate.min.js", 
            dest: appConfig.dist + "/vendor/js/angular-animate.min.js"
          },
          {
            src: "bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js",
            dest: appConfig.dist + "/vendor/js/ui-bootstrap-tpls.min.js"
          },
          {
            src: "bower_components/angular-inview/angular-inview.js",
            dest: appConfig.dist + "/vendor/js/angular-inview.js"
          }
        ]
      }
    },

      /*******************************/
     /*      HTML TO JS             */
    /*******************************/
    html2js: {
      options: {
        base: 'public/views'
      },
      main: {
        src: [
          appConfig.source + '/views/templates/*.html',
          appConfig.source + '/views/*.html',
        ],
        dest: appConfig.dist + '/scripts/templates.js'
      }
    },

      /*******************************/
     /*      MINIFY IMAGE           */
    /*******************************/
    imagemin: {
      dist: {
        files: [{
          expand:true,
          cwd: appConfig.dist + '/images/',
          src: ['*.png'],
          dest: appConfig.dist + '/images/',
        }]
      }, 
      favicon: {
        file: [{
          expand: true,
          cwd: appConfig.dist + '/',
          src: ['*.png'],
          dest: appConfig.dist + '/'          
        }]
      }
    }, 

      /*******************************/
     /*      CONCAT FILES           */
    /*******************************/
    concat: {
      js: {
        src: [
          appConfig.source + '/scripts/app.js',
          appConfig.source + '/scripts/controllers/*.js',
          appConfig.source + '/scripts/directives/*.js'
        ],
        dest: appConfig.dist + '/scripts/app.js'
      },
      fonts: {
        src: [
          appConfig.source + '/fonts/IcoMoon/IcoMoon.css',
          appConfig.source + '/fonts/Lighthouse/Lighthouse.css'
        ],
        dest: appConfig.dist + '/fonts/fonts.css'
      }
    },

      /*******************************/
     /*      NG ANNOTATE            */
    /*******************************/
    ngAnnotate: {
      dist: {
        files: [{
          expand: true,
          cwd: appConfig.dist + '/scripts/',
          src: ['*.js', '!oldieshim.js'],
          dest: appConfig.dist + '/scripts/'
        }]
      }
    },

      /*******************************/
     /*      UFLIGY SCRIPTS         */
    /*******************************/
    uglify: {
      options: {
        mangle: false
      },
      js: {
        src: appConfig.dist + '/scripts/app.js',
        dest: appConfig.dist + '/scripts/app.js'
      },
      templates: {
        src: appConfig.dist + '/scripts/templates.js',
        dest: appConfig.dist + '/scripts/templates.js'
      }
    },

      /*******************************/
     /*      LESS COMPILER          */
    /*******************************/
    less: {
      compile: {
        options: {
          strictMath: true,
        },
        files: {
          'dist/styles/app.css': 'public/styles/app.less.css'
        }
      },
    },

      /*******************************/
     /*      AUTO PREFIXERS         */
    /*******************************/
    autoprefixer: {
      options: {
        browsers: ['last 2 versions', 'ie 8', 'ie 9', 'Firefox ESR', 'Opera 12.1']
      },
      dist: {
        expand: true,
        flatten: true,
        src: appConfig.dist + '/styles/*.css',
        dest: appConfig.dist + '/styles/' 
      }
    },

      /*******************************/
     /*      COMB CSS ORDER         */
    /*******************************/
    csscomb: {
      dist: {
        expand: true,
        cwd: appConfig.dist + '/styles/',
        src: ['*.css'],
        dest: appConfig.dist + '/styles/'
      }
    },

      /*******************************/
     /*      MINIFY CSS             */
    /*******************************/
    cssmin: {
      options: {
        compatibility: 'ie8',
        keepSpecialComments: '*',
        noAdvanced: true
      },
      css: {
        files: 
        [
          {
            expand: true,
            cwd: appConfig.dist + '/styles/',
            src: ['*.css', '!*.min.css'],
            dest: appConfig.dist + '/styles/',
          },
          {
            expand: true,
            cwd: appConfig.dist + '/fonts/',
            src: ['*.css', '!*.min.css'],
            dest: appConfig.dist + '/fonts/',
          }
        ]
      }
    }, 

      /*******************************/
     /*      MINIFY HTML            */
    /*******************************/
    htmlmin: {
      dist: {
        options: {
          collapseWhitespace: true,
          conservativeCollapse: true,
          collapseBooleanAttributes: true,
          removeCommentsFromCDATA: true,
          removeOptionalTags: true
        },
        files: [{
          expand: true,
          cwd: appConfig.source,
          src: ['*.html'],
          dest: appConfig.dist
        }]
      }
    },
      /*******************************/
     /*      WATCH CHANGES          */
    /*******************************/
    watch: {
      scripts: {
        files: [appConfig.source + '/scripts/{,*/}*.js'],
        tasks: ['concat:js'],
        options: {
          livereload: '<%= connect.server.options.livereload %>'
        }
      },
      styles: {
        files: [appConfig.source + '/styles/{,*/}*.less.css'],
        tasks: ['less', 'autoprefixer'],
        options: {
          livereload: '<%= connect.server.options.livereload %>'
        }
      },
      html: {
        files: [appConfig.source + '/*.html', appConfig.source + '/views/{,*/}*.html'],
        tasks: ['copy:html', 'html2js'],
        options: {
          livereload: '<%= connect.server.options.livereload %>'
        }
      },
      img: {
        files: [appConfig.source + '/images/*'],
        tasks: ['copy:img'],
        options: {
          livereload: '<%= connect.server.options.livereload %>'
        }
      }
    },

      /*******************************/
     /*      CONNECT SERVER         */
    /*******************************/    
    connect: {
      server:{
        options: {
          port: 2110,
          hostname: 'localhost',
          livereload: 35729,
          base: {
            path: appConfig.dist,
            options: {
              index: 'index.html',
              maxAge: 300000
            }
          }
        }
      }
    }
  });
  
  grunt.registerTask('server', 'Compile then start a web connect server', function (target){  
    grunt.task.run([
      'clean',
      'copy',
      'html2js',
      'concat',
      'less',
      'autoprefixer',
      'connect:server',
      'watch'
    ]);
  });

  grunt.registerTask('build', 'Build the final product', function (target){
    grunt.task.run([
      'clean',
      'copy',
      'html2js',
      'concat',
      'ngAnnotate',
      'uglify',
      'less',
      'autoprefixer',
      'csscomb',
      'cssmin',
      'htmlmin',
      'imagemin'
    ]);
  });

  grunt.registerTask('build_server', 'Build and serve the final product', function (target){
    grunt.task.run([
      'clean',
      'copy',
      'html2js',
      'concat',
      'ngAnnotate',
      'uglify',
      'less',
      'autoprefixer',
      'csscomb',
      'cssmin',
      'htmlmin',
      'imagemin',
      'connect:server',
      'watch'
    ]);
  });
}
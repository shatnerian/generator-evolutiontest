module.exports = function(grunt) {

  grunt.initConfig({

  pkg: grunt.file.readJSON('package.json'),

      sass: {                              // Task
        dist: {                            // Target
          options: {                       // Target options
            style: 'compressed',
            //show full traceback on error
            trace: true,
          },
          files: {                         // List of files
            'build/assets/css/styles.min.css': 'assets/css/styles.scss',       // 'destination': 'source'
            'build/assets/css/ie.min.css': 'assets/css/ie.scss',
            'build/assets/css/evolution_ui.min.css': 'assets/css/evolution_ui.scss',
            'build/assets/css/evolution.min.css': 'assets/css/evolution.scss'
          }
        }
      },

      uglify: {
        options: {
          mangle: false
        },
        my_target: {
          files: {
            'build/assets/scripts/site.min.js': ['assets/scripts/site_main.js', 'assets/scripts/site.js'],
            'build/assets/scripts/evolution.min.js': ['assets/scripts/core/foundation/vendor/jquery.js', 'assets/scripts/core/foundation/vendor/jquery.cookie.js','assets/scripts/core/foundation/vendor/placeholder.js','assets/scripts/core/foundation/vendor/fastclick.js','assets/scripts/core/foundation/foundation/foundation.js','assets/scripts/core/foundation/foundation/foundation.alert.js', 'assets/scripts/core/foundation/foundation/foundation.accordion.js', 'assets/scripts/core/foundation/foundation/foundation.abide.js', 'assets/scripts/core/foundation/foundation/foundation.dropdown.js', 'assets/scripts/core/foundation/foundation/foundation.equalizer.js','assets/scripts/core/foundation/foundation/foundation.offcanvas.js','assets/scripts/core/foundation/foundation/foundation.reveal.js','assets/scripts/core/foundation/foundation/foundation.tab.js','assets/scripts/core/foundation/foundation/foundation.tooltip.js','assets/scripts/core/foundation/foundation/foundation.topbar.js','assets/scripts/core/lib/jquery/jquery-ui.js','assets/scripts/core/lib/jquery/plugins/jquery.ui.touch-punch.js','assets/scripts/core/lib/jquery/plugins/owl.carousel.js','assets/scripts/core/lib/jquery/plugins/jquery.dataTables.js','assets/scripts/core/lib/jquery/plugins/datatables.foundation.js','assets/scripts/core/lib/jquery/plugins/jquery.maskedinput.js','assets/scripts/core/lib/jquery/plugins/jquery.mousewheel.js','assets/scripts/core/lib/jquery/plugins/jquery.mCustomScrollbar.js','assets/scripts/core/lib/mobile/ios-orientationchange-fix.js','assets/scripts/core/base/abide.js','assets/scripts/core/base/base.js','assets/scripts/core/base/dropdowns.js','assets/scripts/core/base/equalizer.js','assets/scripts/core/base/helpers.js','assets/scripts/core/objects/accordion.js','assets/scripts/core/objects/autocomplete.js','assets/scripts/core/objects/carousel.js','assets/scripts/core/objects/data_table.js','assets/scripts/core/objects/datepicker.js','assets/scripts/core/objects/off_canvas.js','assets/scripts/core/objects/reveal.js','assets/scripts/core/objects/scroll_pane.js','assets/scripts/core/objects/slider.js','assets/scripts/core/objects/tabs.js','assets/scripts/core/objects/tooltip.js','assets/scripts/core/objects/top_bar.js']
          }
       }
      },

      jshint: {
        all: ['Gruntfile.js', 'assets/scripts/**/*.js'],
        options: {
          curly: true,
          eqeqeq: true,
          eqnull: true,
          browser: true,
          globals: {
            jQuery: true
          },
        },
      },

      imagemin: {                          // Task
        dynamic: {                         // Another target
          files: [{
            expand: true,                  // Enable dynamic expansion
            cwd: '',                   // Src matches are relative to this path
            src: ['assets/images/**/*.{png,jpg,gif}'],   // Actual patterns to match
            dest: 'build/'                  // Destination path prefix
          }]
        }
      },

      copy: {
        main: {
          files: [
            // includes files within path and its sub-directories         
            {expand: true, src: ['assets/fonts/**'], dest: 'build/'},
            {expand: true, src: ['models/**'], dest: 'build/'}, 
            {expand: true, src: ['design/**'], dest: 'build/'},                        
          ]
        }
      },

      dusthtml: {
        dist: {
          src: "templates/index.dust",
          dest: "build/",

          options: {
            // preserve html formatting 
            whitespace: true,
            context: ["models/context-global.json","models/context-page-title.json"],
          }
        }
      },

      todo: {
        options: {},
        src: [
          'templates/*'
        ],
      },

      watch: {
        options: {
          livereload: true,
        },
              sass: {
              // We watch and compile sass files and live reload here
              files: ['assets/css/**/*.scss'],
              tasks: ['sass'],
              options: {
              // Start another live reload server on port 9009
              }
            },
            scripts: {
              // We watch and compile min.js files and live reload here
              files: ['assets/scripts/**/*.js'],
              tasks: ['uglify'],
              options: {
              // Start another live reload server on port 9009
              }
            },
        html: {
          files: ['templates/includes/**/*.html','templates/**/*.dust'],
          tasks: ['dusthtml'],
        }
      },

      connect: {
        server: {
          options: {
            port: 9000,
            base: 'build',
            hostname: '0.0.0.0',
            protocol: 'http',
            livereload: true,
            open: true,
          }
        }
      },

    'sftp-deploy': {
      build: {
      auth: {
        host: 'usfkl21as292v',
        authKey: 'key1'
      },
      src: 'build/',
      dest: '/www/content/uxui/docs/users/sherry/yeoman-test',
      serverSep: '/',
      concurrency: 4,
      progress: true
    }
  }

});

  // Enable watch for livereload
  grunt.loadNpmTasks('grunt-contrib-watch');
  
  // Enable server and open in default browser
  grunt.loadNpmTasks('grunt-contrib-connect');
 
  // Enable Sass compiling
  grunt.loadNpmTasks('grunt-contrib-sass');

  // Concatinate and minify scripts
  grunt.loadNpmTasks('grunt-contrib-uglify');

  //Copy files and folders during build
  grunt.loadNpmTasks('grunt-contrib-copy');

  //Dustjs teamplates to html
  grunt.loadNpmTasks("grunt-dust-html");

  //Jshint - check scripts for errors
  grunt.loadNpmTasks('grunt-contrib-jshint');

  //Image optimization and create image directories in build folder
  grunt.loadNpmTasks('grunt-contrib-imagemin');

  //Find TODO, FIXME and NOTE inside files and print to cli
  grunt.loadNpmTasks('grunt-todo');

  //Deploy contents for build folder to server
  grunt.loadNpmTasks('grunt-sftp-deploy');


//Register tasks
grunt.registerTask('default', ['sass', 'uglify', 'copy', 'dusthtml','imagemin']);
grunt.registerTask('server', ['connect','watch']);
grunt.registerTask('server', ['jshint']);
grunt.registerTask('todo', ['todo']);
grunt.registerTask('sftp-deploy', ['sftp-deploy']);

};
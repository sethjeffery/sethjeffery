module.exports = (grunt) ->

  # Project configuration
  grunt.initConfig

    coffee:
      build:
        files: [
          'build/js/main.js': ['src/coffee/**/*.coffee']
        ]

    compass:
      build:
        options:
          sassDir: "src/sass"
          cssDir: "build/css"
          specify: 'src/sass/main.scss'

    haml:
      build:
        files:
          'build/index.html': 'src/index.haml'
        options:
          language: 'coffee'

    clean: ["build", "tmp"]

    copy:
      build:
        files: [
          expand: true
          cwd: 'src/'
          src: ['js/**/*.js', 'favicon.png', 'apple-touch-icon.png', '.htaccess', 'img/**/*']
          dest: 'build/'
          filter: 'isFile'
        ]

    watch:
      js:
        files: 'src/js/**/*.js'
        tasks: ['copy']
      coffee:
        files: 'src/coffee/**/*.coffee'
        tasks: ['coffee']
      images:
        files: 'src/img/**/*'
        tasks: ['copy']
      pages:
        expand: true
        files: ['src/index.haml', 'src/partials/**/*.haml']
        tasks: ['haml']
      root:
        files: 'src/*.*'
        tasks: ['copy']
      compass:
        files: 'src/sass/**/*.scss'
        tasks: ['compass', 'autoprefixer']

    autoprefixer:
      dist:
        files:
          'build/css/main.css': 'build/css/main.css'

    bgShell:
      startServer:
        cmd: "bundle exec unicorn"
        execOpts:
          maxBuffer: false
        bg: true

    imagemin:
      build:
        files: [
          expand: true
          cwd: 'build/img'
          src: ['**/*.{png,jpg,gif}']
          dest: 'build/img'
        ]

  # Load the plugins
  grunt.loadNpmTasks 'grunt-contrib-uglify'
  grunt.loadNpmTasks 'grunt-contrib-compass'
  grunt.loadNpmTasks 'grunt-contrib-copy'
  grunt.loadNpmTasks 'grunt-contrib-clean'
  grunt.loadNpmTasks 'grunt-contrib-coffee'
  grunt.loadNpmTasks 'grunt-haml'
  grunt.loadNpmTasks 'grunt-contrib-watch'
  grunt.loadNpmTasks 'grunt-bg-shell'
  grunt.loadNpmTasks 'grunt-contrib-imagemin'
  grunt.loadNpmTasks 'grunt-autoprefixer'

  # Tasks
  grunt.registerTask 'build', ['clean', 'coffee', 'compass', 'autoprefixer', 'haml', 'copy']
  grunt.registerTask 'default', ['build', 'bgShell:startServer', 'watch']
  grunt.registerTask 'deploy', ['build', 'imagemin']

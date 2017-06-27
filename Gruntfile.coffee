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
        ,
          expand: true
          cwd: 'tmp/'
          src: ['img/sprites.png', 'img/sprites@2x.png']
          dest: 'build/'
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
        tasks: ['compass']
      sprites:
        files: 'src/sprites/**/*.png'
        tasks: ['spritesheet', 'compass', 'copy']

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
  grunt.loadNpmTasks 'grunt-spritesheet'
  grunt.loadNpmTasks 'grunt-bg-shell'
  # grunt.loadNpmTasks 'grunt-contrib-imagemin'

  # Tasks
  grunt.registerTask 'build', ['clean', 'coffee', 'compass', 'haml', 'copy']#, 'imagemin']
  grunt.registerTask 'default', ['build', 'bgShell:startServer', 'watch']
  grunt.registerTask 'deploy', ['build']#, 'imagemin']

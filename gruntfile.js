module.exports = function (grunt) {
 require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

 grunt.initConfig({
   less: {
     development: {
       files: {
         'app/css/main.min.css': 'app/css/main.less'
       },
       options: {
         compress: true,
         ieCompat: false,
         sourceMap: true,
         sourceMapFilename: 'app/css/main.min.css.map',
         sourceMapURL: 'main.min.css.map'
       }
     }
   },
   connect: {
     all: {
       options: {
         port: 9999,
         hostname: "0.0.0.0",
         keepalive: true
       }
     }
   },
   open: {
     all: {
       path: 'http://localhost:<%= connect.all.options.port%>'
     }
   },
   watch: {
     all: {
       files: ['**/*.html', '**/*.js', '**/*.css'],
       options: {
         livereload: true
       }
     }
   }
 });

 grunt.loadNpmTasks('grunt-contrib-less');
 grunt.loadNpmTasks('grunt-http-server');

 grunt.registerTask('default', ['less']);
 grunt.registerTask('server', [
   'open',
   'connect',
   'watch'
 ]);

};
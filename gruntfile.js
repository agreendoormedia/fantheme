module.exports = function(grunt) {
 
    grunt.initConfig({
 
        //our JSHint options
        jshint: {
            all: ['main.js'] //files to lint
        }
    });
 
    //load our tasks
    grunt.loadNpmTasks('grunt-contrib-jshint');
}
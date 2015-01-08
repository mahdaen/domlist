/**
 * Keong.
 * Grunt Definitions.
 * Language: Javascript.
 * Created by mahdaen on 12/8/14.
 * License: GNU General Public License v2 or later.
 */

/* Gunt Module */
module.exports = function(grunt) {
    var source = 'source/';
    var libs = 'libraries/';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            core: {
                files: {
                    'dist/domlist.js': [
                        'source/domlist.js'
                    ]
                }
            }
        },

        /* Uglifying Scripts */
        uglify: {
            options: {
                mangle: true,
            },
            build: {
                files: {
                    'dist/domlist.min.js': 'dist/domlist.js'
                }
            }
        },

        apidoc: {
            core: {
                src: 'source/',
                dest: 'docs/'
            }
        },

        /* Watch for File Changes */
        watch: {
            options: {
                livereload: 2084
            },
            core: {
                files: ['source/**/*.js'],
                tasks: ['concat:core', 'apidoc']
            }
        }
    });

    /* Loading Tasks */
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-sync');
    grunt.loadNpmTasks('grunt-apidoc');

    /* Registering Tasks */
    grunt.registerTask('devel', ['concat', 'apidoc', 'watch']);
    grunt.registerTask('alpha', ['concat', 'apidoc']);
    grunt.registerTask('build', ['concat', 'apidoc', 'uglify:build']);
}

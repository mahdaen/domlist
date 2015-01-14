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
                        /* Externals */
                        'node_modules/native-js/dist/nativejs.js',

                        /* Cores */
                        'source/com.core.js',
                        'source/com.data.js',

                        /* Modules */
                        'source/mod.core.js',
                        'source/mod.class.js',
                        'source/mod.inject.js',
                        'source/mod.bool.js',
                    ]
                }
            },
            tags: {
                files: {
                    'tags/v2.0.0.js': [
                        'dist/domlist.js'
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
                src: 'tags/',
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
                tasks: ['concat', 'apidoc']
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
    grunt.registerTask('devel', ['concat', 'apidoc','uglify:build', 'watch']);
    grunt.registerTask('alpha', ['concat', 'apidoc']);
    grunt.registerTask('build', ['concat', 'apidoc', 'uglify:build']);

    grunt.registerTask('docs', ['apidoc']);
}

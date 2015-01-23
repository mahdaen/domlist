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
                        'source/com.polyfill.js',
                        'source/com.core.js',
                        'source/com.data.js',

                        /* Modules */
                        'source/mod.core.js',
                        'source/mod.class.js',
                        'source/mod.inject.js',
                        'source/mod.bool.js',
                        'source/mod.event.js',
                        'source/mod.event.alias.js',
                        'source/mod.css.js',
                        'source/mod.animation.js',
                    ]
                }
            },
            //tags: {
            //    files: {
            //        'tags/v2.1.0.js': [
            //            'dist/domlist.js'
            //        ]
            //    }
            //}
        },

        /* Uglifying Scripts */
        uglify: {
            build: {
                options: {
                    mangle: true,
                    sourceMap: true,
                    sourceMapName: 'dist/domlist.min.map'
                },
                files: {
                    'dist/domlist.min.js': 'dist/domlist.js'
                }
            },
            lites: {
                options: {
                    mangle: false,
                    beautify: true
                },
                files: {
                    'dist/domlist.lite.js': 'dist/domlist.js'
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
    grunt.registerTask('devel', ['concat', 'apidoc', 'watch']);
    grunt.registerTask('alpha', ['concat', 'apidoc']);
    grunt.registerTask('build', ['concat', 'apidoc', 'uglify']);

    grunt.registerTask('docs', ['apidoc']);
}

module.exports = {

    dist: {
        files: [{
            expand: true,
            cwd: '.tmp/',
            src: ['**/*.html'], // Actual pattern(s) to match.
            dest: '<%= yeoman.dist %>'
        }]
    },
    // Compile .jade files in app/views/ to .tmp/
    compile: {
        options: {
            pretty: true,
            data: function(dest, src) {
                return {
                    dest: 'DESTINATION'
                }
            }
        },
        files: {
            "<%= yeoman.app %>/index.html": ["<%= yeoman.app %>/index.jade"],
            "<%= yeoman.app %>/elements/index.html": ["<%= yeoman.app %>/elements/index.jade"]
        }
    }
    
}
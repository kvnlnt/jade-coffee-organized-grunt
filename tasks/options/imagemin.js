module.exports = {
    dist: {
        files: [{
            expand: true,
            cwd: '<%= yeoman.app %>/images',
            src: '{,*/}*.{gif,jpeg,jpg,png}',
            dest: '<%= yeoman.dist %>/images'
        }]
    }
}
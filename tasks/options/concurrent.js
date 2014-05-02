module.exports = {
    server: [
        'compass:server',
        'copy:styles'
    ],
    test: [
        'copy:styles'
    ],
    dist: [
        'compass',
        'copy:styles',
        'imagemin',
        'svgmin'
    ]
}
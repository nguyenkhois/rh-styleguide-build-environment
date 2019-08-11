module.exports = {
    entryPoints: {
        // index is default and you can add many more entry points here
        index: './src/index.js',
    },
    htmlTemplate: './src/index.html',
    distDir: './dist', // Distribution directory
    host: 'localhost',
    serverPort: 3000, // Local Webpack Dev Server port (main)
    bsPort: 3030 // BrowserSync port (only for using BrowserSync)
};
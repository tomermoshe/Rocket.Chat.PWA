module.exports = {
  staticFileGlobs: [
    'dist/**.html',
    'dist/**.js',
    'dist/**.css',
    'dist/**.+(ttf|woff|woff2|svg|eot)',
    'dist/assets/images/*',
  ],
  root: 'dist',
  stripPrefix: 'dist/',
  navigateFallback: '/index.html',
  runtimeCaching: [{
    urlPattern: /graphql/,
    handler: 'networkFirst'
  }]
};

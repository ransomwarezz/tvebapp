module.exports = {
  navigateFallback: '/index.html',
  /* 
   * https://firebase.google.com/docs/hosting/reserved-urls#reserved_urls_and_service_workers 
   * https://github.com/Polymer/polymer-build/issues/35#issuecomment-245690408
   */
  navigateFallbackWhitelist: [/^(?!\/__).*/], 
  stripPrefix: 'dist',
  root: 'dist/',
  staticFileGlobs: [
    'dist/index.html',
    'dist/**.js',
    'dist/**.css'
  ]
};
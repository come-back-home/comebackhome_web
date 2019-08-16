const config = {
  appName: 'Comebackhome',
  apiUrl: 'http://0.0.0.0:7001',
  imageUrl: 'http://0.0.0.0',
  debug: false,
  production: true
};
if (config.production) {
  config.appName = 'Comebackhome';
  config.apiUrl = '';
  config.imageUrl = '';
  config.debug = false
}
export { config }

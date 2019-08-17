const config = {
  appName: 'Comebackhome',
  apiUrl: 'http://0.0.0.0:5000',
  imageUrl: 'http://0.0.0.0',
  debug: true,
  production: false
};
if (config.production) {
  config.appName = 'Comebackhome';
  config.apiUrl = '';
  config.imageUrl = '';
  config.debug = false
}
export { config }

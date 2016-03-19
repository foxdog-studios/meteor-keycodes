'uses strict';

Package.describe({
  name: 'fds:keycodes',
  summary: 'Names for event key codes',
  version: '2.0.0',
  git: 'https://github.com/foxdog-studios/meteor-keycodes'
});

Package.onUse(function onUse (api) {
  api.versionsFrom('METEOR@1.2.1');
  api.addFiles('keycodes.js', 'client');
  api.export('KeyCodes', 'client');
});

Package.onTest(function onTest (api) {
  api.use('tinytest');
  api.use('fds:keycodes');
  api.addFiles('test.js', 'client');
});

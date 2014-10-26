Package.describe({
  name: 'fds:keycodes',
  summary: 'Names for event key codes',
  version: '1.0.2',
  git: 'https://github.com/foxdog-studios/meteor-keycodes'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.4');
  api.addFiles('client/lib/keycodes.js', 'client');
  api.export('KeyCodes', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('fds:keycodes');
  api.addFiles('test.js', 'client');
});


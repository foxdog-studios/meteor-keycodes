Package.describe({
    summary: 'Key codes'
});

Package.on_use(function (api) {
  api.add_files(['keycodes.js']);
  api.export(['KeyCodes']);
});


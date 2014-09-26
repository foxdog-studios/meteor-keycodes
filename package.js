Package.describe({
  summary: "Names for event key codes",
  version: "1.0.0",
  git: "https://github.com/foxdog-studios/meteor-keycodes"
});

Package.onUse(function (api) {
  api.addFiles("keycodes.js", "client");
  api.export("KeyCodes", "client");
});


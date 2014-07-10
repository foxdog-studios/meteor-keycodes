(function () {
  'strict mode';

  var KeyCodes = require('./keycodes').KeyCodes;

  var byCode = {};
  for (var name in KeyCodes) {
    var code = KeyCodes[name];
    if (!byCode.hasOwnProperty(code)) {
      byCode[code] = [];
    }
    byCode[code].push(name);
  }

  var rows = [];
  for (code in byCode) {
    if (byCode.hasOwnProperty(code)) {
      var names = byCode[code];
      names.sort();
      rows.push([code, names]);
    }
  }

  rows.sort(function (a, b) {
    a = parseInt(a[0]);
    b = parseInt(b[0]);
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return  0;
  });

  var parts = ['| Key code | Names |\n',
               '|---------:|:------|\n'];

  for (var i = 0; i < rows.length; i++) {
    var row = rows[i];
    parts.push('|', row[0], '|');
    var names = row[1]
    for (var j = 0; j < names.length; j++) {
      parts.push(names[j]);
      if (j < names.length - 1) {
        parts.push(' ');
      }
    }
    parts.push('|');
    if (i < rows.length - 1) {
      parts.push('\n');
    }
  }

  console.log(parts.join(''));
})();


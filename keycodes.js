KeyCodes = (function () {
  'use strict';

  var KeyCodes = Object.create(null);

  var define = function (code) {
    for (var i = 1; i < arguments.length; ++i) {
      var key = arguments[i];
      Object.defineProperty(KeyCodes, key, {
        value: code,
        writable: false,
        enumerable: true,
        configurable: false
      });
    }
  };

  define(  8, 'BACKSPACE'       );
  define(  9, 'TAB'             );
  define( 13, 'ENTER'           );
  define( 16, 'SHIFT'           );
  define( 17, 'CTRL'            );
  define( 18, 'ALT'             );
  define( 19, 'BREAK', 'PAUSE'  );
  define( 20, 'CAPS_LOCK'       );
  define( 27, 'ESCAPE'          );
  define( 32, 'SPACE'           );
  define( 33, 'PAGE_UP'         );
  define( 34, 'PAGE_DOWN'       );
  define( 35, 'END'             );
  define( 36, 'HOME'            );
  define( 37, 'LEFT_ARROW'      );
  define( 38, 'UP_ARROW'        );
  define( 39, 'RIGHT_ARROW'     );
  define( 40, 'DOWN_ARROW'      );
  define( 45, 'INSERT'          );
  define( 46, 'DELETE'          );
  define( 48, '0', 'ZERO'       );
  define( 49, '1', 'ONE'        );
  define( 50, '2', 'TWO'        );
  define( 51, '3', 'THREE'      );
  define( 52, '4', 'FOUR'       );
  define( 53, '5', 'FIVE'       );
  define( 54, '6', 'SIX'        );
  define( 55, '7', 'SEVEN'      );
  define( 56, '8', 'EIGHT'      );
  define( 57, '9', 'NINE'       );
  define( 65, 'A'               );
  define( 66, 'B'               );
  define( 67, 'C'               );
  define( 68, 'D'               );
  define( 69, 'E'               );
  define( 70, 'F'               );
  define( 71, 'G'               );
  define( 72, 'H'               );
  define( 73, 'I'               );
  define( 74, 'J'               );
  define( 75, 'K'               );
  define( 76, 'L'               );
  define( 77, 'M'               );
  define( 78, 'N'               );
  define( 79, 'O'               );
  define( 80, 'P'               );
  define( 81, 'Q'               );
  define( 82, 'R'               );
  define( 83, 'S'               );
  define( 84, 'T'               );
  define( 85, 'U'               );
  define( 86, 'V'               );
  define( 87, 'W'               );
  define( 88, 'X'               );
  define( 89, 'Y'               );
  define( 90, 'Z'               );
  define( 91, 'LEFT_WINDOW_KEY' );
  define( 92, 'RIGHT_WINDOW_KEY');
  define( 93, 'SELECT_KEY'      );
  define( 96, 'NUMPAD_0'        );
  define( 97, 'NUMPAD_1'        );
  define( 98, 'NUMPAD_2'        );
  define( 99, 'NUMPAD_3'        );
  define(100, 'NUMPAD_4'        );
  define(101, 'NUMPAD_5'        );
  define(102, 'NUMPAD_6'        );
  define(103, 'NUMPAD_7'        );
  define(104, 'NUMPAD_8'        );
  define(105, 'NUMPAD_9'        );
  define(106, 'MULTIPLY'        );
  define(107, 'ADD'             );
  define(109, 'SUBTRACT'        );
  define(110, 'DECIMAL_POINT'   );
  define(111, 'DIVIDE'          );
  define(112, 'F1'              );
  define(113, 'F2'              );
  define(114, 'F3'              );
  define(115, 'F4'              );
  define(116, 'F5'              );
  define(117, 'F6'              );
  define(118, 'F7'              );
  define(119, 'F8'              );
  define(120, 'F9'              );
  define(121, 'F10'             );
  define(122, 'F11'             );
  define(123, 'F12'             );
  define(144, 'NUM_LOCK'        );
  define(145, 'SCROLL_LOCK'     );
  define(186, 'SEMICOLON'       );
  define(187, 'EQUAL_SIGN'      );
  define(188, 'COMMA'           );
  define(189, 'DASH'            );
  define(190, 'PERIOD'          );
  define(191, 'FORWARD_SLASH'   );
  define(192, 'GRAVE_ACCENT'    );
  define(219, 'OPEN_BRACKET'    );
  define(220, 'BACK_SLASH'      );
  define(221, 'CLOSE_BRACKET'   );
  define(222, 'SINGLE_QUOTE'    );

  return Object.preventExtensions(KeyCodes);
}());


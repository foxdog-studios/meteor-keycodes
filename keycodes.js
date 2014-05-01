"use strict";

KeyCodes = (function () {
  var KeyCodes = Object.create(null);

  var addKeyCode = function (key, code) {
    Object.defineProperty(KeyCodes, key, {
      value: code,
      writable: false,
      enumerable: true,
      configurable: false
    });
  };

  addKeyCode('BACKSPACE'       ,   8);
  addKeyCode('TAB'             ,   9);
  addKeyCode('ENTER'           ,  13);
  addKeyCode('SHIFT'           ,  16);
  addKeyCode('CTRL'            ,  17);
  addKeyCode('ALT'             ,  18);
  addKeyCode('BREAK'           ,  19);
  addKeyCode('PAUSE'           ,  19);
  addKeyCode('CAPS_LOCK'       ,  20);
  addKeyCode('ESCAPE'          ,  27);
  addKeyCode('PAGE_UP'         ,  33);
  addKeyCode('PAGE_DOWN'       ,  34);
  addKeyCode('END'             ,  35);
  addKeyCode('HOME'            ,  36);
  addKeyCode('LEFT_ARROW'      ,  37);
  addKeyCode('UP_ARROW'        ,  38);
  addKeyCode('RIGHT_ARROW'     ,  39);
  addKeyCode('DOWN_ARROW'      ,  40);
  addKeyCode('INSERT'          ,  45);
  addKeyCode('DELETE'          ,  46);
  addKeyCode('0'               ,  48);
  addKeyCode('1'               ,  49);
  addKeyCode('2'               ,  50);
  addKeyCode('3'               ,  51);
  addKeyCode('4'               ,  52);
  addKeyCode('5'               ,  53);
  addKeyCode('6'               ,  54);
  addKeyCode('7'               ,  55);
  addKeyCode('8'               ,  56);
  addKeyCode('9'               ,  57);
  addKeyCode('A'               ,  65);
  addKeyCode('B'               ,  66);
  addKeyCode('C'               ,  67);
  addKeyCode('D'               ,  68);
  addKeyCode('E'               ,  69);
  addKeyCode('F'               ,  70);
  addKeyCode('G'               ,  71);
  addKeyCode('H'               ,  72);
  addKeyCode('I'               ,  73);
  addKeyCode('J'               ,  74);
  addKeyCode('K'               ,  75);
  addKeyCode('L'               ,  76);
  addKeyCode('M'               ,  77);
  addKeyCode('N'               ,  78);
  addKeyCode('O'               ,  79);
  addKeyCode('P'               ,  80);
  addKeyCode('Q'               ,  81);
  addKeyCode('R'               ,  82);
  addKeyCode('S'               ,  83);
  addKeyCode('T'               ,  84);
  addKeyCode('U'               ,  85);
  addKeyCode('V'               ,  86);
  addKeyCode('W'               ,  87);
  addKeyCode('X'               ,  88);
  addKeyCode('Y'               ,  89);
  addKeyCode('Z'               ,  90);
  addKeyCode('LEFT_WINDOW_KEY' ,  91);
  addKeyCode('RIGHT_WINDOW_KEY',  92);
  addKeyCode('SELECT_KEY'      ,  93);
  addKeyCode('NUMPAD_0'        ,  96);
  addKeyCode('NUMPAD_1'        ,  97);
  addKeyCode('NUMPAD_2'        ,  98);
  addKeyCode('NUMPAD_3'        ,  99);
  addKeyCode('NUMPAD_4'        , 100);
  addKeyCode('NUMPAD_5'        , 101);
  addKeyCode('NUMPAD_6'        , 102);
  addKeyCode('NUMPAD_7'        , 103);
  addKeyCode('NUMPAD_8'        , 104);
  addKeyCode('NUMPAD_9'        , 105);
  addKeyCode('MULTIPLY'        , 106);
  addKeyCode('ADD'             , 107);
  addKeyCode('SUBTRACT'        , 109);
  addKeyCode('DECIMAL_POINT'   , 110);
  addKeyCode('DIVIDE'          , 111);
  addKeyCode('F1'              , 112);
  addKeyCode('F2'              , 113);
  addKeyCode('F3'              , 114);
  addKeyCode('F4'              , 115);
  addKeyCode('F5'              , 116);
  addKeyCode('F6'              , 117);
  addKeyCode('F7'              , 118);
  addKeyCode('F8'              , 119);
  addKeyCode('F9'              , 120);
  addKeyCode('F10'             , 121);
  addKeyCode('F11'             , 122);
  addKeyCode('F12'             , 123);
  addKeyCode('NUM_LOCK'        , 144);
  addKeyCode('SCROLL_LOCK'     , 145);
  addKeyCode('SEMICOLON'       , 186);
  addKeyCode('EQUAL_SIGN'      , 187);
  addKeyCode('COMMA'           , 188);
  addKeyCode('DASH'            , 189);
  addKeyCode('PERIOD'          , 190);
  addKeyCode('FORWARD_SLASH'   , 191);
  addKeyCode('GRAVE_ACCENT'    , 192);
  addKeyCode('OPEN_BRACKET'    , 219);
  addKeyCode('BACK_SLASH'      , 220);
  addKeyCode('CLOSE_BRACKET'   , 221);
  addKeyCode('SINGLE_QUOTE'    , 222);

  return Object.preventExtensions(KeyCodes);
}());


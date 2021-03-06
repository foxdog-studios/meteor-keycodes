Meteor Key Codes
================

Names for event key codes.

```JavaScript
el.addEventListener('keydown', function (event) {
  switch (event.which) {
    case KeyCodes.A:
      console.log('a pressed');
      break;
    case KeyCodes.ONE:
      console.log('1 pressed');
      break;
    case KeyCodes.LEFT_ARROW:
      console.log('Left arrrow pressed');
      break;
  }
});
```


Install
-------

```Shell
$ meteor add fds:keycodes
```


Key codes
---------

| Key code | Names |
|---------:|:------|
|8|BACKSPACE|
|9|TAB|
|13|ENTER|
|16|SHIFT|
|17|CTRL|
|18|ALT|
|19|BREAK PAUSE|
|20|CAPS_LOCK|
|27|ESCAPE|
|32|SPACE|
|33|PAGE_UP|
|34|PAGE_DOWN|
|35|END|
|36|HOME|
|37|LEFT_ARROW|
|38|UP_ARROW|
|39|RIGHT_ARROW|
|40|DOWN_ARROW|
|45|INSERT|
|46|DELETE|
|48|0 ZERO|
|49|1 ONE|
|50|2 TWO|
|51|3 THREE|
|52|4 FOUR|
|53|5 FIVE|
|54|6 SIX|
|55|7 SEVEN|
|56|8 EIGHT|
|57|9 NINE|
|65|A|
|66|B|
|67|C|
|68|D|
|69|E|
|70|F|
|71|G|
|72|H|
|73|I|
|74|J|
|75|K|
|76|L|
|77|M|
|78|N|
|79|O|
|80|P|
|81|Q|
|82|R|
|83|S|
|84|T|
|85|U|
|86|V|
|87|W|
|88|X|
|89|Y|
|90|Z|
|91|LEFT_WINDOW_KEY|
|92|RIGHT_WINDOW_KEY|
|93|SELECT_KEY|
|96|NUMPAD_0|
|97|NUMPAD_1|
|98|NUMPAD_2|
|99|NUMPAD_3|
|100|NUMPAD_4|
|101|NUMPAD_5|
|102|NUMPAD_6|
|103|NUMPAD_7|
|104|NUMPAD_8|
|105|NUMPAD_9|
|106|MULTIPLY|
|107|ADD|
|109|SUBTRACT|
|110|DECIMAL_POINT|
|111|DIVIDE|
|112|F1|
|113|F2|
|114|F3|
|115|F4|
|116|F5|
|117|F6|
|118|F7|
|119|F8|
|120|F9|
|121|F10|
|122|F11|
|123|F12|
|144|NUM_LOCK|
|145|SCROLL_LOCK|
|186|SEMICOLON|
|187|EQUAL_SIGN|
|188|COMMA|
|189|DASH|
|190|PERIOD|
|191|FORWARD_SLASH|
|192|GRAVE_ACCENT|
|219|OPEN_BRACKET|
|220|BACK_SLASH|
|221|CLOSE_BRACKET|
|222|SINGLE_QUOTE|

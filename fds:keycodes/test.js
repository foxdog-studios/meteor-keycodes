Tinytest.add('Freeze', function(test) {
  KeyCodes.extension = 0;
  test.isUndefined(KeyCodes.extension);
});

Tinytest.add('BACKSPACE', function(test) {
  test.equal(KeyCodes.BACKSPACE, 8);
  test.equal(KeyCodes.BACKSPACE++, 8);
  test.isFalse(delete KeyCodes.BACKSPACE);
  test.equal(KeyCodes.BACKSPACE, 8);
});

Tinytest.add('TAB', function(test) {
  test.equal(KeyCodes.TAB, 9);
  test.equal(KeyCodes.TAB++, 9);
  test.isFalse(delete KeyCodes.TAB);
  test.equal(KeyCodes.TAB, 9);
});

Tinytest.add('ENTER', function(test) {
  test.equal(KeyCodes.ENTER, 13);
  test.equal(KeyCodes.ENTER++, 13);
  test.isFalse(delete KeyCodes.ENTER);
  test.equal(KeyCodes.ENTER, 13);
});

Tinytest.add('SHIFT', function(test) {
  test.equal(KeyCodes.SHIFT, 16);
  test.equal(KeyCodes.SHIFT++, 16);
  test.isFalse(delete KeyCodes.SHIFT);
  test.equal(KeyCodes.SHIFT, 16);
});

Tinytest.add('CTRL', function(test) {
  test.equal(KeyCodes.CTRL, 17);
  test.equal(KeyCodes.CTRL++, 17);
  test.isFalse(delete KeyCodes.CTRL);
  test.equal(KeyCodes.CTRL, 17);
});

Tinytest.add('ALT', function(test) {
  test.equal(KeyCodes.ALT, 18);
  test.equal(KeyCodes.ALT++, 18);
  test.isFalse(delete KeyCodes.ALT);
  test.equal(KeyCodes.ALT, 18);
});

Tinytest.add('BREAK', function(test) {
  test.equal(KeyCodes.BREAK, 19);
  test.equal(KeyCodes.BREAK++, 19);
  test.isFalse(delete KeyCodes.BREAK);
  test.equal(KeyCodes.BREAK, 19);
});

Tinytest.add('PAUSE', function(test) {
  test.equal(KeyCodes.PAUSE, 19);
  test.equal(KeyCodes.PAUSE++, 19);
  test.isFalse(delete KeyCodes.PAUSE);
  test.equal(KeyCodes.PAUSE, 19);
});

Tinytest.add('CAPS_LOCK', function(test) {
  test.equal(KeyCodes.CAPS_LOCK, 20);
  test.equal(KeyCodes.CAPS_LOCK++, 20);
  test.isFalse(delete KeyCodes.CAPS_LOCK);
  test.equal(KeyCodes.CAPS_LOCK, 20);
});

Tinytest.add('ESCAPE', function(test) {
  test.equal(KeyCodes.ESCAPE, 27);
  test.equal(KeyCodes.ESCAPE++, 27);
  test.isFalse(delete KeyCodes.ESCAPE);
  test.equal(KeyCodes.ESCAPE, 27);
});

Tinytest.add('SPACE', function(test) {
  test.equal(KeyCodes.SPACE, 32);
  test.equal(KeyCodes.SPACE++, 32);
  test.isFalse(delete KeyCodes.SPACE);
  test.equal(KeyCodes.SPACE, 32);
});

Tinytest.add('PAGE_UP', function(test) {
  test.equal(KeyCodes.PAGE_UP, 33);
  test.equal(KeyCodes.PAGE_UP++, 33);
  test.isFalse(delete KeyCodes.PAGE_UP);
  test.equal(KeyCodes.PAGE_UP, 33);
});

Tinytest.add('PAGE_DOWN', function(test) {
  test.equal(KeyCodes.PAGE_DOWN, 34);
  test.equal(KeyCodes.PAGE_DOWN++, 34);
  test.isFalse(delete KeyCodes.PAGE_DOWN);
  test.equal(KeyCodes.PAGE_DOWN, 34);
});

Tinytest.add('END', function(test) {
  test.equal(KeyCodes.END, 35);
  test.equal(KeyCodes.END++, 35);
  test.isFalse(delete KeyCodes.END);
  test.equal(KeyCodes.END, 35);
});

Tinytest.add('HOME', function(test) {
  test.equal(KeyCodes.HOME, 36);
  test.equal(KeyCodes.HOME++, 36);
  test.isFalse(delete KeyCodes.HOME);
  test.equal(KeyCodes.HOME, 36);
});

Tinytest.add('LEFT_ARROW', function(test) {
  test.equal(KeyCodes.LEFT_ARROW, 37);
  test.equal(KeyCodes.LEFT_ARROW++, 37);
  test.isFalse(delete KeyCodes.LEFT_ARROW);
  test.equal(KeyCodes.LEFT_ARROW, 37);
});

Tinytest.add('UP_ARROW', function(test) {
  test.equal(KeyCodes.UP_ARROW, 38);
  test.equal(KeyCodes.UP_ARROW++, 38);
  test.isFalse(delete KeyCodes.UP_ARROW);
  test.equal(KeyCodes.UP_ARROW, 38);
});

Tinytest.add('RIGHT_ARROW', function(test) {
  test.equal(KeyCodes.RIGHT_ARROW, 39);
  test.equal(KeyCodes.RIGHT_ARROW++, 39);
  test.isFalse(delete KeyCodes.RIGHT_ARROW);
  test.equal(KeyCodes.RIGHT_ARROW, 39);
});

Tinytest.add('DOWN_ARROW', function(test) {
  test.equal(KeyCodes.DOWN_ARROW, 40);
  test.equal(KeyCodes.DOWN_ARROW++, 40);
  test.isFalse(delete KeyCodes.DOWN_ARROW);
  test.equal(KeyCodes.DOWN_ARROW, 40);
});

Tinytest.add('INSERT', function(test) {
  test.equal(KeyCodes.INSERT, 45);
  test.equal(KeyCodes.INSERT++, 45);
  test.isFalse(delete KeyCodes.INSERT);
  test.equal(KeyCodes.INSERT, 45);
});

Tinytest.add('DELETE', function(test) {
  test.equal(KeyCodes.DELETE, 46);
  test.equal(KeyCodes.DELETE++, 46);
  test.isFalse(delete KeyCodes.DELETE);
  test.equal(KeyCodes.DELETE, 46);
});

Tinytest.add('0', function(test) {
  test.equal(KeyCodes['0'], 48);
  test.equal(KeyCodes['0']++, 48);
  test.isFalse(delete KeyCodes['0']);
  test.equal(KeyCodes['0'], 48);
});

Tinytest.add('ZERO', function(test) {
  test.equal(KeyCodes.ZERO, 48);
  test.equal(KeyCodes.ZERO++, 48);
  test.isFalse(delete KeyCodes.ZERO);
  test.equal(KeyCodes.ZERO, 48);
});

Tinytest.add('1', function(test) {
  test.equal(KeyCodes['1'], 49);
  test.equal(KeyCodes['1']++, 49);
  test.isFalse(delete KeyCodes['1']);
  test.equal(KeyCodes['1'], 49);
});

Tinytest.add('ONE', function(test) {
  test.equal(KeyCodes.ONE, 49);
  test.equal(KeyCodes.ONE++, 49);
  test.isFalse(delete KeyCodes.ONE);
  test.equal(KeyCodes.ONE, 49);
});

Tinytest.add('2', function(test) {
  test.equal(KeyCodes['2'], 50);
  test.equal(KeyCodes['2']++, 50);
  test.isFalse(delete KeyCodes['2']);
  test.equal(KeyCodes['2'], 50);
});

Tinytest.add('TWO', function(test) {
  test.equal(KeyCodes.TWO, 50);
  test.equal(KeyCodes.TWO++, 50);
  test.isFalse(delete KeyCodes.TWO);
  test.equal(KeyCodes.TWO, 50);
});

Tinytest.add('3', function(test) {
  test.equal(KeyCodes['3'], 51);
  test.equal(KeyCodes['3']++, 51);
  test.isFalse(delete KeyCodes['3']);
  test.equal(KeyCodes['3'], 51);
});

Tinytest.add('THREE', function(test) {
  test.equal(KeyCodes.THREE, 51);
  test.equal(KeyCodes.THREE++, 51);
  test.isFalse(delete KeyCodes.THREE);
  test.equal(KeyCodes.THREE, 51);
});

Tinytest.add('4', function(test) {
  test.equal(KeyCodes['4'], 52);
  test.equal(KeyCodes['4']++, 52);
  test.isFalse(delete KeyCodes['4']);
  test.equal(KeyCodes['4'], 52);
});

Tinytest.add('FOUR', function(test) {
  test.equal(KeyCodes.FOUR, 52);
  test.equal(KeyCodes.FOUR++, 52);
  test.isFalse(delete KeyCodes.FOUR);
  test.equal(KeyCodes.FOUR, 52);
});

Tinytest.add('5', function(test) {
  test.equal(KeyCodes['5'], 53);
  test.equal(KeyCodes['5']++, 53);
  test.isFalse(delete KeyCodes['5']);
  test.equal(KeyCodes['5'], 53);
});

Tinytest.add('FIVE', function(test) {
  test.equal(KeyCodes.FIVE, 53);
  test.equal(KeyCodes.FIVE++, 53);
  test.isFalse(delete KeyCodes.FIVE);
  test.equal(KeyCodes.FIVE, 53);
});

Tinytest.add('6', function(test) {
  test.equal(KeyCodes['6'], 54);
  test.equal(KeyCodes['6']++, 54);
  test.isFalse(delete KeyCodes['6']);
  test.equal(KeyCodes['6'], 54);
});

Tinytest.add('SIX', function(test) {
  test.equal(KeyCodes.SIX, 54);
  test.equal(KeyCodes.SIX++, 54);
  test.isFalse(delete KeyCodes.SIX);
  test.equal(KeyCodes.SIX, 54);
});

Tinytest.add('7', function(test) {
  test.equal(KeyCodes['7'], 55);
  test.equal(KeyCodes['7']++, 55);
  test.isFalse(delete KeyCodes['7']);
  test.equal(KeyCodes['7'], 55);
});

Tinytest.add('SEVEN', function(test) {
  test.equal(KeyCodes.SEVEN, 55);
  test.equal(KeyCodes.SEVEN++, 55);
  test.isFalse(delete KeyCodes.SEVEN);
  test.equal(KeyCodes.SEVEN, 55);
});

Tinytest.add('8', function(test) {
  test.equal(KeyCodes['8'], 56);
  test.equal(KeyCodes['8']++, 56);
  test.isFalse(delete KeyCodes['8']);
  test.equal(KeyCodes['8'], 56);
});

Tinytest.add('EIGHT', function(test) {
  test.equal(KeyCodes.EIGHT, 56);
  test.equal(KeyCodes.EIGHT++, 56);
  test.isFalse(delete KeyCodes.EIGHT);
  test.equal(KeyCodes.EIGHT, 56);
});

Tinytest.add('9', function(test) {
  test.equal(KeyCodes['9'], 57);
  test.equal(KeyCodes['9']++, 57);
  test.isFalse(delete KeyCodes['9']);
  test.equal(KeyCodes['9'], 57);
});

Tinytest.add('NINE', function(test) {
  test.equal(KeyCodes.NINE, 57);
  test.equal(KeyCodes.NINE++, 57);
  test.isFalse(delete KeyCodes.NINE);
  test.equal(KeyCodes.NINE, 57);
});

Tinytest.add('A', function(test) {
  test.equal(KeyCodes.A, 65);
  test.equal(KeyCodes.A++, 65);
  test.isFalse(delete KeyCodes.A);
  test.equal(KeyCodes.A, 65);
});

Tinytest.add('B', function(test) {
  test.equal(KeyCodes.B, 66);
  test.equal(KeyCodes.B++, 66);
  test.isFalse(delete KeyCodes.B);
  test.equal(KeyCodes.B, 66);
});

Tinytest.add('C', function(test) {
  test.equal(KeyCodes.C, 67);
  test.equal(KeyCodes.C++, 67);
  test.isFalse(delete KeyCodes.C);
  test.equal(KeyCodes.C, 67);
});

Tinytest.add('D', function(test) {
  test.equal(KeyCodes.D, 68);
  test.equal(KeyCodes.D++, 68);
  test.isFalse(delete KeyCodes.D);
  test.equal(KeyCodes.D, 68);
});

Tinytest.add('E', function(test) {
  test.equal(KeyCodes.E, 69);
  test.equal(KeyCodes.E++, 69);
  test.isFalse(delete KeyCodes.E);
  test.equal(KeyCodes.E, 69);
});

Tinytest.add('F', function(test) {
  test.equal(KeyCodes.F, 70);
  test.equal(KeyCodes.F++, 70);
  test.isFalse(delete KeyCodes.F);
  test.equal(KeyCodes.F, 70);
});

Tinytest.add('G', function(test) {
  test.equal(KeyCodes.G, 71);
  test.equal(KeyCodes.G++, 71);
  test.isFalse(delete KeyCodes.G);
  test.equal(KeyCodes.G, 71);
});

Tinytest.add('H', function(test) {
  test.equal(KeyCodes.H, 72);
  test.equal(KeyCodes.H++, 72);
  test.isFalse(delete KeyCodes.H);
  test.equal(KeyCodes.H, 72);
});

Tinytest.add('I', function(test) {
  test.equal(KeyCodes.I, 73);
  test.equal(KeyCodes.I++, 73);
  test.isFalse(delete KeyCodes.I);
  test.equal(KeyCodes.I, 73);
});

Tinytest.add('J', function(test) {
  test.equal(KeyCodes.J, 74);
  test.equal(KeyCodes.J++, 74);
  test.isFalse(delete KeyCodes.J);
  test.equal(KeyCodes.J, 74);
});

Tinytest.add('K', function(test) {
  test.equal(KeyCodes.K, 75);
  test.equal(KeyCodes.K++, 75);
  test.isFalse(delete KeyCodes.K);
  test.equal(KeyCodes.K, 75);
});

Tinytest.add('L', function(test) {
  test.equal(KeyCodes.L, 76);
  test.equal(KeyCodes.L++, 76);
  test.isFalse(delete KeyCodes.L);
  test.equal(KeyCodes.L, 76);
});

Tinytest.add('M', function(test) {
  test.equal(KeyCodes.M, 77);
  test.equal(KeyCodes.M++, 77);
  test.isFalse(delete KeyCodes.M);
  test.equal(KeyCodes.M, 77);
});

Tinytest.add('N', function(test) {
  test.equal(KeyCodes.N, 78);
  test.equal(KeyCodes.N++, 78);
  test.isFalse(delete KeyCodes.N);
  test.equal(KeyCodes.N, 78);
});

Tinytest.add('O', function(test) {
  test.equal(KeyCodes.O, 79);
  test.equal(KeyCodes.O++, 79);
  test.isFalse(delete KeyCodes.O);
  test.equal(KeyCodes.O, 79);
});

Tinytest.add('P', function(test) {
  test.equal(KeyCodes.P, 80);
  test.equal(KeyCodes.P++, 80);
  test.isFalse(delete KeyCodes.P);
  test.equal(KeyCodes.P, 80);
});

Tinytest.add('Q', function(test) {
  test.equal(KeyCodes.Q, 81);
  test.equal(KeyCodes.Q++, 81);
  test.isFalse(delete KeyCodes.Q);
  test.equal(KeyCodes.Q, 81);
});

Tinytest.add('R', function(test) {
  test.equal(KeyCodes.R, 82);
  test.equal(KeyCodes.R++, 82);
  test.isFalse(delete KeyCodes.R);
  test.equal(KeyCodes.R, 82);
});

Tinytest.add('S', function(test) {
  test.equal(KeyCodes.S, 83);
  test.equal(KeyCodes.S++, 83);
  test.isFalse(delete KeyCodes.S);
  test.equal(KeyCodes.S, 83);
});

Tinytest.add('T', function(test) {
  test.equal(KeyCodes.T, 84);
  test.equal(KeyCodes.T++, 84);
  test.isFalse(delete KeyCodes.T);
  test.equal(KeyCodes.T, 84);
});

Tinytest.add('U', function(test) {
  test.equal(KeyCodes.U, 85);
  test.equal(KeyCodes.U++, 85);
  test.isFalse(delete KeyCodes.U);
  test.equal(KeyCodes.U, 85);
});

Tinytest.add('V', function(test) {
  test.equal(KeyCodes.V, 86);
  test.equal(KeyCodes.V++, 86);
  test.isFalse(delete KeyCodes.V);
  test.equal(KeyCodes.V, 86);
});

Tinytest.add('W', function(test) {
  test.equal(KeyCodes.W, 87);
  test.equal(KeyCodes.W++, 87);
  test.isFalse(delete KeyCodes.W);
  test.equal(KeyCodes.W, 87);
});

Tinytest.add('X', function(test) {
  test.equal(KeyCodes.X, 88);
  test.equal(KeyCodes.X++, 88);
  test.isFalse(delete KeyCodes.X);
  test.equal(KeyCodes.X, 88);
});

Tinytest.add('Y', function(test) {
  test.equal(KeyCodes.Y, 89);
  test.equal(KeyCodes.Y++, 89);
  test.isFalse(delete KeyCodes.Y);
  test.equal(KeyCodes.Y, 89);
});

Tinytest.add('Z', function(test) {
  test.equal(KeyCodes.Z, 90);
  test.equal(KeyCodes.Z++, 90);
  test.isFalse(delete KeyCodes.Z);
  test.equal(KeyCodes.Z, 90);
});

Tinytest.add('LEFT_WINDOW_KEY', function(test) {
  test.equal(KeyCodes.LEFT_WINDOW_KEY, 91);
  test.equal(KeyCodes.LEFT_WINDOW_KEY++, 91);
  test.isFalse(delete KeyCodes.LEFT_WINDOW_KEY);
  test.equal(KeyCodes.LEFT_WINDOW_KEY, 91);
});

Tinytest.add('RIGHT_WINDOW_KEY', function(test) {
  test.equal(KeyCodes.RIGHT_WINDOW_KEY, 92);
  test.equal(KeyCodes.RIGHT_WINDOW_KEY++, 92);
  test.isFalse(delete KeyCodes.RIGHT_WINDOW_KEY);
  test.equal(KeyCodes.RIGHT_WINDOW_KEY, 92);
});

Tinytest.add('SELECT_KEY', function(test) {
  test.equal(KeyCodes.SELECT_KEY, 93);
  test.equal(KeyCodes.SELECT_KEY++, 93);
  test.isFalse(delete KeyCodes.SELECT_KEY);
  test.equal(KeyCodes.SELECT_KEY, 93);
});

Tinytest.add('NUMPAD_0', function(test) {
  test.equal(KeyCodes.NUMPAD_0, 96);
  test.equal(KeyCodes.NUMPAD_0++, 96);
  test.isFalse(delete KeyCodes.NUMPAD_0);
  test.equal(KeyCodes.NUMPAD_0, 96);
});

Tinytest.add('NUMPAD_1', function(test) {
  test.equal(KeyCodes.NUMPAD_1, 97);
  test.equal(KeyCodes.NUMPAD_1++, 97);
  test.isFalse(delete KeyCodes.NUMPAD_1);
  test.equal(KeyCodes.NUMPAD_1, 97);
});

Tinytest.add('NUMPAD_2', function(test) {
  test.equal(KeyCodes.NUMPAD_2, 98);
  test.equal(KeyCodes.NUMPAD_2++, 98);
  test.isFalse(delete KeyCodes.NUMPAD_2);
  test.equal(KeyCodes.NUMPAD_2, 98);
});

Tinytest.add('NUMPAD_3', function(test) {
  test.equal(KeyCodes.NUMPAD_3, 99);
  test.equal(KeyCodes.NUMPAD_3++, 99);
  test.isFalse(delete KeyCodes.NUMPAD_3);
  test.equal(KeyCodes.NUMPAD_3, 99);
});

Tinytest.add('NUMPAD_4', function(test) {
  test.equal(KeyCodes.NUMPAD_4, 100);
  test.equal(KeyCodes.NUMPAD_4++, 100);
  test.isFalse(delete KeyCodes.NUMPAD_4);
  test.equal(KeyCodes.NUMPAD_4, 100);
});

Tinytest.add('NUMPAD_5', function(test) {
  test.equal(KeyCodes.NUMPAD_5, 101);
  test.equal(KeyCodes.NUMPAD_5++, 101);
  test.isFalse(delete KeyCodes.NUMPAD_5);
  test.equal(KeyCodes.NUMPAD_5, 101);
});

Tinytest.add('NUMPAD_6', function(test) {
  test.equal(KeyCodes.NUMPAD_6, 102);
  test.equal(KeyCodes.NUMPAD_6++, 102);
  test.isFalse(delete KeyCodes.NUMPAD_6);
  test.equal(KeyCodes.NUMPAD_6, 102);
});

Tinytest.add('NUMPAD_7', function(test) {
  test.equal(KeyCodes.NUMPAD_7, 103);
  test.equal(KeyCodes.NUMPAD_7++, 103);
  test.isFalse(delete KeyCodes.NUMPAD_7);
  test.equal(KeyCodes.NUMPAD_7, 103);
});

Tinytest.add('NUMPAD_8', function(test) {
  test.equal(KeyCodes.NUMPAD_8, 104);
  test.equal(KeyCodes.NUMPAD_8++, 104);
  test.isFalse(delete KeyCodes.NUMPAD_8);
  test.equal(KeyCodes.NUMPAD_8, 104);
});

Tinytest.add('NUMPAD_9', function(test) {
  test.equal(KeyCodes.NUMPAD_9, 105);
  test.equal(KeyCodes.NUMPAD_9++, 105);
  test.isFalse(delete KeyCodes.NUMPAD_9);
  test.equal(KeyCodes.NUMPAD_9, 105);
});

Tinytest.add('MULTIPLY', function(test) {
  test.equal(KeyCodes.MULTIPLY, 106);
  test.equal(KeyCodes.MULTIPLY++, 106);
  test.isFalse(delete KeyCodes.MULTIPLY);
  test.equal(KeyCodes.MULTIPLY, 106);
});

Tinytest.add('ADD', function(test) {
  test.equal(KeyCodes.ADD, 107);
  test.equal(KeyCodes.ADD++, 107);
  test.isFalse(delete KeyCodes.ADD);
  test.equal(KeyCodes.ADD, 107);
});

Tinytest.add('SUBTRACT', function(test) {
  test.equal(KeyCodes.SUBTRACT, 109);
  test.equal(KeyCodes.SUBTRACT++, 109);
  test.isFalse(delete KeyCodes.SUBTRACT);
  test.equal(KeyCodes.SUBTRACT, 109);
});

Tinytest.add('DECIMAL_POINT', function(test) {
  test.equal(KeyCodes.DECIMAL_POINT, 110);
  test.equal(KeyCodes.DECIMAL_POINT++, 110);
  test.isFalse(delete KeyCodes.DECIMAL_POINT);
  test.equal(KeyCodes.DECIMAL_POINT, 110);
});

Tinytest.add('DIVIDE', function(test) {
  test.equal(KeyCodes.DIVIDE, 111);
  test.equal(KeyCodes.DIVIDE++, 111);
  test.isFalse(delete KeyCodes.DIVIDE);
  test.equal(KeyCodes.DIVIDE, 111);
});

Tinytest.add('F1', function(test) {
  test.equal(KeyCodes.F1, 112);
  test.equal(KeyCodes.F1++, 112);
  test.isFalse(delete KeyCodes.F1);
  test.equal(KeyCodes.F1, 112);
});

Tinytest.add('F2', function(test) {
  test.equal(KeyCodes.F2, 113);
  test.equal(KeyCodes.F2++, 113);
  test.isFalse(delete KeyCodes.F2);
  test.equal(KeyCodes.F2, 113);
});

Tinytest.add('F3', function(test) {
  test.equal(KeyCodes.F3, 114);
  test.equal(KeyCodes.F3++, 114);
  test.isFalse(delete KeyCodes.F3);
  test.equal(KeyCodes.F3, 114);
});

Tinytest.add('F4', function(test) {
  test.equal(KeyCodes.F4, 115);
  test.equal(KeyCodes.F4++, 115);
  test.isFalse(delete KeyCodes.F4);
  test.equal(KeyCodes.F4, 115);
});

Tinytest.add('F5', function(test) {
  test.equal(KeyCodes.F5, 116);
  test.equal(KeyCodes.F5++, 116);
  test.isFalse(delete KeyCodes.F5);
  test.equal(KeyCodes.F5, 116);
});

Tinytest.add('F6', function(test) {
  test.equal(KeyCodes.F6, 117);
  test.equal(KeyCodes.F6++, 117);
  test.isFalse(delete KeyCodes.F6);
  test.equal(KeyCodes.F6, 117);
});

Tinytest.add('F7', function(test) {
  test.equal(KeyCodes.F7, 118);
  test.equal(KeyCodes.F7++, 118);
  test.isFalse(delete KeyCodes.F7);
  test.equal(KeyCodes.F7, 118);
});

Tinytest.add('F8', function(test) {
  test.equal(KeyCodes.F8, 119);
  test.equal(KeyCodes.F8++, 119);
  test.isFalse(delete KeyCodes.F8);
  test.equal(KeyCodes.F8, 119);
});

Tinytest.add('F9', function(test) {
  test.equal(KeyCodes.F9, 120);
  test.equal(KeyCodes.F9++, 120);
  test.isFalse(delete KeyCodes.F9);
  test.equal(KeyCodes.F9, 120);
});

Tinytest.add('F10', function(test) {
  test.equal(KeyCodes.F10, 121);
  test.equal(KeyCodes.F10++, 121);
  test.isFalse(delete KeyCodes.F10);
  test.equal(KeyCodes.F10, 121);
});

Tinytest.add('F11', function(test) {
  test.equal(KeyCodes.F11, 122);
  test.equal(KeyCodes.F11++, 122);
  test.isFalse(delete KeyCodes.F11);
  test.equal(KeyCodes.F11, 122);
});

Tinytest.add('F12', function(test) {
  test.equal(KeyCodes.F12, 123);
  test.equal(KeyCodes.F12++, 123);
  test.isFalse(delete KeyCodes.F12);
  test.equal(KeyCodes.F12, 123);
});

Tinytest.add('NUM_LOCK', function(test) {
  test.equal(KeyCodes.NUM_LOCK, 144);
  test.equal(KeyCodes.NUM_LOCK++, 144);
  test.isFalse(delete KeyCodes.NUM_LOCK);
  test.equal(KeyCodes.NUM_LOCK, 144);
});

Tinytest.add('SCROLL_LOCK', function(test) {
  test.equal(KeyCodes.SCROLL_LOCK, 145);
  test.equal(KeyCodes.SCROLL_LOCK++, 145);
  test.isFalse(delete KeyCodes.SCROLL_LOCK);
  test.equal(KeyCodes.SCROLL_LOCK, 145);
});

Tinytest.add('SEMICOLON', function(test) {
  test.equal(KeyCodes.SEMICOLON, 186);
  test.equal(KeyCodes.SEMICOLON++, 186);
  test.isFalse(delete KeyCodes.SEMICOLON);
  test.equal(KeyCodes.SEMICOLON, 186);
});

Tinytest.add('EQUAL_SIGN', function(test) {
  test.equal(KeyCodes.EQUAL_SIGN, 187);
  test.equal(KeyCodes.EQUAL_SIGN++, 187);
  test.isFalse(delete KeyCodes.EQUAL_SIGN);
  test.equal(KeyCodes.EQUAL_SIGN, 187);
});

Tinytest.add('COMMA', function(test) {
  test.equal(KeyCodes.COMMA, 188);
  test.equal(KeyCodes.COMMA++, 188);
  test.isFalse(delete KeyCodes.COMMA);
  test.equal(KeyCodes.COMMA, 188);
});

Tinytest.add('DASH', function(test) {
  test.equal(KeyCodes.DASH, 189);
  test.equal(KeyCodes.DASH++, 189);
  test.isFalse(delete KeyCodes.DASH);
  test.equal(KeyCodes.DASH, 189);
});

Tinytest.add('PERIOD', function(test) {
  test.equal(KeyCodes.PERIOD, 190);
  test.equal(KeyCodes.PERIOD++, 190);
  test.isFalse(delete KeyCodes.PERIOD);
  test.equal(KeyCodes.PERIOD, 190);
});

Tinytest.add('FORWARD_SLASH', function(test) {
  test.equal(KeyCodes.FORWARD_SLASH, 191);
  test.equal(KeyCodes.FORWARD_SLASH++, 191);
  test.isFalse(delete KeyCodes.FORWARD_SLASH);
  test.equal(KeyCodes.FORWARD_SLASH, 191);
});

Tinytest.add('GRAVE_ACCENT', function(test) {
  test.equal(KeyCodes.GRAVE_ACCENT, 192);
  test.equal(KeyCodes.GRAVE_ACCENT++, 192);
  test.isFalse(delete KeyCodes.GRAVE_ACCENT);
  test.equal(KeyCodes.GRAVE_ACCENT, 192);
});

Tinytest.add('OPEN_BRACKET', function(test) {
  test.equal(KeyCodes.OPEN_BRACKET, 219);
  test.equal(KeyCodes.OPEN_BRACKET++, 219);
  test.isFalse(delete KeyCodes.OPEN_BRACKET);
  test.equal(KeyCodes.OPEN_BRACKET, 219);
});

Tinytest.add('BACK_SLASH', function(test) {
  test.equal(KeyCodes.BACK_SLASH, 220);
  test.equal(KeyCodes.BACK_SLASH++, 220);
  test.isFalse(delete KeyCodes.BACK_SLASH);
  test.equal(KeyCodes.BACK_SLASH, 220);
});

Tinytest.add('CLOSE_BRACKET', function(test) {
  test.equal(KeyCodes.CLOSE_BRACKET, 221);
  test.equal(KeyCodes.CLOSE_BRACKET++, 221);
  test.isFalse(delete KeyCodes.CLOSE_BRACKET);
  test.equal(KeyCodes.CLOSE_BRACKET, 221);
});

Tinytest.add('SINGLE_QUOTE', function(test) {
  test.equal(KeyCodes.SINGLE_QUOTE, 222);
  test.equal(KeyCodes.SINGLE_QUOTE++, 222);
  test.isFalse(delete KeyCodes.SINGLE_QUOTE);
  test.equal(KeyCodes.SINGLE_QUOTE, 222);
});


(function() {
  function testGetTextMethodReturnsText() {
    var testText = 'My favourite language is JavaScript';
    var note = new Note(testText);
    assert.isEqual(note.getText(), testText, 'testGetTextMethodReturnsText');
  }

  testGetTextMethodReturnsText();
})(this);

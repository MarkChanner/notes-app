// Has a method that will return the note text
(function(exports) {
  function testNoteStoresTextWhenInstantiated() {
    var testText = 'My favourite language is JavaScript';
    var note = new Note(testText);
    assert.isTrue(note.text === testText);
  }
  testNoteStoresTextWhenInstantiated();
})(this);
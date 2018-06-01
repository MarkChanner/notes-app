(function() {
  function testReturnsHTMLString() {
    var note = new Note('Single note text');
    var singleNoteView = new SingleNoteView(note);
    assert.isEqual(
      singleNoteView.getHTML(),
      '<div>Single note text</div>',
      'testReturnsHTMLString'
    );
  }

  testReturnsHTMLString();
})(this);

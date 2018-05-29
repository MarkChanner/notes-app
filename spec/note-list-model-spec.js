(function(exports) {
  function testStoresArrayOfNotes() {
    var noteList = new NoteList();
    assert.isTrue(noteList.notes, 'storesAnEmptyArray');
    noteList.notes.push(new Note('note 1'));
    noteList.notes.push(new Note('note 2'));
    assert.isTrue(noteList.notes.length === 2, 'storesArrayOfNotes');
  }
  testStoresArrayOfNotes();
})(this);

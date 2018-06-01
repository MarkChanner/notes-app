(function() {
  function testCreateAndStoreNewNote() {
    var noteList = new NoteList();
    var text = 'Favorite drink: seltzer';
    noteList.createNote(text);
    assert.isEqual(
      noteList.notes.pop().text,
      text,
      'testCreateAndStoreNewNote'
    );
  }
  testCreateAndStoreNewNote();
})(this);

(function() {
  function testReturnAllTheNotesStored() {
    var noteList = new NoteList();
    noteList.createNote('note 1');
    noteList.createNote('note 2');
    assert.isEqual(noteList.getNotes()[0].getText(), 'note 1');
    assert.isEqual(noteList.getNotes()[1].getText(), 'note 2');
  }
  testReturnAllTheNotesStored();
})(this);

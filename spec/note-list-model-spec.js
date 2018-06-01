(function() {
  function testCreatesAndReturnsStoredNotes() {
    var noteList = new NoteList();
    noteList.createNote('note 1');
    noteList.createNote('note 2');
    assert.isEqual(
      noteList.getNotes()[0].getText(),
      'note 1',
      'testCreatesAndReturnsStoredNotes'
    );
    assert.isEqual(
      noteList.getNotes()[1].getText(),
      'note 2',
      'testCreatesAndReturnsStoredNotes'
    );
  }

  function testAssignsUniqueIdToWhenCreatingNote() {
    var noteList = new NoteList();
    noteList.createNote('note 1');
    noteList.createNote('note 2');
    assert.isTrue(noteList.getNotes()[0].uniqueId === 0);
    assert.isTrue(noteList.getNotes()[1].uniqueId === 1);
  }

  testCreatesAndReturnsStoredNotes();
  testAssignsUniqueIdToWhenCreatingNote();
})(this);

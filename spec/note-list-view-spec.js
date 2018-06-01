(function() {
  function testReturnNoteHTML() {
    var noteList = new NoteList();
    noteList.createNote('note 1 over 20 characters');
    noteList.createNote('note 2 over 20 characters');
    var noteListView = new NoteListView(noteList);
    var html =
      '<ul><li><div>note 1 over 20 chara</div></li><li><div>note 2 over 20 chara</div></li></ul>';
    assert.isEqual(noteListView.getHTML(), html, 'testReturnNoteHTML');
  }

  function testReturnEmptyString() {
    var emptyNoteList = new NoteList();
    var noteListView = new NoteListView(emptyNoteList);
    var emptyString = '';
    assert.isEqual(
      noteListView.getHTML(),
      emptyString,
      'testReturnEmptyString'
    );
  }

  testReturnNoteHTML();
  testReturnEmptyString();
})(this);

(function() {
  function testReturnNoteHTML() {
    var noteList = new NoteList();
    var note1 = new Note('note 1 over 20 characters');
    var note2 = new Note('note 2 over 20 characters');
    noteList.notes.push(note1);
    noteList.notes.push(note2);
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

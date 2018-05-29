(function(exports) {
  function testReturnNoteHTML(){
    var noteList = new NoteList();
    var note1 = new Note('note 1');
    var note2 = new Note('note 2');
    noteList.notes.push(note1);
    noteList.notes.push(note2);
    var noteListView = new NoteListView(noteList);
    var html = '<ul><li><div>note 1</div></li><li><div>note 2</div></li></ul>'
    assert.isEqual(noteListView.getHTML(), html,'testReturnNoteHTML')
  }
  testReturnNoteHTML();
})(this)

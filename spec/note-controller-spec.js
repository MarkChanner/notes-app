(function() {
  function testHasNoteList() {
    var noteList = new NoteList();
    var noteController = new NoteController(noteList);
    assert.isEqual(noteController.noteList, noteList, 'testHasNoteList');
  }

  function testAddsNote() {
    var noteList = new NoteList();
    var noteController = new NoteController(noteList);
    assert.isEqual(
      noteController.noteList.getNotes()[0].text,
      'Favourite drink: seltzer',
      'testAddsNote'
    );
  }

  function testCreateNoteListView() {
    var noteList = new NoteList();
    var noteController = new NoteController(noteList);
    assert.isEqual(
      noteController.noteListView.noteList,
      noteList,
      'testCreateNoteListView'
    );
  }

  function testUpdatesHTMLView() {
    var noteList = new NoteList();
    var noteController = new NoteController(noteList);
    var html = document.querySelector('#app').innerHTML;
    assert.isEqual(html, 'Hello', 'testGetsHTML');
    noteController.updateView();
    html = document.querySelector('#app').innerHTML;
    assert.isEqual(
      html,
      '<ul><li><div>Favourite drink: sel</div></li></ul>',
      'testGetsHTML'
    );
  }

  testHasNoteList();
  testAddsNote();
  testCreateNoteListView();
  testUpdatesHTMLView();
})(this);

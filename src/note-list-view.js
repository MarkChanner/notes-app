(function(exports) {

  function NoteListView(noteList) {
    this.noteList = noteList;
  }

  NoteListView.prototype.getHTML = function () {
    var notes = this.noteList.getNotes();
    var notesHTML = []
    notes.forEach(function(note) {
      notesHTML.push('<li><div>' + note.text + '</div></li>');
    });
    return '<ul>' + notesHTML.join("") + '</ul>';
  };

  exports.NoteListView = NoteListView;
})(this);

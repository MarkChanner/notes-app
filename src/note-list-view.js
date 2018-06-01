(function(exports) {
  function NoteListView(noteList) {
    this.noteList = noteList;
  }

  NoteListView.prototype.getHTML = function() {
    var notes = this.noteList.getNotes();
    var notesHTML = [];
    notes.forEach(function(note) {
      notesHTML.push('<li><div>' + note.text.substring(0, 20) + '</div></li>');
    });
    return notesHTML.length != 0 ? '<ul>' + notesHTML.join('') + '</ul>' : '';
  };

  exports.NoteListView = NoteListView;
})(this);

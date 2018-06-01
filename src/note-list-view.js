(function(exports) {
  function NoteListView(noteList) {
    this.noteList = noteList;
  }

  NoteListView.prototype.getHTML = function() {
    var notesHTML = [];
    this.noteList.getNotes().forEach(function(note) {
      notesHTML.push('<li><div>' + note.text.substring(0, 20) + '</div></li>');
    });
    return notesHTML.length != 0 ? '<ul>' + notesHTML.join('') + '</ul>' : '';
  };

  exports.NoteListView = NoteListView;
})(this);

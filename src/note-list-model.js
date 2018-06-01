(function(exports) {
  function NoteList() {
    this.notes = [];
    this.noteId = 0;
  }

  NoteList.prototype.getNotes = function() {
    return this.notes;
  };

  NoteList.prototype.createNote = function(text) {
    this.notes.push(new Note(text, this.noteId));
    this.noteId += 1;
  };

  exports.NoteList = NoteList;
})(this);

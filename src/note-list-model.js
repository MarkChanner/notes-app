(function(exports) {
  function NoteList() {
    this.notes = [];
  }

  NoteList.prototype.getNotes = function() {
    return this.notes;
  };

  exports.NoteList = NoteList;
})(this);

(function(exports) {
  function Note(text, uniqueId) {
    this.text = text;
    this.uniqueId = uniqueId;
  }

  Note.prototype.getText = function() {
    return this.text;
  };

  exports.Note = Note;
})(this);

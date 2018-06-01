// Use TDD to update the note list view so that each note is linked to an
// appropriate URL for displaying that individual note e.g. http://localhost:8080#notes/1.
(function(exports) {
  function SingleNoteView(note) {
    this.note = note;
  }

  SingleNoteView.prototype.getHTML = function() {
    return `<div>${this.note.getText()}</div>`;
  };

  exports.SingleNoteView = SingleNoteView;
})(this);

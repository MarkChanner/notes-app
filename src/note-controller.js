(function(exports) {
  function NoteController(noteList) {
    this.noteList = noteList;
    this.noteList.createNote('Favourite drink: seltzer');
    this.noteListView = new NoteListView(noteList);
  }

  NoteController.prototype.updateView = function() {
    var html = this.noteListView.getHTML();
    document.querySelector('#app').innerHTML = html;
  };

  exports.NoteController = NoteController;
})(this);

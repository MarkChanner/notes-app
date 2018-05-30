window.onload = function() {
  (function (exports) {
    function NoteController(noteList) {
      this.noteList = noteList
      this.noteList.createNote("Favourite drink: seltzer");
      this.noteView = new NoteListView(this.noteList);
    }

    NoteController.prototype.updateView = function() {
      var htmlText = this.noteView.getHTML()
      document.querySelector('#app').innerHTML = htmlText;
    };
    
    exports.NoteController = NoteController;
  })(this);

  var noteController = new NoteController(new NoteList());
  noteController.updateView();
};

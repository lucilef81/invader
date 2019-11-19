var app = {
  MAX_ROW: 8,
  MAX_COLUMNS: 8,
  grid: document.createElement('table');

  init: function() {
    console.log('app init');
    document.querySelector('#invader').appendChild(app.grid);
    app.createGrid();
    app.blackCells();
  },

  createGrid: function() {
    for (line = 0; line < app.MAX_ROW; line++) {
      var row = document.createElement('tr');
      app.grid.appendChild(row);
      for (col = 0; col < app.MAX_COLUMNS; col++) {
        var column = document.createElement('td');
        column.className += 'cell';
        row.appendChild(column);
      }
    }
  },

  blackCells: function() {
    var cells = document.querySelectorAll('.cell');
    for (cell = 0; cell < cells.length; cell++) {
      cells[cell].addEventListener('click', function (event) {
        if (event.target.classList.contains('black')) {
          event.target.classList.remove('black');
        } else {
          event.target.classList.add('black');
        }
      });
    }
  }
};


document.addEventListener('DOMContentLoaded', app.init);

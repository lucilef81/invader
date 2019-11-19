var app = {
  init: function() {
    console.log('app init');
    createGrid();
  },
};

// Création de la grille

var grid = document.createElement('table');
document.querySelector('#invader').appendChild(grid);
const MAX_ROW = 8;
const MAX_COLUMNS = 8;

function createGrid() {
  for (line = 0; line < MAX_ROW; line++) {
    var row = document.createElement('tr');
    grid.appendChild(row);
    for (col = 0; col < MAX_COLUMNS; col++) {
      var column = document.createElement('td');
      column.className = 'cell';
      row.appendChild(column);
    }
  }
}

document.addEventListener('DOMContentLoaded', app.init);

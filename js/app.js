var app = {
  MAX_ROW: 8,
  MAX_COLUMNS: 8,
  CELL_SIZE: 2,
  grid: document.createElement('table'),
  configuration: document.querySelector('.configuration'),

  init: function() {
    console.log('app init');
    document.querySelector('#invader').appendChild(app.grid);

    app.createGrid();
    app.blackCells();
    app.createHeader();
    app.configuration.addEventListener('submit', function(event) {
      event.preventDefault();
      app.resetGrid();
      app.handleFormSubmit();
      app.createGrid();
    });
  },

  handleFormSubmit: function() {
    var newCellSize = document.querySelector('.pixel').value;
    var newGridSize = document.querySelector('.grid').value;

    if (newGridSize) {
      app.MAX_ROW = newGridSize;
      app.MAX_COLUMNS = newGridSize;
    }

    if (newCellSize) {
      app.CELL_SIZE = newCellSize;
    }
  },

  createGrid: function() {
    for (line = 0; line < app.MAX_ROW; line++) {
      var row = document.createElement('tr');
      app.grid.appendChild(row);
      for (col = 0; col < app.MAX_COLUMNS; col++) {
        var column = document.createElement('td');
        column.className += 'cell';
        column.style.width = `${app.CELL_SIZE}rem`;
        column.style.height = `${app.CELL_SIZE}rem`;
        row.appendChild(column);
      }
    }
  },

  blackCells: function() {
    var cells = document.querySelectorAll('.cell');
    for (cell = 0; cell < cells.length; cell++) {
      cells[cell].addEventListener('click', function(event) {
        if (event.target.classList.contains('black')) {
          event.target.classList.remove('black');
        } else {
          event.target.classList.add('black');
        }
      });
    }
  },

  createHeader: function() {
    var grid = document.createElement('input');
    grid.className = 'grid';
    grid.placeholder = 'Taille de la grille';
    app.configuration.appendChild(grid);

    var pixel = document.createElement('input');
    pixel.className = 'pixel';
    pixel.placeholder = 'Taille des pixels';
    app.configuration.appendChild(pixel);

    var confirm = document.createElement('button');
    confirm.className = 'confirm';
    confirm.innerHTML = 'Valider';
    app.configuration.appendChild(confirm);
  },

  resetGrid: function() {
    var rows = document.querySelectorAll('tr');
    for (var row = 0; row < rows.length; row++) {
      app.grid.removeChild(rows[row]);
    }
  },
};

document.addEventListener('DOMContentLoaded', app.init);

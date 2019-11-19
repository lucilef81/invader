var app = {
  MAX_ROW: 8,
  MAX_COLUMNS: 8,
  CELL_SIZE: 2,
  grid: document.createElement('table'),
  configuration: document.querySelector('.configuration'),
  styles: ['empty', 'plain', 'light', 'highlight'],
  currentStyle: 'empty',

  init: function() {
    console.log('app init');
    document.querySelector('#invader').appendChild(app.grid);

    app.createGrid(app.currentStyle);
    app.createHeader();
    app.createColorPanel();

    app.handleFormSubmit();
    app.setCurrentColor();
    app.changeColor();
  },

  handleFormSubmit: function() {
    app.configuration.addEventListener('submit', function(event) {
      event.preventDefault();
      app.resetGrid();
      var newCellSize = document.querySelector('.pixel').value;
      var newGridSize = document.querySelector('.grid').value;

      if (newGridSize) {
        app.MAX_ROW = newGridSize;
        app.MAX_COLUMNS = newGridSize;
      }

      if (newCellSize) {
        app.CELL_SIZE = newCellSize;
      }
      app.createGrid();
      app.changeColor();
    });
  },

  createGrid: function() {
    for (line = 0; line < app.MAX_ROW; line++) {
      var row = document.createElement('tr');
      app.grid.appendChild(row);
      for (col = 0; col < app.MAX_COLUMNS; col++) {
        var column = document.createElement('td');
        column.classList.add('cell', app.currentStyle);
        column.style.width = `${app.CELL_SIZE}rem`;
        column.style.height = `${app.CELL_SIZE}rem`;
        row.appendChild(column);
      }
    }
  },

  changeColor: function() {
    var cells = document.querySelectorAll('.cell');
    for (cell = 0; cell < cells.length; cell++) {
      cells[cell].addEventListener('click', function(event) {
        event.target.classList.remove(event.target.classList[1]);
        event.target.classList.add(app.currentStyle);
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
    app.currentStyle = 'empty';
  },

  createColorPanel: function() {
    var selector = document.createElement('div');
    selector.className = 'selector';
    document.body.appendChild(selector);

    for (let i = 0; i < app.styles.length; i++) {
      var button = document.createElement('button');
      button.classList.add('button', app.styles[i]);
      selector.appendChild(button);
    }
  },

  setCurrentColor: function() {
    var buttons = document.querySelectorAll('.button');
    for (index = 0; index < buttons.length; index++) {
      buttons[index].addEventListener('click', function(event) {
        app.currentStyle = event.target.classList[1];
        console.log('change color');
      });
    }
  },
};

document.addEventListener('DOMContentLoaded', () => {
  app.init();
});

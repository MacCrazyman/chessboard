export default class Piece{
  constructor(label,color, type, column, row, cells){
    this.label = label    
    this.color = color
    this.type = type
    this.state = 'alive'
    this.column = column
    this.row = row
    this.position = column+row
    this.moveTo = function(cell) {
      cells[cell[1]-1][cell[0].charCodeAt()-97].piece = this;
      cells[this.row-1][this.column.charCodeAt()-97].piece = null
      this.row = cell[1]
      this.column = cell[0]
      this.position = this.column+this.row
    }
    cells[row-1][column.charCodeAt()-97].piece = this
  }

}
export default class Piece{
  constructor(color, type, column, row, cells){
    this.color = color
    this.type = type
    this.state = 'alive'
    this.column = column
    this.row = row
    this.position = column+row
    cells[row-1][column.charCodeAt()-97].piece = this
  }
  // moveTo = (cell) => {
    
  // }

}
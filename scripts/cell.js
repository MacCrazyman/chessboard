export default class Cell{
  constructor(column,row){
    this.piece = ''
    this.row = row
    this.column = column
    this.label = column+row
  }
}
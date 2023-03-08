export default class Cell{
  constructor(column,row){
    this.piece = null
    this.row = row
    this.column = column
    this.label = column+row
  }
}
export default class Cell{
  constructor(column,row){
    this.piece = {
      color:'',
      type:'',
      state:'',
      column:'',
      row:'',
      position:'',
    }
    this.row = row
    this.column = column
    this.label = column+row
  }
}
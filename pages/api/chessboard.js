import Cell from "../../scripts/cell"
import Piece from "../../scripts/piece"

const cells=[]
for (let row_label = 1; row_label <= 8 ; row_label++){
  let row=[]
  for (let col_label = 97 ; col_label <=104 ; col_label++){
    row.push(new Cell(String.fromCharCode(col_label),row_label))
  }
  cells.push(row)
}
const board = {
  cells:cells,
  player1:{
    pieces:{},
  },
  player2:{
    pieces:{},
  }
}
for (let pieces = 1; pieces <= 8; pieces++){
  board.player1.pieces['p'+pieces] = new Piece ('w','p',String.fromCharCode(96+pieces),'2',cells)
  board.player2.pieces['p'+pieces] = new Piece ('b','p',String.fromCharCode(96+pieces),'7',cells)
}

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json({ board: cells })

  }
  if (req.method === 'POST') {
    console.log(JSON.parse(req.body));

  }
}
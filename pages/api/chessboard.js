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
    pieces:{B1: new Piece ('w','B','c','1',cells)},
    pieces:{B2: new Piece ('w','B','f','1',cells)},
    pieces:{N1: new Piece ('w','N','b','1',cells)},
    pieces:{N1: new Piece ('w','N','g','1',cells)},
    pieces:{R1: new Piece ('w','R','a','1',cells)},
    pieces:{R2: new Piece ('w','R','h','1',cells)},
    pieces:{Q: new Piece ('w','Q','e','1',cells)},
    pieces:{K: new Piece ('w','K','d','1',cells)},
  },
  player2:{
    pieces:{
      pieces:{B1: new Piece ('b','B','c','8',cells)},
      pieces:{B2: new Piece ('b','B','f','8',cells)},
      pieces:{N1: new Piece ('b','N','b','8',cells)},
      pieces:{N1: new Piece ('b','N','g','8',cells)},
      pieces:{R1: new Piece ('b','R','a','8',cells)},
      pieces:{R2: new Piece ('b','R','h','8',cells)},
      pieces:{Q: new Piece ('b','Q','e','8',cells)},
      pieces:{K: new Piece ('b','K','d','8',cells)},
    },
  }
}
for (let pieces = 1; pieces <= 8; pieces++){
  board.player1.pieces['P'+pieces] = new Piece ('w','P',String.fromCharCode(96+pieces),'2',cells)
  board.player2.pieces['P'+pieces] = new Piece ('b','P',String.fromCharCode(96+pieces),'7',cells)
}

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json({ board: cells })

  }
  if (req.method === 'POST') {
    console.log(JSON.parse(req.body));

  }
}
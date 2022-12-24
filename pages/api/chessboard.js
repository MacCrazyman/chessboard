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
    pieces:{
      p1: new Piece ('w','p', 'a', '2', cells),
      p2: new Piece ('w','p', 'b', '2', cells),
      p3: new Piece ('w','p', 'c', '2', cells),
      p4: new Piece ('w','p', 'd', '2', cells),
  },
  }
}

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json({ board: cells })

  }
  if (req.method === 'POST') {
    console.log(JSON.parse(req.body));

  }
}
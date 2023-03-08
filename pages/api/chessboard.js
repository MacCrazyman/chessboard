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
  nextPlayer:1,
  player1:{
    pieces:{
      B1: new Piece ('B1','w','B','c','1',cells),
      B2: new Piece ('B2','w','B','f','1',cells),
      N1: new Piece ('N1','w','N','b','1',cells),
      N2: new Piece ('N2','w','N','g','1',cells),
      R1: new Piece ('R1','w','R','a','1',cells),
      R2: new Piece ('R2','w','R','h','1',cells),
      Q: new Piece ('Q','w','Q','d','1',cells),
      K: new Piece ('K','w','K','e','1',cells),
    }
  },
  player2:{
    pieces:{
      B1: new Piece ('B1','b','B','c','8',cells),
      B2: new Piece ('B2','b','B','f','8',cells),
      N1: new Piece ('N1','b','N','b','8',cells),
      N2: new Piece ('N2','b','N','g','8',cells),
      R1: new Piece ('R1','b','R','a','8',cells),
      R2: new Piece ('R2','b','R','h','8',cells),
      Q: new Piece ('Q','b','Q','d','8',cells),
      K: new Piece ('K','b','K','e','8',cells),
    },
  }
}
for (let pieces = 1; pieces <= 8; pieces++){
  board.player1.pieces['P'+pieces] = new Piece (`P${pieces}`,'w','P',String.fromCharCode(96+pieces),'2',cells)
  board.player2.pieces['P'+pieces] = new Piece (`P${pieces}`,'b','P',String.fromCharCode(96+pieces),'7',cells)
}
export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json({ board: cells })

  }
  if (req.method === 'POST') {
    let request = JSON.parse(req.body)
    board['player'+board.nextPlayer].pieces[request.piecetype].moveTo(request.target);
    res.status(200).json({board: cells})
  }
}
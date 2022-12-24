import Piece from "../../scripts/piece"

const cells=[]
const board = {
  cells:cells,
  player1:{
    pieces:{
      p1: Piece ('w','p'),
      p2: Piece ('w','p'),
      p3: Piece ('w','p'),
      p4: Piece ('w','p'),
  },
  }
}
for (let col_label = 97; col_label <= 104 ; col_label++){
  let row=[]
  for (let row_label = 1; row_label <=8; row_label++){
    row.push(String.fromCharCode(col_label)+row_label)
  }
  cells.push(row)
}
export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json({ board: cells })
    console.log('creating board');
  }
  if (req.method === 'POST') {
    console.log(JSON.parse(req.body));

  }
}
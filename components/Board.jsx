import Cell from "./Cell";
import { useState } from "react";


export default function Board({layout}) {
  const [pieceClicked,updatePiece]= useState(null)
  const clicked = async (properties) => {
    updatePiece(properties?.piece)
    if (properties?.piece !== pieceClicked && pieceClicked){
      await   fetch('/api/chessboard',{
        method:'POST',
        body:JSON.stringify({
          type:'movement',
          piecetype:pieceClicked.label,
          subject:pieceClicked.position,
          target:properties.label,
        }),

      }).then((response)=>response.json())
      updatePiece(null)
    }
  }
  const labels = ['']
  for (let label= 97; label <= 104; label++){
    labels.push(String.fromCharCode(label))
  }
  return (
    <div className="board">
      <div className="row">{labels.map((label)=><div key={label} className="col-label">{label}</div>)}</div>
      {layout.map((row_item)=><div className="row" key={row_item[0].row}><div className="row-label">{row_item[0].row}</div>{row_item.map((cell_item)=><Cell key={cell_item.label} properties={cell_item} method={clicked}></Cell>)}</div>)}
    </div>
  )
}
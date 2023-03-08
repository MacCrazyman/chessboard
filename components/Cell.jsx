export default function Cell({properties,method}) {
  
  let unicodePiece= 160
  switch (properties.piece?.type){
    case 'K': unicodePiece= 9812
    break;
    case 'Q': unicodePiece= 9813
    break;
    case 'R': unicodePiece= 9814
    break;
    case 'B': unicodePiece= 9815
    break;
    case 'N': unicodePiece= 9816
    break;
    case 'P': unicodePiece= 9817
    break;
  }
  if (properties.piece?.color === 'b') unicodePiece+=6
  return (
    <div className="cell" onClick={()=>method(properties)}>{String.fromCharCode(unicodePiece)}</div>
  )
}
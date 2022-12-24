import Cell from "./Cell";


export default function Board({layout}) {
  const labels = ['']
  for (let label= 97; label <= 104; label++){
    labels.push(String.fromCharCode(label))
  }
  return (
    <div className="board">
      <div className="row">{labels.map((label)=><div key={label} className="col-label">{label}</div>)}</div>
      {layout.map((row_item)=><div className="row" key={row_item[0].row}><div className="row-label">{row_item[0].row}</div>{row_item.map((cell_item)=><Cell key={cell_item.label} properties={cell_item}></Cell>)}</div>)}
    </div>
  )
}
import Cell from "./Cell";


export default function Board({layout}) {
  return (
    <div className="board">
      {layout.map((row_item)=><div className="row" key={row_item[0]}>{row_item.map((cell_label)=><Cell key={cell_label}></Cell>)}</div>)}
    </div>
  )
}
import Cell from "./Cell";


export default function Board({layout}) {
  return (
    <div className="board">
      {layout.map((row_item)=><div className="row" key={row_item[0].column}>{row_item.map((cell_item)=><Cell key={cell_item.label}></Cell>)}</div>)}
    </div>
  )
}
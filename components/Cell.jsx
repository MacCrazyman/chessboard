export default function Cell({properties}) {
  return (
    <div className="cell">{properties.piece.type}</div>
  )
}
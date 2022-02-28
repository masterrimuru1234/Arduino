export default function Card(props) {
  return (
    <div className="basic-card basic-card-lips">
      <div className="card-content">
        <span className="card-title">{props.name}</span>
        <p className="card-text">{props.roll}</p>
      </div>
    </div>
  );
}

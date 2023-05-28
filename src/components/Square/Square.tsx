import "./Square.css";

interface Props {
  image?: string;
  number: number;
}

export default function Square({ number, image }: Props) {
  if (number % 2 === 0) {
    return (
      <div className="square dark-square">
        {image &&<div
          style={{ backgroundImage: `url(${image})` }}
          className="chess-piece"
        ></div>}
      </div>
    );
  } else {
    return (
      <div className="square light-square">
        {image && <div
          style={{ backgroundImage: `url(${image})` }}
          className="chess-piece"
        ></div>}
      </div>
    );
  }
}

import React, { useRef } from "react";

import "./Board.css";
import Square from "../Square/Square";

const verticalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"];
const horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];

interface Piece {
  image: string;
  x: number;
  y: number;
}

const pieces: Piece[] = [];

for (let i = 0; i < 8; i++) {
  pieces.push({ image: "assets/images/Chess_pdt60.png", x: i, y: 1 });
  pieces.push({
    image: "assets/images/Chess_plt60.png",
    x: i,
    y: 6,
  });
}
{
  /* Am adaugat  pionii */
}

pieces.push({
  image: "assets/images/Chess_rdt60.png",
  x: 0,
  y: 0,
});
pieces.push({
  image: "assets/images/Chess_rdt60.png",
  x: 7,
  y: 0,
});
pieces.push({
  image: "assets/images/Chess_rlt60.png",
  x: 0,
  y: 7,
});
pieces.push({
  image: "assets/images/Chess_rlt60.png",
  x: 7,
  y: 7,
});
{
  /* Am adaugat turele */
}

pieces.push({
  image: "assets/images/Chess_ndt60.png",
  x: 1,
  y: 0,
});
pieces.push({
  image: "assets/images/Chess_ndt60.png",
  x: 6,
  y: 0,
});
pieces.push({
  image: "assets/images/Chess_nlt60.png",
  x: 1,
  y: 7,
});
pieces.push({
  image: "assets/images/Chess_nlt60.png",
  x: 6,
  y: 7,
});
{
  /* Am adaugat caii*/
}

pieces.push({
  image: "assets/images/Chess_bdt60.png",
  x: 2,
  y: 0,
});
pieces.push({
  image: "assets/images/Chess_bdt60.png",
  x: 5,
  y: 0,
});
pieces.push({
  image: "assets/images/Chess_blt60.png",
  x: 2,
  y: 7,
});
pieces.push({
  image: "assets/images/Chess_blt60.png",
  x: 5,
  y: 7,
});
{
  /* Am adaugat nebunii*/
}

pieces.push({
  image: "assets/images/Chess_kdt60.png",
  x: 4,
  y: 0,
});
pieces.push({
  image: "assets/images/Chess_klt60.png",
  x: 4,
  y: 7,
});
pieces.push({
  image: "assets/images/Chess_qlt60.png",
  x: 3,
  y: 7,
});
pieces.push({
  image: "assets/images/Chess_qdt60.png",
  x: 3,
  y: 0,
});
{
  /* Am adaugat regii si reginele*/
}

export default function Board() {
  let board = [];
  const boardRef = useRef<HTMLDivElement>(null);

  let activePiece: HTMLElement | null = null;

  function grabPiece(e: React.MouseEvent) {
    const element = e.target as HTMLElement;
    if (element.classList.contains("chess-piece")) {
      const x = e.clientX - 50;
      const y = e.clientY - 50;
      element.style.position = "absolute";
      element.style.left = `${x}px`;
      element.style.top = `${y}px`;

      activePiece = element;
    }
  }
  {
    /*functie de apucare a piesei*/
  }

  function movePiece(e: React.MouseEvent) {
    const board = boardRef.current;

    if (activePiece && board) {
      const minX = board.offsetLeft - 25;
      const minY = board.offsetTop - 25;
      const maxX = board.offsetLeft + board.clientWidth - 70;
      const maxY = board.offsetTop + board.clientHeight - 70;
      const x = e.clientX - 50;
      const y = e.clientY - 50;
      activePiece.style.position = "absolute";

      if (x < minX) {
        activePiece.style.left = `${minX}px`;
      } else if (x > maxX) {
        activePiece.style.left = `${maxX}px`;
      } else {
        activePiece.style.left = `${x}px`;
      }
      if (y < minY) {
        activePiece.style.top = `${minY}px`;
      } else if (y > maxY) {
        activePiece.style.top = `${maxY}px`;
      } else {
        activePiece.style.top = `${y}px`;
      }
    }
  }
  {
    /*functie de mutare a piesei , am pus limite astfel incat piesa sa nu poata fi mutata in afara tablei */
  }

  function dropPiece(e: React.MouseEvent) {
    if (activePiece) {
      activePiece = null;
    }
  }

  {
    /*functie de lasare a piesei*/
  }

  for (let j = verticalAxis.length - 1; j >= 0; j--) {
    for (let i = 0; i < horizontalAxis.length; i++) {
      const number = j + i + 2;
      let image = undefined;

      pieces.forEach((p) => {
        if (p.x === i && p.y === j) {
          image = p.image;
        }
      });

      board.push(<Square number={number} image={image} />);
    }
  }
  return (
    <div
      onMouseUp={(e) => dropPiece(e)}
      onMouseMove={(e) => movePiece(e)}
      onMouseDown={(e) => grabPiece(e)}
      id="board"
      ref={boardRef}
    >
      {board}
    </div>
  );
}

{
  /*Pentru a realiza tabla, am creat 2 siruri a cate 8 elemente(reprezentand axele orizontale si verticale) si am luat 2 variabile i si j care parcurg cele 2 siruri, iar la fiecare iteratie am afisat un patrat, grupandu-le intr-un spatiu de 8x8 cu ajutorul FlexBox-ului
  
  Apoi, pentru a colora patratele intr-o culoare deschisa si inchisa alternativ, am mai luat o variabila care reprezenta suma liniei si coloanei la fiecare iteratie. Daca suma este para, atunci patratul va fi in culoare inchisa, daca este impar culoare deschisa.

  Proiectul este impartit in 2 componente, cea principala este tabla in sine si unde se face manipularea pieselor, iar a doua este afisarea patratelelor.
  */
}

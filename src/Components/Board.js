import React from 'react';
import Card from "./Card.js";

const Board = (props) => {
    const board = props.indexes.map((index) => {
        return (<Card url={props.images[index]} alt={index} key={index} action={props.action} empty={props.empty} back={props.back}/>);
    });
    return (
        <>
            {board}
            <hr/>
            <button onClick={props.reset}>Reset</button>
            <a href="https://www.freepik.com/graphiqastock">Icons designed by Graphiqastock / Freepik</a>
        </>
    );
}

export default Board;
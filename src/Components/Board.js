import React from 'react';
import Card from "./Card.js";

const Board = (props) => {
    const board = props.indexes.map((index) => {
        return (<Card url={props.images[index]} alt={index} key={index} action={props.action} empty={props.empty} back={props.back}/>);
    });
    return (
        <>
            {board}
            <button onClick={props.reset}>Reset</button>
            <a href="http://www.freepik.com">Icons designed by Graphiqastock / Freepik</a>
        </>
    );
}

export default Board;
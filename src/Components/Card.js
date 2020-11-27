import React from 'react';
const opacity = {opacity: 1};
const Card = (props) => {
    return (
            <img src={props.url} alt={props.alt} key={props.alt} onClick={props.url !== props.empty? () => props.action(props.alt) : null}  style={props.url !== props.back ? opacity : null}/>
    );
}

export default Card;
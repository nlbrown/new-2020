import React from 'react';

const Paragraph = (props) => {
    const {text} = props;
    return (
        <div>
        <p>Hi</p>
        <p style={{color: 'blue'}}>{text}</p>;
        </div>
        );
};

export default Paragraph;
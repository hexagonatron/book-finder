import React from 'react';

const Tile = ({ title, content }) => {
    return (
        <div className="tile is-parent">
            <article className="tile is-child box">
                <p className="title has-text-centered">{content}</p>
                <p className="subtitle has-text-centered">{title}</p>
            </article>
        </div>
    );
};

export default Tile;
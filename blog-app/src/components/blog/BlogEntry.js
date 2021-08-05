import React from 'react';

const BlogEntry = props => {
    return (
        <div>
            {props.entries.map(entry => (
                <div className="entry" key={entry.id}>
                    <h2>{entry.title}</h2>
                    <h3>{entry.date}</h3>
                    <p>{entry.body}</p>
                </div>
            ))}
        </div>
    )
}

export default BlogEntry;
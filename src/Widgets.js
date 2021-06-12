import React from 'react'
import "./Widgets.css"
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {
    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>

            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    );
    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
            {newsArticle("Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Top News - 999 readers")}
            {newsArticle("Rutrum quisque non tellus orci ac.", "BBC News - 966 readers")}
            {newsArticle("Tincidunt augue interdum velit euismod in pellentesque massa placerat duis.", "Wall Street Journal - 2000 readers")}
            {newsArticle("In mollis nunc sed id semper risus in.", "Top News - 999 readers")}
            {newsArticle("Sed adipiscing diam donec adipiscing tristique.", "BBC News - 966 readers")}
            {newsArticle("Malesuada nunc vel risus commodo viverra maecenas.", "Wall Street Journal - 2000 readers")}
        </div>
    );
}

export default Widgets

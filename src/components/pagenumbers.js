import React, {useState} from "react";
import "./../App.css";

const PageNumbers = ({ posts_length, postsperpage, paginate }) => {

    const pagenumbers=[];
    for(let i=1;i<=Math.ceil(posts_length/postsperpage);i++)
    {
        pagenumbers.push(i);
    }

    return (
        <nav>
        <ul class="pagination">
            {pagenumbers.map(pagenumber => (
                <li key={pagenumber} className="page-item">
                    <a href="!#" onClick={() => paginate(pagenumber)} className="page-link">{pagenumber}</a>
                </li>
            ))}
        </ul>
        </nav>
    )
}

export default PageNumbers;
import React from "react";
import { useState } from "react";

function Comments() {
    const [input, setInput] = useState([]);
    const onCreateComment = (e) => {
        e.preventDefault()
        console.log("heyy")
    }
    return (


        // <textarea className="commentSection">
        //     <input  type="text" name="comments" placeholder="Enter Comment">Comment Section</input>
        // </textarea>    

        <div className="comment__container">
            <form onSubmit={onCreateComment}>
                <label htmlFor="comment" />
                <textarea
                    className="comment__textarea"
                    type="text"
                    id="comment"
                    name="comment"
                    placeholder="Add a comment..."
                    onChange={(e) => setInput(e.target.value)}
                />
                <button type="submit" className="post-comment-btn">POST🐾</button>
            </form>
        </div>

    )
}


export default Comments;
import React from "react";
// import { useState } from "react";
import Comment from "./Comment"

function CommentSection({comments, value5}) {
const commentSection = comments.map(comment => {
    return <Comment
        comment={comment}
        key={comment}
        value5={value5}
    />
})

return (
    <ul className="comment-section">
        {commentSection}
    </ul>

)
}


export default CommentSection;





import React from "react";
// import { useState } from "react";
import Comment from "./Comment"

function CommentSection({comments}) {
const commentSection = comments.map((comment,index) => {
    return <Comment
        comment={comment}
        key={index}
    />
})

return (
    <ul className="comment-section">
        {commentSection}
    </ul>

)
}


export default CommentSection;





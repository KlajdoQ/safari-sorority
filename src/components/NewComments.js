import React, {useState} from "react"


function NewComments({id, addNewComment, url}) {
    const [createComment, setCreateComment] = useState('');

   function handleCreateComment(e) {
    setCreateComment(e.target.value)
   }

   const handleCommentSubmit = (e) => {
    e.preventDefault();

    const newComment = [createComment]

    addNewComment(newComment)
    
    fetch(`${url}/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newComment)
    })
    .then(res => res.json())
    .then(addNewComment)


    // INPUT RESET
    setCreateComment('')
}

    return (
        <div className="comment__container">
            <form onSubmit={handleCommentSubmit}>
                <input
                    className="comment_input"
                    type="text"
                    name="comment"
                    placeholder="Add a comment..."
                    value={createComment}
                    onChange={(e) => handleCreateComment(e)}
                    />
                <button type="submit" className="post-comment-btn">POST🐾</button>
            </form>
        </div>
    )
}

export default NewComments

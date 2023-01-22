import React, {useState} from "react"


function NewComments({id, addNewComment}) {
    const [createComment, setCreateComment] = useState('');

   function handleCreateComment(e) {
    setCreateComment(e.target.value)
   }

   const handleCommentSubmit = (e) => {
    e.preventDefault();

    const newComment = {
        comments: [
            createComment
        ]
    }

    addNewComment(newComment)

    // TEXTAREA RESET
    setCreateComment('')
}

    return (
        <div className="comment__container">
            <form onSubmit={handleCommentSubmit}>
                <textarea
                    className="comment__textarea"
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

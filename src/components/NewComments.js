import React, {useState} from "react"


function NewComments({id, addNewComment, url, generateRandomIntegerInRange}) {
    const [createComment, setCreateComment] = useState('');

   function handleCreateComment(e) {
    setCreateComment(e.target.value)
   }

   const handleCommentSubmit = (e) => {
    e.preventDefault();

    const newComment = {
        comments: [createComment]
   }

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
        <div >
            <form onSubmit={handleCommentSubmit}className="comment_container">
                <input
                    className="comment_input"
                    type="text"
                    name="comment"
                    placeholder="Add a comment..."
                    value={createComment}
                    onChange={(e) => handleCreateComment(e)}
                    />
                <button onClick={generateRandomIntegerInRange} type="submit" className="post-comment-btn">POST🐾</button>
            </form>
        </div>
    )
}

export default NewComments

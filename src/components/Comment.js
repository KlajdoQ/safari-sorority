import React from "react"




function Comment({comment, value5}) {

    return (
        <>
        <div className="comment">
      <em>👤user{value5}:</em><br/>
        {comment}
        </div>
        </>
    )
}


export default Comment

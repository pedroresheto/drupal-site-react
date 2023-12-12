import React, { useState } from "react"

const SingleQuestion = ({item})=>{
    const [isActive, setIsActive] = useState(false)
    return(
        <div className={isActive ? 'active': ''} onClick={() => setIsActive(!isActive)}>
            <h3>
              <span className="faq-one">{item.id}.</span>{item.question}
            </h3>
            <p>{item.text}</p>
          </div>
    )
}

export default SingleQuestion;
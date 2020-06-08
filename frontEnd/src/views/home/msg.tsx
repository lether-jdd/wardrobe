import React, { useState } from 'react'
function ContentWrapper() { 
  const [msg, setCount] = useState([{ title: 'zara打折', link: "" }]);
  return (
    <React.Fragment>
      <ul>
        {
          msg.map(i => { 
            return (
              <li key={i.link}>
                <a href={i.link}> {i.title}</a>
              </li>
            )
          })
        }
      </ul>
    </React.Fragment>
  )
} 
export default ContentWrapper

'use client'

import { useState } from "react";

const BlogCard = ({title}) => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }
    if(!title){
        return (
            <div>
                <h1 onClick={increment}>Empty</h1>
                {count}
            </div>
        )
    }
  return (
    <div>
      <h1>{title}</h1>
    </div>
  )
}

export default BlogCard
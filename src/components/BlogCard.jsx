'use client';

import { useState } from 'react';

const BlogCard = ({ title }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  if (!title) {
    return (
      <div>
        <h1 >Empty</h1>
        
      </div>
    );
  }
  return (
    <div>
      <h1 onClick={increment}>{title}</h1>
      {count}
    </div>
  );
};

export default BlogCard;

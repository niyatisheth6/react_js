// perfoming side effect such as api etc.

import React, { useEffect, useState } from "react";

function UseEffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = count;
  }, [count]);
  return (
    <div>
      <button onClick={() => setCount(count - 1)}>-</button>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

export default UseEffect;

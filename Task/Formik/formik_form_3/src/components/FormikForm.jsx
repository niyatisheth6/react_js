import React, { useCallback, useMemo, useState } from "react";

import TableData from "../shared/TableData";
import FromData from "../shared/FromData";
import Counter from "../shared/Counter";

const FormikForm = () => {
  const [data, setData] = useState([]);
  const [toggle, setToggle] = useState(true);
  const [count, setCount] = useState(0);

  console.log("Registration form");

  const memoizedData = useMemo(() => data, [data]);

  const memoizedOnClick = useCallback(() => {
    setToggle(toggle);
  }, [setToggle]);

  const memoizedAddToggle = useCallback(() => {
    setToggle(!toggle);
  }, [setToggle]);

  const memoizedSetCount = useMemo(() => setCount, [setCount]);

  const memoizedcount = useMemo(() => count, [count]);

  const memoizedsetData = useMemo(() => setData, [setData]);

  return (
    <div className="container mx-auto flex flex-col gap-20 overflow-auto h-full">
      <Counter count={memoizedcount} setCount={memoizedSetCount} />
      {toggle ? (
        <FromData addtoggle={memoizedAddToggle} setData={memoizedsetData} />
      ) : (
        <TableData item={memoizedData} onclick={memoizedOnClick} />
      )}
    </div>
  );
};

export default FormikForm;

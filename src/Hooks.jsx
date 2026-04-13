import React, { useCallback, useState, useTransition } from "react";
import ErrorBoundary from "./Error";
import ErrorCheck from "./ErrorCheck";
// import Children from "./Children";

function Hooks() {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);
  const [isPending, startTransition] = useTransition();
  const [count, setCount] = useState(0);

  const handleChange = (e) => {
    const value = e.target.value;
    setText(value);

    // heavy update
    startTransition(() => {
      const newList = Array(20000)
        .fill()
        .map((_, i) => value + i);

      setList(newList);
    });
  };

  const handleClick = useCallback(() => {
    console.log("Button clicked");
  }, []);
  return (
    <>
      {/* <input value={text} onChange={handleChange} /> */}
      {/* {isPending && <p>Loading...</p>}
      {list?.map((item, i) => (
        <p key={i}>{item}</p>
      ))} */}

      {/* ********************************** */}
      {/* <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <Child onClick={handleClick} /> */}

      <ErrorBoundary>
        <ErrorCheck />
      </ErrorBoundary>
    </>
  );
}

const Child = React.memo(({ onClick }) => {
  console.log("Child Rendered");
  return <button onClick={onClick}>Click Me</button>;
});

export default Hooks;

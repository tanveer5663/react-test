import React, {
  useState,
  useRef,
  useMemo,
  useCallback,
  useLayoutEffect,
  useContext,
  useEffect,
} from "react";
import {
  useParams,
  useNavigate,
  useLocation,
  useNavigation,
} from "react-router-dom";
import { MyContext } from "./Context";
const Child = React.memo(({ onClick }) => {
  console.log("Child re-render");
  return <button onClick={onClick}>Child button</button>;
});

function About() {
  const { value, setValue } = useContext(MyContext);

  const { id } = useParams();
  const location = useLocation();
  // console.log(location.search);

  const queryParams = new URLSearchParams(location.search);
  // console.log(queryParams);

  const category = queryParams.get("category");
  const price = queryParams.get("price");

  // console.log(category);
  // console.log(price);
  useEffect(() => {
    document.title = `Value: ${value}`;
    console.log("useEffet Run");
  }, [value]);

  return (
    <div>
      <h1>{id}</h1>
    </div>
  );

  // initial 0

  // const ref = useRef();
  // useLayoutEffect(() => {
  //   const rect = ref.current.getBoundingClientRect();
  //   console.log(rect)
  //   console.log("width:", rect.width);
  //   // synchronous DOM updates if needed
  // }, []);
  // return <div ref={ref}>Box</div>;
}

export default About;

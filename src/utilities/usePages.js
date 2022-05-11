import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

const usePages = (page) => {
  //   console.log("TEST");
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  //   console.log("STATE", state);

  //   useEffect(() => {
  //     dispatch(setPageData(location, params, mode));
  //   }, [params]);

  //   useEffect(() => {
  //     const setWindowDimensions = () => {
  //       dispatch(
  //         setDimensions({ height: window.innerHeight, width: window.innerWidth })
  //       );
  //     };
  //     setWindowDimensions();
  //     window.addEventListener("resize", setWindowDimensions);
  //     return () => {
  //       window.removeEventListener("resize", setWindowDimensions);
  //     };
  //   }, []);
};

export default usePages;

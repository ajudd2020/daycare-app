import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { setDimensions, setPageData } from "../features/main/mainSlice";

const useInitialData = (mode) => {
  const dispatch = useDispatch();

  // set the page data on state
  useEffect(() => {
    dispatch(setPageData());
  }, []);

  // set the dimensions on state
  useEffect(() => {
    const setWindowDimensions = () => {
      dispatch(
        setDimensions({ height: window.innerHeight, width: window.innerWidth })
      );
    };
    setWindowDimensions();
    window.addEventListener("resize", setWindowDimensions);
    return () => {
      window.removeEventListener("resize", setWindowDimensions);
    };
  }, []);
};

export default useInitialData;

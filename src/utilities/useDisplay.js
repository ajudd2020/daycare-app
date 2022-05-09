import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setDimensions, setPageData } from "../features/display/displaySlice";

const useDisplay = (mode) => {
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(setPageData(params, mode));
  }, [params]);

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

export default useDisplay;

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { setDimensions, setPageData } from "../features/main/mainSlice";

const useDisplay = (mode) => {
  const dispatch = useDispatch();
  const params = useParams();
  const location = useLocation();

  useEffect(() => {
    dispatch(setPageData(location, params, mode));
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

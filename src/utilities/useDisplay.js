import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { setPathData } from "../features/display/displaySlice";

const useDisplay = (mode) => {
  const dispatch = useDispatch();
  const params = useParams();
  const location = useLocation();

  // set the path object on state
  useEffect(() => {
    dispatch(setPathData(location, params, mode));
  }, [params]);
};

export default useDisplay;

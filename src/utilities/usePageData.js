import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import get from "lodash/get";
import isEqual from "lodash/isEqual";

const usePageData = (mode) => {
  const dispatch = useDispatch();
  const pageData = {};
  const pages = useSelector(
    (state) => get(state, ["initialLoadData", "pageData"], {}),
    isEqual
  );
  const textBlocks = useSelector(
    (state) => get(state, ["initialLoadData", "textBlocks"], {}),
    isEqual
  );

  console.log("PAGES", pages, "TEXT", textBlocks);
};
export default usePageData;

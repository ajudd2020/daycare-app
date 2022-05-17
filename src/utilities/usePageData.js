import { useSelector } from "react-redux";
import get from "lodash/get";
import isEqual from "lodash/isEqual";

// to derive what data we need about the current page, we need, in order:
/**
 *
 * @param {string} pageType type of page - about classes staff announcements newsletters
 * @param {string} pageId pageId - unique idenifier for the page
 */
const usePageData = (pageType, pageId) => {
  console.log("PAGE TYPE", pageType, "PAGE ID", pageId);
  const contentData = useSelector(
    (state) => get(state, ["initialLoadData", "content", pageType], []),
    isEqual
  );
  if (contentData.length === 0) {
    return;
  }
  let content = contentData.filter(
    (contentObj) => contentObj.pageId === pageId
  );
  return content;
};
export default usePageData;

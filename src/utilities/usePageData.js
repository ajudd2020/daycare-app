import { useSelector } from "react-redux";
import get from "lodash/get";
import isEqual from "lodash/isEqual";

// to derive what data we need about the current page, we need, in order:
/**
 *
 * @param {string} pageType type of page - about classes staff
 * @param {string} identifier1 name of the page - home announcements newsletter toddlers msDebbie
 *    This is the id of the class or staff and the type of about page
 * @param {string} identifier2 for about pages only - announcement1 newsletter1
 *    This is the id of the about page
 */
const usePageData = (pageType, identifier1, identifier2 = undefined) => {
  const contentData = useSelector(
    (state) => get(state, ["initialLoadData", "content", pageType], []),
    isEqual
  );
  if (contentData.length === 0) {
    return;
  }
  let content = contentData.filter(
    (aboutObj) => aboutObj.pageCategory === identifier1
  );
  if (identifier2 !== undefined) {
    content = content.filter(
      (contentObj) => contentObj.pageName === identifier2
    );
  }
  return content;
};
export default usePageData;

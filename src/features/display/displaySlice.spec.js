import displayReducer, { setPathObject } from "./displaySlice";

describe("display reducer", () => {
  const initialState = {
    path: {},
  };
  it("should handle initial state", () => {
    expect(displayReducer(undefined, { type: "unknown" })).toEqual({
      path: {},
    });
  });

  it("should save current path on state", () => {
    const pathObj = {
      mode: "view",
      pageType: "about",
      pageName: "home",
      pageCategory: "home",
    };
    const display = displayReducer(initialState, setPathObject(pathObj));
    expect(display.path.mode).toEqual("view");
    expect(display.path.pageName).toEqual("home");
  });

  // @todo: add in tests to handle thunks, i.e. research best way to test behavior
  xit("should autofill some of the path and save path on state", () => {
    const locationObj = {
      pathname: "/view/about/newsletters/newsletter1",
      search: "",
      hash: "",
      state: null,
      key: "default",
    };
    const paramsObj = {
      pageCategory: "newsletters",
      pageName: "newsletter1",
    };
    const display = displayReducer(
      initialState,
      setPathObject(locationObj, paramsObj, "view")
    );
    expect(display.path.mode).toEqual("view");
    expect(display.path.pageName).toEqual("newsletter1");
  });
});

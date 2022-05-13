import mainReducer, {
  setDimensions,
  getGeneralPagesThunk,
  getClassesThunk,
  getStaffThunk,
} from "./mainSlice";

describe("main reducer", () => {
  const initialState = {
    content: {},
    dimensions: {
      height: 0,
      width: 0,
    },
  };
  it("should handle initial state", () => {
    expect(mainReducer(undefined, { type: "unknown" })).toEqual({
      content: {},
      dimensions: {
        height: 0,
        width: 0,
      },
    });
  });

  it("should set window height on state", () => {
    const main = mainReducer(
      initialState,
      setDimensions({ height: 100, width: 200 })
    );
    expect(main.dimensions.height).toEqual(100);
  });

  it("should set window width on state", () => {
    const main = mainReducer(
      initialState,
      setDimensions({ height: 100, width: 200 })
    );
    expect(main.dimensions.width).toEqual(200);
  });
  // need to add in async testing!!
});

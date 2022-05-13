import counterReducer, {
  increment,
  decrement,
  incrementByAmount,
} from "./displaySlice";

describe("counter reducer", () => {
  const initialState = {
    value: 3,
    status: "idle",
  };
  xit("should handle initial state", () => {
    expect(counterReducer(undefined, { type: "unknown" })).toEqual({
      value: 0,
      status: "idle",
    });
  });

  xit("should handle increment", () => {
    const actual = counterReducer(initialState, increment());
    expect(actual.value).toEqual(4);
  });

  xit("should handle decrement", () => {
    const actual = counterReducer(initialState, decrement());
    expect(actual.value).toEqual(2);
  });

  xit("should handle incrementByAmount", () => {
    const actual = counterReducer(initialState, incrementByAmount(2));
    expect(actual.value).toEqual(5);
  });
});

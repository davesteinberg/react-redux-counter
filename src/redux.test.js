import reducer, { incrementCount, decrementCount, getCount } from "./redux";

describe("reducer", () => {
  const initialState = {
    count: 0
  };

  test("returns an initial state with a count of 0", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  describe("for no action", () => {
    test("returns the state unchanged", () => {
      const state = { count: 5 };
      expect(reducer(state, {})).toEqual(state);
    });
  });

  describe("for INCREMENT_COUNT", () => {
    test("returns the state with count incremented by 1", () => {
      const initial = { count: 5 };
      const expected = { count: 6 };
      expect(reducer(initial, incrementCount())).toEqual(expected);
    });
  });

  describe("for DECREMENT_COUNT", () => {
    test("returns the state with count decremented by 1", () => {
      const initial = { count: 5 };
      const expected = { count: 4 };
      expect(reducer(initial, decrementCount())).toEqual(expected);
    });
  });
});

describe("actions", () => {
  describe("incrementCount()", () => {
    test("creates an INCREMENT_COUNT action", () => {
      const expected = { type: "INCREMENT_COUNT" };
      expect(incrementCount()).toEqual(expected);
    });
  });

  describe("decrementCount()", () => {
    test("creates a DECREMENT_COUNT action", () => {
      const expected = { type: "DECREMENT_COUNT" };
      expect(decrementCount()).toEqual(expected);
    });
  });
});

describe("selectors", () => {
  describe("getCount()", () => {
    test("returns the count", () => {
      const state = { count: 5 };
      expect(getCount(state)).toBe(5);
    });
  });
});

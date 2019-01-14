import React from "react";
import { shallow } from "enzyme";
import configureStore from "redux-mock-store";
import ConnectedCounter, { Counter } from "./Counter";
import { incrementCount, decrementCount } from "./redux";

describe("Counter", () => {
  let handleIncrementClick, handleDecrementClick;

  beforeEach(() => {
    handleIncrementClick = jest.fn().mockName("handleIncrementClick");
    handleDecrementClick = jest.fn().mockName("handleDecrementClick");
  });

  test("renders a count p", () => {
    const wrapper = shallow(
      <Counter count={0} onIncrementClick={() => {}} onDecrementClick={() => {}} />
    );
    expect(wrapper).toContainMatchingElement("p#count");
  });

  test("renders the specified count value in the p", () => {
    const wrapper = shallow(
      <Counter count={42} onIncrementClick={() => {}} onDecrementClick={() => {}} />
    );
    expect(wrapper.find("p#count").text()).toBe("42");
  });

  test("renders 2 buttons", () => {
    const wrapper = shallow(
      <Counter count={0} onIncrementClick={() => {}} onDecrementClick={() => {}} />
    );
    expect(wrapper).toContainMatchingElements(2, "button");
  });

  test("calls onIncrementClick handler when button clicked", () => {
    const wrapper = shallow(
      <Counter
        count={0}
        onIncrementClick={handleIncrementClick}
        onDecrementClick={handleDecrementClick}
      />
    );
    wrapper.find("#increment").simulate("click");
    expect(handleIncrementClick).toHaveBeenCalled();
  });

  test("calls onDecrementClick handler when button clicked", () => {
    const wrapper = shallow(
      <Counter
        count={0}
        onIncrementClick={handleIncrementClick}
        onDecrementClick={handleDecrementClick}
      />
    );
    wrapper.find("#decrement").simulate("click");
    expect(handleDecrementClick).toHaveBeenCalled();
  });
});

describe("ConnectedCounter", () => {
  const mockStore = configureStore();

  test("maps count from state to prop", () => {
    const store = mockStore({ count: 42 });
    const wrapper = shallow(<ConnectedCounter store={store} />);
    expect(wrapper.find(Counter)).toHaveProp("count", 42);
  });

  test("maps onIncrementClick prop to INCREMENT_COUNT dispatch", () => {
    const store = mockStore({ count: 0 });
    const wrapper = shallow(<ConnectedCounter store={store} />);
    wrapper.find(Counter).props().onIncrementClick();
    expect(store.getActions()).toEqual([incrementCount()]);
  });

  test("maps onDecrementClick prop to DECREMENT_COUNT dispatch", () => {
    const store = mockStore({ count: 0 });
    const wrapper = shallow(<ConnectedCounter store={store} />);
    wrapper.find(Counter).props().onDecrementClick();
    expect(store.getActions()).toEqual([decrementCount()]);
  });
});

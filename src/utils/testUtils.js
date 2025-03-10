/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from "prop-types";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { setupStore } from "../app/redux/store";

export function renderWithProviders(
  ui,
  {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = setupStore(preloadedState),
    ...renderOptions
  } = {}
) {
  const Wrapper = ({ children }) => {
    return <Provider store={store}>{children}</Provider>;
  };

  Wrapper.propTypes = {
    children: PropTypes.node,
  };

  // Return an object with the store and all of RTL's query functions
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}

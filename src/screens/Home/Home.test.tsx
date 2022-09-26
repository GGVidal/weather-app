import React from "react";
import TestRenderer from "react-test-renderer";
import { render, fireEvent, act } from "@testing-library/react-native";
import "@testing-library/jest-dom";

import { Home } from "./Home";

jest.mock("expo-location", () => ({
  requestForegroundPermissionsAsync: () => jest.fn(),
}));

jest.mock("expo-linear-gradient", () => ({
  LinearGradient: () => {},
}));

jest.mock("@react-navigation/native", () => {
  const actualNav = jest.requireActual("@react-navigation/native");
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: jest.fn(),
    }),
  };
});
describe("renders correctly", () => {
  it("Render home", () => {
    const renderer = render(<Home />);
    expect(renderer).toMatchSnapshot();
  });

  // it("Click iniciar", async () => {
  //   const { getByTestId } = render(<Home />);
  //   const beginButton = getByTestId("button-permission");
  //   fireEvent.press(beginButton);
  // });
});

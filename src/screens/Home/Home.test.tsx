import React from "react";
import { render } from "@testing-library/react-native";
import "@testing-library/jest-dom";

import { Home } from "./Home";

jest.mock("expo-location", () => ({
  requestForegroundPermissionsAsync: () => jest.fn(),
}));

jest.mock("expo-linear-gradient", () => ({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
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
});

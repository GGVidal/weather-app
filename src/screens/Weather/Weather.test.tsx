import React from "react";
import { render } from "@testing-library/react-native";
import "@testing-library/jest-dom";

import { Weather } from "./Weather";
import { useForegroundPermissions } from "expo-location";

jest.mock("expo-location", () => ({
  LocationGeocodedAddress: {},
  LocationObject: {},
  getCurrentPositionAsync: jest.fn(),
  reverseGeocodeAsync: jest.fn(),
  useForegroundPermissions: jest.fn(),
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
      setOptions: jest.fn(),
    }),
  };
});
const mockedUseForegroundPermissionJestMock =
  useForegroundPermissions as jest.Mock;

describe("renders correctly", () => {
  it("Render Weather", () => {
    mockedUseForegroundPermissionJestMock.mockImplementation(() => [
      { status: null, requestPermission: jest.fn() },
    ]);
    const renderer = render(<Weather />);
    expect(renderer).toMatchSnapshot();
  });

  it("Click iniciar", async () => {
    mockedUseForegroundPermissionJestMock.mockImplementation(() => {
      const permissionObj = {
        requestPermission: () => ({
          granted: true,
        }),
      };
      return ["", permissionObj];
    });
    // this is kind of ugly, but it works.
    const renderer = render(<Weather />);
    expect(renderer).toMatchSnapshot();
  });
});

import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import TestRenderer from "react-test-renderer";

import { Button } from "../Button/Button";
import { Text } from "../Text";

describe("renders correctly", () => {
  it("works", () => {
    const renderer = TestRenderer.create(
      <Button onPress={() => console.log("gg")} />
    );
    expect(renderer).toMatchSnapshot();
  });
});

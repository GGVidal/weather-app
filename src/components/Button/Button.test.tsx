import React from "react";
import TestRenderer from "react-test-renderer";

import { Button } from "../Button";

describe("renders correctly", () => {
  it("works", () => {
    const renderer = TestRenderer.create(
      <Button onPress={() => console.log("gg")} />
    );
    expect(renderer).toMatchSnapshot();
  });
});

import React from "react";
import TestRenderer from "react-test-renderer";

import { FAB } from "../FAB";

describe("renders correctly", () => {
  it("works", () => {
    const renderer = TestRenderer.create(
      <FAB onPress={() => console.log("gg")} />
    );
    expect(renderer).toMatchSnapshot();
  });
});

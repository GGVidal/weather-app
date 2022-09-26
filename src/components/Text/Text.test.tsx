import React from "react";
import TestRenderer from "react-test-renderer";

import { Text } from "../Text";

describe("renders correctly", () => {
  it("works", () => {
    const renderer = TestRenderer.create(
      <Text fontSize={"10px"} color={"red"} fontWeight={"300"}>
        My text
      </Text>
    );
    expect(renderer).toMatchSnapshot();
  });
});

import React from "react";
import TestRenderer from "react-test-renderer";

import { Map } from "../Map";

describe("renders correctly", () => {
  it("works", () => {
    const renderer = TestRenderer.create(
      <Map
        latitude={0}
        longitude={0}
        address={{
          city: null,
          district: null,
          streetNumber: null,
          street: null,
          region: null,
          subregion: null,
          country: null,
          postalCode: null,
          name: null,
          isoCountryCode: null,
          timezone: null,
        }}
      />
    );
    expect(renderer).toMatchSnapshot();
  });
});

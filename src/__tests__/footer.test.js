import React from "react";
import { createRenderer } from "react-test-renderer/shallow";
import Footer from "../footer";

describe("Footer", () => {
  let renderer;

  beforeEach(() => {
    renderer = createRenderer();
  });

  it("should render correctly", () => {
    renderer.render(<Footer siteTitle="Test" />);
    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });

  it("should render default props correctly", () => {
    renderer.render(<Footer />);
    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });
});

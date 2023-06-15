import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Grid from "@components/Grid";

describe("Grid", () => {
  it("renders the title and children correctly", () => {
    const title = "My Grid";
    const child1 = <div>Child 1</div>;
    const child2 = <div>Child 2</div>;
    const mockClassName = "mock-class"; // Replace with your mock class name

    const { getByText, container } = render(
      <Grid title={title} className={mockClassName}>
        {" "}
        {/* Pass the mock class name via the className prop */}
        {child1}
        {child2}
      </Grid>
    );

    const titleElement = getByText(title);
    const child1Element = getByText("Child 1");
    const child2Element = getByText("Child 2");

    expect(titleElement).toBeInTheDocument();
    expect(child1Element).toBeInTheDocument();
    expect(child2Element).toBeInTheDocument();

    const gridContainer = container.firstChild; // Get the first child of the rendered container (the top-level div)
    expect(gridContainer).toHaveClass(mockClassName); // Use the mock class name in the assertion
  });
});

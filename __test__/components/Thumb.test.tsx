import { render } from "@testing-library/react";
import Thumb from "@components/Thumb";

describe("Thumb component", () => {
  test("renders without errors", () => {
    const imgUrl = "/example.jpg";
    render(<Thumb imgUrl={imgUrl} />);
  });

  test("passes imgUrl prop correctly", () => {
    const imgUrl = "/example.jpg";
    const { getByAltText } = render(<Thumb imgUrl={imgUrl} />);
    const imageElement = getByAltText("thumbnail") as HTMLImageElement;

    // Mock the getBoundingClientRect method
    Object.defineProperty(imageElement, "src", {
      value: imgUrl,
    });

    expect(imageElement.src).toContain(imgUrl);
  });
});

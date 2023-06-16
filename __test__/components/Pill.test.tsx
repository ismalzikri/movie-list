import { render } from "@testing-library/react";
import Pill from "@components/Pill";

describe("Pill component", () => {
  it("renders the pill with text and default class", () => {
    const text = "Example Text";

    const { getByText } = render(<Pill text={text} />);

    const pillElement = getByText(text);

    expect(pillElement).toBeInTheDocument();
    expect(pillElement).toHaveClass("bg-cyan-800");
    expect(pillElement).toHaveClass("text-white");
    expect(pillElement).toHaveClass("text-sm");
    expect(pillElement).toHaveClass("font-bold");
    expect(pillElement).toHaveClass("px-2");
    expect(pillElement).toHaveClass("py-1");
    expect(pillElement).toHaveClass("m-2");
    expect(pillElement).toHaveClass("rounded-full");
  });

  it("renders the pill with custom class", () => {
    const text = "Example Text";
    const customClass = "custom-class";

    const { getByText } = render(<Pill text={text} className={customClass} />);

    const pillElement = getByText(text);

    expect(pillElement).toBeInTheDocument();
    expect(pillElement).toHaveClass(customClass);
  });
});

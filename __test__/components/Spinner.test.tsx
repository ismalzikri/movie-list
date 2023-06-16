import { render } from "@testing-library/react";
import Spinner from "@components/Spinner";

describe("Spinner component", () => {
  it("should render the spinner", () => {
    render(<Spinner />);

    const spinnerElement = document.querySelector(".animate-spin");
    const pathElement = document.querySelector("path");

    expect(spinnerElement).toBeInTheDocument();
    expect(pathElement).toBeInTheDocument();
  });
});

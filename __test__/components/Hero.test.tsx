import { render, screen } from "@testing-library/react";
import Hero from "@components/Hero";
import Image from "next/image";

jest.mock("next/image", () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe("Hero", () => {
  const props = {
    imgUrl: "image-url",
    title: "Test Title",
    text: "Test Text",
  };

  beforeEach(() => {
    (Image as jest.Mock).mockReturnValue(<img alt="hero-image" />);
  });

  it("renders the component with correct title and text", () => {
    render(<Hero {...props} />);

    const titleElement = screen.getByText(props.title);
    const textElement = screen.getByText(props.text);

    expect(titleElement).toBeInTheDocument();
    expect(textElement).toBeInTheDocument();
  });

  it("renders the image with correct alt attribute", () => {
    render(<Hero {...props} />);

    const imageElement = screen.getByAltText("hero-image");

    expect(imageElement).toBeInTheDocument();
  });
});

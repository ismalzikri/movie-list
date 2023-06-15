import { render, screen } from "@testing-library/react";
import Header from "@components/Header";

describe("Header component", () => {
  test("renders logo correctly", () => {
    render(<Header />);

    const logoElement = screen.getByAltText("rmdb-logo");
    expect(logoElement).toBeInTheDocument();
  });

  test("renders search input correctly", () => {
    const setQueryMock = jest.fn();
    render(<Header setQuery={setQueryMock} />);

    const searchInput = screen.getByTestId("search-input");
    expect(searchInput).toBeInTheDocument();
  });

  test("does not render search input if setQuery prop is not provided", () => {
    render(<Header />);

    const searchInput = screen.queryByPlaceholderText("Search");
    expect(searchInput).not.toBeInTheDocument();
  });
});

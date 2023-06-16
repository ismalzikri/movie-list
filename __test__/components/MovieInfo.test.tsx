import { render } from "@testing-library/react";
import MovieInfo from "@components/MovieInfo";

describe("MovieInfo", () => {
  it("renders correctly with provided props", () => {
    const mockProps = {
      title: "Movie Title",
      year: "2022",
      summary: "Movie summary",
      rating: 8.5,
      directors: [{ job: "Director", name: "John Doe", credit_id: 123 }],
      time: 120,
      budget: 10000000,
      revenue: 50000000,
      thumbUrl: "https://example.com/thumb.jpg", // Replace with valid thumb URL
      backgroundImgUrl: "https://example.com/background.jpg", // Replace with valid background URL
    };

    const { getByText } = render(<MovieInfo {...mockProps} />);

    expect(getByText("Movie Title (2022)")).toBeInTheDocument();
    expect(getByText("Summary")).toBeInTheDocument();
  });
});

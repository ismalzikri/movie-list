import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import SearchInput from "@components/SearchInput";

describe("SearchInput", () => {
  it("should update query on input change", async () => {
    const setQueryMock = jest.fn();

    render(<SearchInput setQuery={setQueryMock} />);

    const inputElement = screen.getByPlaceholderText("Search Movie");

    fireEvent.change(inputElement, { target: { value: "Avengers" } });

    // Wait for debounce timeout
    await waitFor(() => {
      expect(setQueryMock).toHaveBeenCalledTimes(1);
      expect(setQueryMock).toHaveBeenCalledWith("Avengers");
    });
  });
});

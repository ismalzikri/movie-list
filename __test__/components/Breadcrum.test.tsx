import { render, screen } from "@testing-library/react";
import Breadcrumb from "@components/Breadcrumb";

jest.mock("next/router", () => ({
  useRouter: () => ({
    pathname: "/",
  }),
}));

describe("Breadcrumb", () => {
  it("renders the correct title and home link", () => {
    const title = "Example Page";

    render(<Breadcrumb title={title} />);

    const homeLink = screen.getByText("Home");
    const pageTitle = screen.getByText(title);

    expect(homeLink).toBeInTheDocument();
    expect(pageTitle).toBeInTheDocument();
  });
});

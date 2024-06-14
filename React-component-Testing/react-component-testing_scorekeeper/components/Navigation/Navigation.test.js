import { render, screen } from "@testing-library/react";
import Navigation from ".";

jest.mock("next/router", () => ({
  useRouter() {
    return { pathname: jest.fn() };
  },
}));

test("renders with two links 'Play' and 'History'", () => {
  render(
    <Navigation
      players={[
        { name: "John", score: 2, id: "xyz" },
        { name: "Jane", score: 1, id: "abc" },
      ]}
    />
  );

  const playLink = screen.getByRole("link", { name: /Play/i });
  const historyLink = screen.getByRole("link", { name: /History/i });

  expect(playLink).toBeInTheDocument();
  expect(historyLink).toBeInTheDocument();
});

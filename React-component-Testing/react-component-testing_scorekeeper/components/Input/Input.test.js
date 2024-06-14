import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from ".";

test("renders a label and an input with the correct attributes", () => {
  render(
    <Input
      name="nameOfGame"
      labelText="Name of game"
      placeholder="e.g. Dodelido"
    />
  );
  const inputLabel = screen.getByLabelText("Name of game");
  expect(inputLabel).toBeInTheDocument();

  const inputElement = screen.getByPlaceholderText("e.g. Dodelido");
  expect(inputElement).toBeInTheDocument();
  expect(inputElement).toHaveAttribute("name", "nameOfGame");
});

test("calls callback on every user input", async () => {
  const handleInputChange = jest.fn();
  render(
    <Input
      name="nameOfGame"
      labelText="Name of game"
      placeholder="e.g. Dodelido"
      onChange={handleInputChange}
    />
  );
  const user = userEvent.setup();
  const inputElement = screen.getByPlaceholderText("e.g. Dodelido");
  await user.type(inputElement, "The Matrix");
  expect(handleInputChange).toHaveBeenCalledTimes("The Matrix".length);

  "The Matrix".split("").forEach((char, index) => {
    expect(handleInputChange).toHaveBeenNthCalledWith(
      index + 1,
      expect.anything()
    );
  });
});

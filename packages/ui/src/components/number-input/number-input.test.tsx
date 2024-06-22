import { afterEach, beforeEach, describe, expect, it } from "bun:test";
import { cleanup, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";

import { render } from "~/test";
import { NumberInput } from ".";

afterEach(cleanup);

beforeEach(() => {
  render(<NumberInput />);
});

describe("Number Input", () => {
  it("default number input variant is rendered", () => {
    const numberInput = screen.getByRole("spinbutton");

    expect(numberInput.classList).toContain("numberInput__input--size_md");
  });

  it("increments value", async () => {
    const numberInput = screen.getByRole("spinbutton");

    const incrementButton = screen.getByLabelText("increment value");

    await userEvent.click(incrementButton);

    expect(numberInput).toHaveProperty("value", "1");
  });

  it("decreases value", async () => {
    const numberInput = screen.getByRole("spinbutton");

    const decrementButton = screen.getByLabelText("decrease value");

    await userEvent.click(decrementButton);

    expect(numberInput).toHaveProperty("value", "-1");
  });
});

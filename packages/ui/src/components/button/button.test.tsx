import { afterEach, describe, expect, it, jest } from "bun:test";
import { cleanup, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";

import render from "~/test/render";
import { Button } from ".";

afterEach(() => {
  cleanup();
});

describe("Button", () => {
  it("default button variant is rendered", () => {
    render(<Button>Testing</Button>);

    const button = screen.getByText("Testing");

    expect(button.classList).toContain("button--variant_solid");
  });

  it("onClick gets called", async () => {
    const onClick = jest.fn();

    render(<Button onClick={onClick}>Testing</Button>);

    const button = screen.getByText("Testing");

    await userEvent.click(button);

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("asChild prop renders child only", async () => {
    render(
      <Button asChild>
        <p>Testing</p>
      </Button>,
    );

    const button = screen.queryByRole("button");

    expect(button).toBeNull();
  });
});

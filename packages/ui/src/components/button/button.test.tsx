import { afterEach, beforeEach, describe, expect, it, jest } from "bun:test";
import { cleanup, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";

import { render } from "~/test";
import { Button } from ".";

const onClick = jest.fn();

afterEach(() => {
  cleanup();
});

beforeEach(() => {
  render(<Button onClick={onClick}>Testing</Button>);
});

describe("Button", () => {
  it("default button variant is rendered", () => {
    const button = screen.getByText("Testing");

    expect(button.classList).toContain("button--variant_solid");
  });

  it("onClick gets called", async () => {
    const button = screen.getByText("Testing");

    await userEvent.click(button);

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("asChild prop renders child only", async () => {
    render(
      <Button asChild>
        <p>As Child</p>
      </Button>,
    );

    const buttons = screen.getAllByRole("button");

    expect(buttons).toHaveLength(1);
  });
});

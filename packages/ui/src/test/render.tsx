import { render as rtlRender } from "@testing-library/react";

import type { RenderOptions } from "@testing-library/react";
import type { ReactElement } from "react";

const render = (ui: ReactElement, options?: RenderOptions) =>
  rtlRender(ui, { ...options });

export default render;

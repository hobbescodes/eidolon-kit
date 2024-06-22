import { expect } from "bun:test";
import { GlobalRegistrator } from "@happy-dom/global-registrator";
import * as rtlDomMatchers from "@testing-library/jest-dom/matchers";

import type { ExpectExtendMatchers } from "bun:test";
import type { TestingLibraryMatchers } from "@testing-library/jest-dom/matchers";

declare module "bun:test" {
  interface Matchers<T> extends TestingLibraryMatchers<typeof expect, T> {}
}

expect.extend(rtlDomMatchers as unknown as ExpectExtendMatchers<typeof expect>);

GlobalRegistrator.register();

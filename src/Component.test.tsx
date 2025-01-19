import { describe, expect, it } from "vitest";
import { render } from "jsx-framework-of-the-day";
import { Component } from "./Component.js";

describe("render", () => {
    it("renders JSX element into DOM node", () => {
        const node = render(<Component />);
        expect(node.outerHTML).toBe("<div></div>");
    });
});

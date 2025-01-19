import { describe, expect, it } from "vitest";
import { render } from "jsx-framework-of-the-day";

describe("render", () => {
    it("renders JSX element into DOM node", () => {
        function Test() {
            return <div></div>;
        }
        const node = render(<Test />);
        expect(node.outerHTML).toBe("<div></div>");
    });
});

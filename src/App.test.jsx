import { describe, it, expect, beforeAll } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

// Le Hero et CustomCursor utilisent Framer Motion + localStorage.
// On neutralise le SSR/HMR et les observers déjà mockés dans setupTests.
describe("App", () => {
  it("renders the hero headline", () => {
    render(<App />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeInTheDocument();
  });
});

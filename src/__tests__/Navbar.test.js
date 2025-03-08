import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom"; // ✅ Ensures routing works in tests
import Navbar from "../components/Navbar"; 

test("renders Navbar with Home link", () => {
  render(
    <MemoryRouter> {/* ✅ Wrap Navbar with MemoryRouter */}
      <Navbar />
    </MemoryRouter>
  );

  expect(screen.getByText(/NY Times Articles/i)).toBeInTheDocument();
  expect(screen.getByText(/Home/i)).toBeInTheDocument();
});

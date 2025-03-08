import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom"; 
import Navbar from "../components/Navbar"; 

test("renders Navbar with Home link", () => {
  render(
    <MemoryRouter> 
      <Navbar />
    </MemoryRouter>
  );

  expect(screen.getByText(/NY Times Articles/i)).toBeInTheDocument();
  expect(screen.getByText(/Home/i)).toBeInTheDocument();
});

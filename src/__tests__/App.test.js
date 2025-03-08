import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import axios from "axios";
import App from "../App";

jest.mock("axios"); // ✅ Mock axios to prevent real API requests

beforeEach(() => {
  jest.clearAllMocks(); // ✅ Reset mock calls before each test
});

test("renders Navbar and shows loading state", async () => {
  axios.get.mockResolvedValueOnce({ data: { results: [] } }); // ✅ Mock API response

  render(
      <App />
  );

  // Navbar should be present
  expect(screen.getByText(/NY Times Articles/i)).toBeInTheDocument();
  expect(screen.getByText(/Home/i)).toBeInTheDocument();

  // Check for loading state
  expect(screen.getByText(/Loading.../i)).toBeInTheDocument();

  // Wait for API response and check if loading disappears
  await waitFor(() => {
    expect(screen.queryByText(/Loading.../i)).not.toBeInTheDocument();
  });
});

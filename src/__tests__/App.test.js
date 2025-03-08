import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import axios from "axios";
import App from "../App";

jest.mock("axios"); 
beforeEach(() => {
  jest.clearAllMocks(); 
});

test("renders Navbar and shows loading state", async () => {
  axios.get.mockResolvedValueOnce({ data: { results: [] } }); 

  render(
      <App />
  );

  expect(screen.getByText(/NY Times Articles/i)).toBeInTheDocument();
  expect(screen.getByText(/Home/i)).toBeInTheDocument();

  expect(screen.getByText(/Loading.../i)).toBeInTheDocument();

  await waitFor(() => {
    expect(screen.queryByText(/Loading.../i)).not.toBeInTheDocument();
  });
});

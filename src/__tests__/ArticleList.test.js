import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ArticleList from "../components/ArticleList";

const mockArticles = [
  { id: 1, title: "Test Article 1", abstract: "Summary of Article 1" },
  { id: 2, title: "Test Article 2", abstract: "Summary of Article 2" },
];

test("renders list of articles", () => {
  render(
    <MemoryRouter>
      <ArticleList articles={mockArticles} />
    </MemoryRouter>
  );

  expect(screen.getByText(/Test Article 1/i)).toBeInTheDocument();
  expect(screen.getByText(/Test Article 2/i)).toBeInTheDocument();
});

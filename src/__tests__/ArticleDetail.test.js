import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import ArticleDetail from "../components/ArticleDetail";

const mockArticles = [
  { id: 1, title: "Test Article 1", abstract: "Summary of Article 1", url: "https://example.com" },
];

test("renders article details", () => {
  render(
    <MemoryRouter initialEntries={["/article/1"]}>
      <Routes>
        <Route path="/article/:id" element={<ArticleDetail articles={mockArticles} />} />
      </Routes>
    </MemoryRouter>
  );

  expect(screen.getByText(/Test Article 1/i)).toBeInTheDocument();
  expect(screen.getByText(/Summary of Article 1/i)).toBeInTheDocument();
  expect(screen.getByText(/Read Full Article/i)).toBeInTheDocument();
});

describe("NY Times Articles App", () => {
  beforeEach(() => {
    cy.intercept("GET", "https://api.nytimes.com/svc/mostpopular/v2/viewed/30.json*", {
      fixture: "articles.json", // Mock API response
    }).as("getArticles");

    // cy.visit("/");
    cy.visit("http://localhost:3001/");

  });

  it("should display the navbar", () => {
    cy.get("nav").should("be.visible");
  });

  it("should load articles", () => {
    cy.wait("@getArticles"); // Wait for API to respond
    cy.get(".article-item").should("have.length.greaterThan", 0); // Check if articles are displayed
  });

  it("should navigate to an article detail page", () => {
    cy.wait("@getArticles");
    cy.get(".article-item").first().click();
    cy.url().should("include", "/article/");
    cy.get(".article-detail").should("be.visible");
  });

  it("should handle API errors", () => {
    cy.intercept("GET", "https://api.nytimes.com/svc/mostpopular/v2/viewed/30.json*", {
      statusCode: 500,
    }).as("getArticlesError");

    cy.visit("/");
    cy.wait("@getArticlesError");
    cy.get(".error").should("contain", "Error");
  });
});

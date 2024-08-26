describe("Login Functionality", () => {
  beforeAll(() => {
    // Clear cookies and local storage to ensure a fresh start
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.visit("/login");
  });

  it("should login and navigate to home with session", () => {
    // Mock session for testing
    const mockSession = {
      user: {
        email: "natnael.meseret@a2sv.org",
        name: "Natnael Meseret",
        image: "https://example.com/profile.jpg",
      },
      expires: "2024-12-31T23:59:59.999Z",
    };

    cy.intercept("GET", "/api/auth/session", mockSession).as("getSession");

    // Fill out the login form
    cy.get('[data-inp="email"]').type(mockSession.user.email);
    cy.get('[data-inp="password"]').type("123456y");
    cy.get('[data-btn="login"]').click();

    cy.wait("@getSession", { timeout: 3000 });

    cy.visit("/");

    cy.get('[data-testid="dispatch-job-data"]').should("exist");
    cy.get('[data-form="form"]').should("not.exist");

    // Optionally check that the navbar contains user info
    cy.get('[data-header="header"]').should(
      "contain",
      mockSession.user.name.split(" ")[0]
    );
  });
});

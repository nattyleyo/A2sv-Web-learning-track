import mockBookmarkData from "../../__mock__/mockBookmark";
import mockJobData from "../../__mock__/mockJobData";
describe("Login Functionality", () => {
  beforeEach(() => {
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
describe("Bookmark Functionality", () => {
  const mockSession = {
    user: {
      email: "natnael.meseret@a2sv.org",
      name: "Natnael Meseret",
      image: "https://example.com/profile.jpg",
    },
    expires: "2024-12-31T23:59:59.999Z",
  };

  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.visit("/login");

    cy.intercept("GET", "/api/auth/session", { body: mockSession }).as(
      "getSession"
    );
    cy.intercept("GET", "../../app/api/bookmarks", {
      body: mockBookmarkData,
    }).as("getBookmarks");
    cy.intercept("GET", "/api/jobs", { body: mockJobData }).as("getJobs");

    // Log in the user
    cy.get('[data-inp="email"]').type(mockSession.user.email);
    cy.get('[data-inp="password"]').type("123456y");
    cy.get('[data-btn="login"]').click();

    cy.wait("@getSession", { timeout: 3000 });

    cy.visit("/");

    // Ensure the user is logged in
    cy.get('[data-header="header"]').should(
      "contain",
      mockSession.user.name.split(" ")[0]
    );
    // cy.wait("@getBookmarks", { timeout: 20000 });
  });

  it("should bookmark icon add and remove jobs to bookmark by toggle", () => {
    // Click the first bookmark icon and check its class
    cy.get('[data-testid="bookmark-icon"]').first().click();
    cy.get('[data-testid="bookmark-icon"]')
      .first()
      .should("have.class", "faBookmarkSolid");

    // Click the second bookmark icon and check its class
    cy.get('[data-testid="bookmark-icon"]').first().click(); // Use .eq(1) to select the second element
    cy.get('[data-testid="bookmark-icon"]')
      .first() // Use .eq(1) here as well
      .should("have.class", "faBookmarkRegular");
  });

  it("should bookmark page display all bookmark items ", () => {
    // Check if each bookmark item is displayed
    cy.get('[data-job-card^="job-card"]').each(($el) => {
      cy.wrap($el).should("be.visible");
    });
  });

  // it("should bookmark icon remove jobs from bookmark", () => {
  //   cy.get("[data-book='bookmark-link']").click();
  //   cy.visit("/bookmark");

  //   cy.wait("@getBookmarks");

  //   cy.get('[data-testid="bookmark-icon"]', { timeout: 5000 }).eq(1).click();

  //   cy.intercept("GET", "/api/bookmarks", { body: [] }).as("getBookmarks"); // Mock an empty bookmarks response

  //   // Now check if the bookmark list is empty
  //   cy.get('[data-testid="bookmark-icon"]').should("have.length", 1);
  // });
});

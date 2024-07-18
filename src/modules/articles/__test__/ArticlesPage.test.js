import { renderWithProviders } from "../../..//utils/testUtils";
import { MemoryRouter } from "react-router-dom";
import ArticlesPage from "../views/ArticlesPage";
import { preloadState } from "../../../utils/articleResponse";
import { screen, waitFor } from "@testing-library/react";

describe("Article List", () => {
  it("should render component", () => {
    renderWithProviders(
      <MemoryRouter>
        <ArticlesPage />
      </MemoryRouter>,
      preloadState
    );
    const heading1 = screen.getByText(/Articles/i);
    expect(heading1).toBeInTheDocument();
  });
  it("renders articles", async () => {
    renderWithProviders(
      <MemoryRouter>
        <ArticlesPage />
      </MemoryRouter>,
      preloadState
    );

    await waitFor(() => {
      expect(screen.getByText("Articles")).toBeInTheDocument();
      expect(screen.getAllByRole("heading")).toHaveLength(4); // Assuming each article has a title
    });
  });
});

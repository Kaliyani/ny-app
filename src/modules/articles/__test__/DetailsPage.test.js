import React from "react";
import { render, waitFor } from "@testing-library/react";
// import { renderWithProviders } from "../../..//utils/testUtils";
// import { MemoryRouter } from "react-router-dom";
// import { preloadState } from "../../../utils/sampleResponse";

import { useParams, useLocation } from "react-router";
import DetailsPage from "../views/DetailsPage";

jest.mock("react-router", () => ({
  useParams: jest.fn(),
  useLocation: jest.fn(),
}));

describe("DetailsPage", () => {
  beforeEach(() => {
    useParams.mockReturnValue({ id: "1" });
    useLocation.mockReturnValue({
      state: {
        article: {
          id: 1,
          title: "Test Title",
          published_date: "2022-01-01",
          byline: "Test Author",
          per_facet: ["first", "second"],
          section: "test section",
          subsection: "test subsection",
        },
      },
    });
  });

  test("renders article details", async () => {
    const { getByText } = render(<DetailsPage />);

    await waitFor(() => {
      expect(getByText("Test Title")).toBeInTheDocument();
      expect(getByText("Published Date: 2022-01-01")).toBeInTheDocument();
      expect(getByText("Test Author")).toBeInTheDocument();
      expect(getByText("Section : test section")).toBeInTheDocument();
      expect(getByText("Sub-section : test subsection")).toBeInTheDocument();
      expect(getByText("Postulates")).toBeInTheDocument();
      expect(getByText("first")).toBeInTheDocument();
      expect(getByText("second")).toBeInTheDocument();
    });
  });
});

import { render } from "@testing-library/react";
import { renderWithProviders } from "../../..//utils/testUtils";
import { commonState } from "../../../utils/commonResponse";
import Loader from "../Loader";

describe("Loader", () => {
  test("renders the loader component with correct content", () => {
    const { getByText } = renderWithProviders(<Loader />, commonState);
    const loadingTextElement = getByText("Loading...");
    expect(loadingTextElement).toBeInTheDocument();
  });

  test("renders the loader component with correct styles", () => {
    const { container } = renderWithProviders(<Loader />, commonState);
    const backdropElement = container.firstChild;
    expect(backdropElement).toBeInTheDocument();
  });

  test("renders the loader component with circular progress", () => {
    const { getByTestId } = renderWithProviders(<Loader />, commonState);
    const circularProgressElement = getByTestId("circular-progress");
    expect(circularProgressElement).toBeInTheDocument();
  });
});

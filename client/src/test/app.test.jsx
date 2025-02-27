import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Home from "../pages/Home";
import Quiz from "../pages/Quiz";
import QuizPage from "../pages/QuizPage";
import { describe } from "vitest";

describe("Home", () => {
  it("renders the home page text begin journey", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    expect(screen.getByText("Begin Journey")).toBeInTheDocument();
  });
});

describe("Home", () => {
  it("renders the home page logo", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    const logo = screen.getByAltText("lrnr website logo");

    expect(logo).toBeInTheDocument();
  });
});

describe("Quiz", () => {
  it("renders the quiz page text quiz generation options", () => {
    render(
      <MemoryRouter>
        <Quiz />
      </MemoryRouter>
    );
    expect(screen.getByText("Quiz Generation Options")).toBeInTheDocument();
  });
});

describe("QuizPage", () => {
  it("displays an error message if the user submits an empty answer", () => {
    render(
      <MemoryRouter>
        <QuizPage />
      </MemoryRouter>
    );

    const submitButton = screen.getByText("SUBMIT ANSWER");
    fireEvent.click(submitButton);

    expect(
      screen.getByText("⚠️ Please enter an answer before submitting.")
    ).toBeInTheDocument();
  });
});


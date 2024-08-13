import React from "react";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import JobList from "@/app/components/Jobs/JobList";
import { useSession } from "next-auth/react";
import { useAppSelector } from "../../../../app/redux/store/store";
import userEvent from "@testing-library/user-event";
import mockJobData from "@/__mock__/mockJobData";
import mockSessionData from "@/__mock__/mockSession";
import mockBookmarkData from "@/__mock__/mockBookmark";
import bookmarks, { getBookmarks } from "../../../../app/api/bookmarks";
import { act } from "@testing-library/react";

jest.mock("next-auth/react", () => ({
  useSession: jest.fn(),
}));

jest.mock("../../../../app/redux/store/store", () => ({
  useAppSelector: jest.fn(),
}));

jest.mock("../../../../app/api/bookmarks", () => ({
  getBookmarks: jest.fn(),
  BookmarkCrud: jest.fn(),
}));

describe("JobList Component", () => {
  beforeEach(() => {
    (useSession as jest.Mock).mockReturnValue(mockSessionData);
    (useAppSelector as jest.Mock).mockReturnValue(mockJobData);
    (getBookmarks as jest.Mock).mockReturnValue(mockBookmarkData);

    jest.clearAllMocks();
  });

  test("renders JobList and displays job titles", async () => {
    await act(async () => {
      render(<JobList />);
    });

    expect(screen.getByText("Job Title 1")).toBeInTheDocument();
    expect(screen.getByText("Job Title 2")).toBeInTheDocument();
  });

  test("displays No jobs card", async () => {
    (useAppSelector as jest.Mock).mockReturnValue([]);
    await act(async () => {
      render(<JobList />);
    });

    expect(screen.getByText("No jobs found.")).toBeInTheDocument();
  });
  test("toggles bookmark icon on click using userEvent", async () => {
    await act(async () => {
      render(<JobList />);
    });

    const bookmarkIcons = screen.getAllByTestId("bookmark-icon");
    expect(bookmarkIcons[1]).toHaveClass("faBookmarkSolid");
    await userEvent.click(bookmarkIcons[1]);
    expect(bookmarkIcons[1]).toHaveClass("faBookmarkRegular");
    await userEvent.click(bookmarkIcons[1]);
    expect(bookmarkIcons[1]).toHaveClass("faBookmarkSolid");
  });
});

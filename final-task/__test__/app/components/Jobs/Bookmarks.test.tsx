import React from "react";
import { render, screen, act, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Bookmark from "../../../../app/components/Jobs/Bookmarks";
import { useSession } from "next-auth/react";
import { useAppSelector } from "../../../../app/redux/store/store";
import mockJobData from "@/__mock__/mockJobData";
import mockSessionData from "@/__mock__/mockSession";
import mockBookmarkData from "@/__mock__/mockBookmark";
import { getBookmarks, BookmarkCrud } from "../../../../app/api/bookmarks";
import userEvent from "@testing-library/user-event";

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

describe("Bookmarks Component", () => {
  beforeEach(() => {
    (useSession as jest.Mock).mockReturnValue(mockSessionData);
    (useAppSelector as jest.Mock).mockReturnValue(mockJobData);
    (getBookmarks as jest.Mock).mockReturnValue(mockBookmarkData);

    jest.clearAllMocks();
  });

  test("renders bookmarked jobs", async () => {
    await act(async () => {
      render(<Bookmark />);
    });

    expect(screen.getByText("Job Title 1")).toBeInTheDocument();
    expect(screen.getByText("Job Title 2")).toBeInTheDocument();
  });

  test("displays 'No Bookmark Found' when no jobs are bookmarked", async () => {
    (useAppSelector as jest.Mock).mockReturnValue([]); // Mock empty job data

    await act(async () => {
      render(<Bookmark />);
    });

    expect(screen.getByText("No Bookmark Found")).toBeInTheDocument();
  });

  test("should remove from bookmarks on click using userEvent", async () => {
    await act(async () => {
      render(<Bookmark />);
    });

    const bookmarkIcons = screen.getAllByTestId("bookmark-icon");
    expect(bookmarkIcons[0]).toHaveClass("faBookmarkSolid");
    await userEvent.click(bookmarkIcons[0]);
    expect(bookmarkIcons.length == 1);
  });
});

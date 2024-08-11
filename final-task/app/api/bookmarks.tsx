import React from "react";
export async function BookmarkCrud(
  id: string,
  accessToken: string,
  isBookmark: boolean
) {
  if (accessToken) {
    try {
      const endpoint = `https://akil-backend.onrender.com/bookmarks/${id}`;
      const method = !isBookmark ? "POST" : "DELETE";
      const requestOptions = {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        method,
        body: !isBookmark ? JSON.stringify({}) : null,
      };

      const res = await fetch(endpoint, requestOptions);
      const result = await res.json();
      console.log(result, "gfffffffffffffffffff");
      if (!res.ok) {
        throw new Error(
          `${!isBookmark ? "Adding" : "Removing"} bookmark failed`
        );
      }
      console.log(
        `${!isBookmark ? "Added" : "Removed"} bookmark for job ID: ${id}`
      );
      return res;
    } catch (error) {
      console.error("Error updating bookmark:", error);
    }
  }
}
export async function getBookmarks(accessToken: string) {
  if (accessToken) {
    try {
      const endpoint = `https://akil-backend.onrender.com/bookmarks`;
      const method = "GET";
      const requestOptions = {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        method,
      };

      const res = await fetch(endpoint, requestOptions);
      const { data } = await res.json();
      console.log(data, "get data from bookmarks : ");
      if (!res.ok) {
        throw new Error(`get bookmark failed`);
      }
      return data;
    } catch (error) {
      console.error("Error geting bookmark:", error);
    }
  }
}

const bookmarks = () => {
  return <div>bookmark</div>;
};

export default bookmarks;

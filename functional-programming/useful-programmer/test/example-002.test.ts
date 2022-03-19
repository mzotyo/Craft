import { BrowserWindow } from "../src/example-002";

describe("Example 2", () => {
  test("", () => {
    var workWindow = new BrowserWindow([
      "GMail",
      "Inbox",
      "Work mail",
      "Docs",
      "freeCodeCamp",
    ]);
    var socialWindow = new BrowserWindow([
      "FB",
      "Gitter",
      "Reddit",
      "Twitter",
      "Medium",
    ]);
    var videoWindow = new BrowserWindow([
      "Netflix",
      "Youtube",
      "Vimeo",
      "Vine",
    ]);

    // Now perform the tab opening, closing and other operations
    var finalTabs = socialWindow
      .tabOpen()
      .join(videoWindow.tabClose(2))
      .join(workWindow.tabClose(1).tabOpen());
    expect(finalTabs.tabs).toEqual([
      "FB",
      "Gitter",
      "Reddit",
      "Twitter",
      "Medium",
      "new tab",
      "Netflix",
      "Youtube",
      "Vine",
      "GMail",
      "Work mail",
      "Docs",
      "freeCodeCamp",
      "new tab",
    ]);
  });
});

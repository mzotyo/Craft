// Example of imperative coding style

// The tabs is an array of titles of each site open within the window
export class BrowserWindow {
  public tabs: string[];

  public constructor(tabs: string[]) {
    this.tabs = tabs; // We keep a record of the array inside the object
  }

  // When you join two windows into one window
  public join(otherWindow: BrowserWindow): BrowserWindow {
    this.tabs = this.tabs.concat(otherWindow.tabs);
    return this;
  }

  // When you open a new tab at the end
  public tabOpen(): BrowserWindow {
    this.tabs.push("new tab"); // Let's open a new tab for now
    return this;
  }

  // When you close tab
  public tabClose(index: number): BrowserWindow {
    var tabsBeforeIndex = this.tabs.slice(0, index); // Get the tabs before the index
    var tabsAfterIndex = this.tabs.slice(index + 1); // Get the tabs after the index
    this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Join them together
    return this;
  }
}

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
var videoWindow = new BrowserWindow(["Netflix", "Youtube", "Vimeo", "Vine"]);

var finalTabs = socialWindow
  .tabOpen()
  .join(videoWindow.tabClose(2))
  .join(workWindow.tabClose(1).tabOpen());

console.log(finalTabs.tabs);

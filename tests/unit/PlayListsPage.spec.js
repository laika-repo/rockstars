import PlayListsPage from "@/views/PlayListsPage";
import { mount } from "@vue/test-utils";
import { expect } from "chai";

describe("PlayListsPage", () => {
  let component;

  beforeEach(() => {
    component = mount(PlayListPage, {
      data() {
        return {
          playlists: [
            {
              id: 1,
              name: "sleep"
            },
            {
              id: 2,
              name: "wake"
            },
            {
              id: 3,
              name: "run"
            }
          ]
        };
      }
    });
  });

  it("should render a title", () => {
    expect(component.find("h2").text()).to.contain("all playlists");
  });

  it("should show a list of all playlists", () => {
    expect(component.find(".list > .list-item").dom.text()).to.contain("sleep");
  });
});

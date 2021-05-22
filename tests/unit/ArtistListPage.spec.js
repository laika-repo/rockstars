import ArtistListPage from "@/views/ArtistListPage";
import { mount } from "@vue/test-utils";
import { expect } from "chai";

describe("ArtistListPage", () => {
  let component;

  beforeEach(() => {
    component = mount(ArtistListPage, {
      data() {
        return {
          artists: [
            {
              id: 1,
              name: "henk"
            },
            {
              id: 2,
              name: "dirk"
            },
            {
              id: 3,
              name: "sjaak"
            }
          ]
        };
      }
    });
  });

  it("should render a title", () => {
    expect(component.find("h2").text()).to.contain("Artists");
  });

  it("should show a list of all artists", () => {
    expect(component.find(".list > .list-item").dom.text()).to.contain("henk");
  });
});

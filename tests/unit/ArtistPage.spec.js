import ArtistPage from "@/views/ArtistPage";
import { mount } from "@vue/test-utils";
import { expect } from "chai";

describe("ArtistPage", () => {
  let component;

  beforeEach(() => {
    component = mount(ArtistPage, {
      data() {
        return {
          artists: [],
          songs: [
            [
              {
                id: 1,
                name: "The Reaper",
                artist: "henk"
              },
              {
                id: 1,
                name: "dreaming",
                artist: "bill"
              }
            ]
          ],
          artist: { name: "henk" }
        };
      }
    });
  });

  it("should render a title", () => {
    expect(component.find("h2").text()).to.contain("henk");
  });

  it("should show songs by this artist", () => {
    expect(component.find(".list > .list-item").text()).to.contain("dreaming");
  });

  it("should not show songs by other artist", () => {
    expect(component.find(".list > .list-item").text()).to.not.contain(
      "dreaming"
    );
  });
});

//

import PlayListsPage from "@/views/PlayListsPage";
import { shallowMount } from "@vue/test-utils";
import { expect } from "chai";
import axios from "axios";
var MockAdapter = require("axios-mock-adapter");

const instance = axios.create({
  baseURL: "http://localhost:5000",
  headers: { "Cache-Control": "no-cache" }
});

var mock = new MockAdapter(instance);

describe("PlayListsPage", () => {
  let component;

  console.log(mock);

  afterEach(() => {
    mock.restore();
  });

  beforeEach(() => {
    mock.reset();

    mock
      .onGet("http://localhost:5000/playlists")
      .reply(200, [{ name: "foo" }, { name: "bar" }, { name: "baz" }]);

    component = shallowMount(PlayListsPage);
  });

  it("should render a title", () => {
    expect(true);
  });

  it("should show a list of all playlists", () => {
    expect(component.find(".list > .list-item").dom.text()).to.contain("sleep");
  });
});

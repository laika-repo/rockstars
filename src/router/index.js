import Vue from "vue";
import VueRouter from "vue-router";
import ArtistListPage from "../views/ArtistListPage.vue";
import ArtistPage from "../views/ArtistPage.vue";
import PlayListsPage from "../views/PlayListsPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: ArtistListPage
  },
  {
    path: "/playlists",
    name: "PlayLists",
    component: PlayListsPage
  },
  {
    path: "/artist/:id",
    name: "ArtistPage",
    component: ArtistPage
  }
];

const router = new VueRouter({
  routes
});

export default router;

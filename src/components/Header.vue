<template>
  <header class="bg-[#000] min-h-[35px] sticky top-0 z-[30]">
    <div class="flex items-center justify-between">
      <div
        @click="showSideBar"
        class="logo_title md:flex relative items-center xl:w-[55%] cursor-pointer"
      >
        <p
          :class="{ 'text-[#cc0000]': sideBar }"
          class="text-white hidden sm:hidden md:block uppercase font-['Redemption'] md:text-2xl font-medium xl:w-full hover:text-[#cc0000]"
        >
          red dead redemption 2
        </p>
        <SideBar :side-bar-data="sideBarData" />
      </div>
      <div
        class="order_btn bg-[url('https://www.rockstargames.com/reddeadredemption2/dist/img/global/header/49e3dfcfdb6f28e40cc947fe822f21af.png')] bg-cover bg-center px-10 py-1"
      >
        <router-link
          to="/order"
          class="text text-[#000] cursor-pointer font-bold font-['Redemption'] uppercase hover:text-[#ececec] text-2xl"
          >buy now
        </router-link>
      </div>
    </div>
  </header>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useMainNavStore } from "../store/MainNavStore";
import SideBar from "./SideBar.vue";
import sideBarData from "../data/sideBarData";

const main = useMainNavStore();

const { sideBar } = storeToRefs(main);

const showSideBar = () => {
  sideBar.value = !sideBar.value;
};
</script>

<style scoped>
.logo_title::before {
  display: inline-block;
  vertical-align: top;
  content: "";
  width: 40px;
  height: 40px;
  background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMi4wLjEsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAxNC43NzUgMTIuNjMxIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxNC43NzUgMTIuNjMxOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDojZmZmZmZmO30NCjwvc3R5bGU+DQo8Zz4NCgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNy43NCwyLjQ1N0w2Ljg4NSwyLjUxMWMtMC44NC0wLjAxMi0xLjUwNy0wLjAxOC0yLjAwMi0wLjAxOGMtMC40OTUsMC0wLjk2LDAuMDAzLTEuMzk1LDAuMDA5DQoJCUMzLjA1MiwyLjUwOSwyLjU4LDIuNTE0LDIuMDcsMi41MkMxLjU2LDIuNTI3LDAuODcsMi41MjksMCwyLjUyOWMwLTAuNDIsMC4wMDctMC44NjEsMC4wMjItMS4zMjMNCgkJYzAuMDE1LTAuNDYyLDAuMDUyLTAuODU1LDAuMTEyLTEuMTc5YzAuMjQsMC4wMzYsMC41MSwwLjAzNiwwLjgxLDBjMC4zLTAuMDM2LDAuNjE1LTAuMDM2LDAuOTQ1LDBjMC4yNCwwLDAuNDI3LDAuMDIxLDAuNTYzLDAuMDYzDQoJCWMwLjEzNSwwLjA0MiwwLjMyMiwwLjA2MywwLjU2MywwLjA2M2MwLjMzLDAuMDM2LDAuNjU5LDAuMDQyLDAuOTksMC4wMThjMC4zMy0wLjAyNCwwLjcwNS0wLjAzLDEuMTI1LTAuMDE4DQoJCUM1LjcsMC4xNjUsNi4zOSwwLjE2OCw3LjIsMC4xNjJDOC4wMSwwLjE1Niw4Ljg1LDAuMTQ0LDkuNzIsMC4xMjZzMS43MzMtMC4wMzYsMi41ODgtMC4wNTRzMS42MTItMC4wMjcsMi4yNzItMC4wMjcNCgkJYzAsMC4xMiwwLjAyMiwwLjI5NCwwLjA2NywwLjUyMmMwLjA0NSwwLjIyOCwwLjA4MiwwLjQ2NSwwLjExMiwwLjcxMWMwLjAzLDAuMjQ2LDAuMDE1LDAuNDc0LTAuMDQ1LDAuNjg0DQoJCWMtMC4wNjEsMC4yMS0wLjE4LDAuMzU3LTAuMzYsMC40NDFjLTAuMTUsMC4wNzItMC4zOSwwLjEyNC0wLjcyLDAuMTUzcy0wLjY5LDAuMDUxLTEuMDgsMC4wNjMNCgkJYy0wLjM5MSwwLjAxMi0wLjc4MSwwLjAxNS0xLjE3LDAuMDA5Yy0wLjM5LTAuMDA2LTAuNzA1LTAuMDE1LTAuOTQ1LTAuMDI3YzAuMDMtMC4wNzIsMC4wMy0wLjExNCwwLTAuMTI2DQoJCWMtMC4wMy0wLjAxMi0wLjA4My0wLjAxMi0wLjE1OCwwQzEwLjIwNywyLjQ4NywxMC4xMDksMi41MDIsOS45OSwyLjUyQzkuODcsMi41MzgsOS43NSwyLjU0MSw5LjYzLDIuNTI5TDkuNDk1LDIuNTY1DQoJCWMtMC4zMzEtMC4wMjQtMC41NC0wLjAzLTAuNjMtMC4wMThjLTAuMDksMC4wMTItMC4yMSwwLjAxMi0wLjM2LDBMOC4zNywyLjUyOWMwLjA2LDAsMC4xMDQtMC4wMDYsMC4xMzUtMC4wMTgNCgkJYzAuMDYtMC4wMjQtMC4wNDUtMC4wNi0wLjMxNS0wLjEwOGMtMC4wNjEtMC4wNi0wLjEwNS0wLjA2LTAuMTM1LDBDOC4wMjUsMi40NjQsNy45MiwyLjQ4MSw3Ljc0LDIuNDU3eiIvPg0KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik03Ljc0LDcuNDU3TDYuODg1LDcuNTExYy0wLjg0LTAuMDEyLTEuNTA3LTAuMDE4LTIuMDAyLTAuMDE4Yy0wLjQ5NSwwLTAuOTYsMC4wMDMtMS4zOTUsMC4wMDkNCgkJQzMuMDUyLDcuNTA5LDIuNTgsNy41MTQsMi4wNyw3LjUyQzEuNTYsNy41MjcsMC44Nyw3LjUyOSwwLDcuNTI5YzAtMC40MiwwLjAwNy0wLjg2MSwwLjAyMi0xLjMyMw0KCQljMC4wMTUtMC40NjIsMC4wNTItMC44NTUsMC4xMTItMS4xNzljMC4yNCwwLjAzNiwwLjUxLDAuMDM2LDAuODEsMGMwLjMtMC4wMzYsMC42MTUtMC4wMzYsMC45NDUsMGMwLjI0LDAsMC40MjcsMC4wMjEsMC41NjMsMC4wNjMNCgkJYzAuMTM1LDAuMDQyLDAuMzIyLDAuMDYzLDAuNTYzLDAuMDYzYzAuMzMsMC4wMzYsMC42NTksMC4wNDIsMC45OSwwLjAxOGMwLjMzLTAuMDI0LDAuNzA1LTAuMDMsMS4xMjUtMC4wMTgNCgkJQzUuNyw1LjE2NSw2LjM5LDUuMTY4LDcuMiw1LjE2MkM4LjAxLDUuMTU2LDguODUsNS4xNDQsOS43Miw1LjEyNnMxLjczMy0wLjAzNiwyLjU4OC0wLjA1NHMxLjYxMi0wLjAyNywyLjI3Mi0wLjAyNw0KCQljMCwwLjEyLDAuMDIyLDAuMjk0LDAuMDY3LDAuNTIyYzAuMDQ1LDAuMjI4LDAuMDgyLDAuNDY1LDAuMTEyLDAuNzExYzAuMDMsMC4yNDYsMC4wMTUsMC40NzQtMC4wNDUsMC42ODQNCgkJYy0wLjA2MSwwLjIxLTAuMTgsMC4zNTctMC4zNiwwLjQ0MWMtMC4xNSwwLjA3Mi0wLjM5LDAuMTI0LTAuNzIsMC4xNTNzLTAuNjksMC4wNTEtMS4wOCwwLjA2Mw0KCQljLTAuMzkxLDAuMDEyLTAuNzgxLDAuMDE1LTEuMTcsMC4wMDljLTAuMzktMC4wMDYtMC43MDUtMC4wMTUtMC45NDUtMC4wMjdjMC4wMy0wLjA3MiwwLjAzLTAuMTE0LDAtMC4xMjYNCgkJYy0wLjAzLTAuMDEyLTAuMDgzLTAuMDEyLTAuMTU4LDBDMTAuMjA3LDcuNDg3LDEwLjEwOSw3LjUwMiw5Ljk5LDcuNTJDOS44Nyw3LjUzOCw5Ljc1LDcuNTQxLDkuNjMsNy41MjlMOS40OTUsNy41NjUNCgkJYy0wLjMzMS0wLjAyNC0wLjU0LTAuMDMtMC42My0wLjAxOGMtMC4wOSwwLjAxMi0wLjIxLDAuMDEyLTAuMzYsMEw4LjM3LDcuNTI5YzAuMDYsMCwwLjEwNC0wLjAwNiwwLjEzNS0wLjAxOA0KCQljMC4wNi0wLjAyNC0wLjA0NS0wLjA2LTAuMzE1LTAuMTA4Yy0wLjA2MS0wLjA2LTAuMTA1LTAuMDYtMC4xMzUsMEM4LjAyNSw3LjQ2NCw3LjkyLDcuNDgxLDcuNzQsNy40NTd6Ii8+DQoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTcuNzQsMTIuNDU3bC0wLjg1NSwwLjA1NGMtMC44NC0wLjAxMi0xLjUwNy0wLjAxOC0yLjAwMi0wLjAxOGMtMC40OTUsMC0wLjk2LDAuMDAzLTEuMzk1LDAuMDA5DQoJCUMzLjA1MiwxMi41MDksMi41OCwxMi41MTQsMi4wNywxMi41MmMtMC41MSwwLjAwNi0xLjIsMC4wMDktMi4wNywwLjAwOWMwLTAuNDIsMC4wMDctMC44NjEsMC4wMjItMS4zMjMNCgkJYzAuMDE1LTAuNDYyLDAuMDUyLTAuODU1LDAuMTEyLTEuMTc5YzAuMjQsMC4wMzYsMC41MSwwLjAzNiwwLjgxLDBjMC4zLTAuMDM2LDAuNjE1LTAuMDM2LDAuOTQ1LDBjMC4yNCwwLDAuNDI3LDAuMDIxLDAuNTYzLDAuMDYzDQoJCWMwLjEzNSwwLjA0MiwwLjMyMiwwLjA2MywwLjU2MywwLjA2M2MwLjMzLDAuMDM2LDAuNjU5LDAuMDQyLDAuOTksMC4wMThjMC4zMy0wLjAyNCwwLjcwNS0wLjAzLDEuMTI1LTAuMDE4DQoJCWMwLjU3LDAuMDEyLDEuMjYsMC4wMTUsMi4wNywwLjAwOWMwLjgxLTAuMDA2LDEuNjQ5LTAuMDE4LDIuNTItMC4wMzZzMS43MzMtMC4wMzYsMi41ODgtMC4wNTRzMS42MTItMC4wMjcsMi4yNzItMC4wMjcNCgkJYzAsMC4xMiwwLjAyMiwwLjI5NCwwLjA2NywwLjUyMmMwLjA0NSwwLjIyOCwwLjA4MiwwLjQ2NSwwLjExMiwwLjcxMWMwLjAzLDAuMjQ2LDAuMDE1LDAuNDc0LTAuMDQ1LDAuNjg0DQoJCWMtMC4wNjEsMC4yMS0wLjE4LDAuMzU3LTAuMzYsMC40NDFjLTAuMTUsMC4wNzItMC4zOSwwLjEyNC0wLjcyLDAuMTUzcy0wLjY5LDAuMDUxLTEuMDgsMC4wNjMNCgkJYy0wLjM5MSwwLjAxMi0wLjc4MSwwLjAxNS0xLjE3LDAuMDA5Yy0wLjM5LTAuMDA2LTAuNzA1LTAuMDE1LTAuOTQ1LTAuMDI3YzAuMDMtMC4wNzIsMC4wMy0wLjExNCwwLTAuMTI2DQoJCWMtMC4wMy0wLjAxMi0wLjA4My0wLjAxMi0wLjE1OCwwYy0wLjA3NSwwLjAxMi0wLjE3MywwLjAyNy0wLjI5MiwwLjA0NWMtMC4xMiwwLjAxOC0wLjI0LDAuMDIxLTAuMzYsMC4wMDlsLTAuMTM1LDAuMDM2DQoJCWMtMC4zMzEtMC4wMjQtMC41NC0wLjAzLTAuNjMtMC4wMThjLTAuMDksMC4wMTItMC4yMSwwLjAxMi0wLjM2LDBMOC4zNywxMi41MjljMC4wNiwwLDAuMTA0LTAuMDA2LDAuMTM1LTAuMDE4DQoJCWMwLjA2LTAuMDI0LTAuMDQ1LTAuMDYtMC4zMTUtMC4xMDhjLTAuMDYxLTAuMDYtMC4xMDUtMC4wNi0wLjEzNSwwQzguMDI1LDEyLjQ2NCw3LjkyLDEyLjQ4MSw3Ljc0LDEyLjQ1N3oiLz4NCjwvZz4NCjwvc3ZnPg0K");
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: 14px;
}
</style>

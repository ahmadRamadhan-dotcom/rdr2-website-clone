const sideBarData = [
  { id: 1, name: "home", to: "/" },
  { id: 2, name: "info", to: "/info" },
  { id: 3, name: "pc release", to: "/" },
  { id: 4, name: "videos", to: "/" },
  { id: 5, name: "screens", to: "/" },
  {
    id: 6,
    name: "features",

    children: [
      {
        name: "the van der linde gang",
        to: "/",
      },
      {
        name: "the frontier, cities & towns",
        to: "/",
      },
      {
        name: "wildlife",
        to: "/",
      },
      {
        name: "weaponRy",
        to: "/weaponRy",
      },
      {
        name: "music",
        to: "/",
      },
      {
        name: "social club",
        to: "/",
      },
    ],
    to: "/",
  },
  { id: 7, name: "news", to: "/" },
  { id: 8, name: "online", to: "/" },
  { id: 9, name: "downloads", to: "/" },
  { id: 10, name: "buy now", to: "/order" },
];

export default sideBarData;

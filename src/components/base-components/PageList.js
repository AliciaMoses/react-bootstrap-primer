const PageList = [
  { path: "/getting-started", label: "Getting Started" },
  { path: "/typography", label: "Typography" },
  { path: "/buttons", label: "Buttons" },
  { path: "/forms", label: "Forms" },
  { path: "/dynamic-forms", label: "Dynamic Forms" },
  { path: "/navbars", label: "Navbars" },
  { path: "/cards", label: "Cards" },
  { path: "/dynamic-cards", label: "Dynamic Cards" },
  { path: "/layouts", label: "Layouts" },
  { path: "/examples", label: "Examples" },
  { path: "/examples/landing-page", label: "Example: Landing Page" },
  { path: "/examples/social-media-feed", label: "Example: Social Media Feed" },
  { path: "/examples/magazine", label: "Example: Magazine" },
  { path: "/", label: "Home" },
];

PageList.find((page) => page.label === "Home").path = "/getting-started";

export default PageList;

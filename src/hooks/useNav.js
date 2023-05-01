import { useMemo } from "react";
export const useNav = () => {
  const nav = useMemo(
    () => [
      {
        id: 0,
        slug: "products",
        title: "Products",
        href: "/",
        sub: [
          {
            id: 0,
            slug: "figma",
            title: "Figma",
            description: "An all-in-one design platform",
            href: "/",
            thumbnail: {
              src: "/figma.svg",
              alt: "Figma",
            },
          },
          {
            id: 1,
            slug: "design",
            title: "Design",
            href: "/",
          },
          {
            id: 2,
            slug: "prototyping",
            title: "Prototyping",
            href: "/",
          },
          {
            id: 3,
            slug: "design-systems",
            title: "Design Systems",
            href: "/",
          },
          {
            id: 4,
            slug: "dowloads",
            title: "Dowloads",
            href: "/",
          },
          {
            id: 5,
            slug: "figjam ",
            title: "FigJam",
            href: "/",
            description: "An online whiteboard for teams",
            thumbnail: {
              src: "/figjam.png",
              alt: "FigJam",
            },
          },
          {
            id: 6,
            slug: "online-writeboarding",
            title: "Online writeboarding",
            href: "/",
          },
          {
            id: 7,
            slug: "strategic-planning",
            title: "Strategic Planning",
            href: "/",
          },
          {
            id: 8,
            slug: "team-meetings",
            title: "Team meetings",
            href: "/",
          },
          {
            id: 9,
            slug: "diagramming",
            title: "Diagramming",
            href: "/",
          },
        ],
      },
      {
        id: 1,
        slug: "enterprise",
        title: "Enterprise",
        href: "/",
        sub: [
          {
            id: 0,
            slug: "overview",
            title: "Overview",
            href: "/",
          },
          {
            id: 1,
            slug: "customers",
            title: "Customers",
            href: "/",
          },
          {
            id: 2,
            slug: "contact-sales",
            title: "Contact Sales",
            href: "/",
          },
        ],
      },
      {
        id: 2,
        slug: "pricing",
        title: "Pricing",
        href: "/",
      },
      {
        id: 3,
        slug: "community",
        title: "Community",
        href: "/",
        sub: [
          {
            id: 0,
            slug: "files-and-templates",
            title: "Files and templates",
            href: "/",
            description:
              "Free expertly crafted files you can duplicate, remix, and use",
            thumbnail: {
              src: "/draw.svg",
              alt: "Draw",
            },
          },
          {
            id: 1,
            slug: "plugins-and-widgets",
            title: "Plugins and widgets",
            href: "/",
            description: "Extend what’s possible and automate work",
            thumbnail: {
              src: "/draw2.svg",
              alt: "Draw2",
            },
          },
          {
            id: 2,
            slug: "events-and-live-streams",
            title: "Events and live streams",
            href: "/",
          },
          {
            id: 3,
            slug: "best practices",
            title: "Best practices",
            href: "/",
          },
          {
            id: 4,
            slug: "education-program",
            title: "Education program",
            href: "/",
          },
          {
            id: 5,
            slug: "user-groups",
            title: "User groups",
            href: "/",
          },
          {
            id: 6,
            slug: "community-creators",
            title: "Community creators",
            href: "/",
          },
        ],
      },
      {
        id: 4,
        slug: "company",
        title: "Company",
        href: "/",
        sub: [
          {
            id: 0,
            slug: "blog",
            title: "Blog",
            href: "/",
          },
          {
            id: 1,
            slug: "careers",
            title: "Careers",
            href: "/",
          },
          {
            id: 2,
            slug: "our-history",
            title: "Our history",
            href: "/",
          },
          {
            id: 3,
            slug: "help-center",
            title: "Help Center",
            href: "/",
          },
        ],
      },
      {
        id: 5,
        slug: "logout",
        title: "Logout",
        href: "/",
      },
    ],
    []
  );

  return {
    nav,
  };
};

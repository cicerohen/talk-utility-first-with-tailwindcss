import { useMemo } from "react";

export const usePlans = () => {
  const plans = useMemo(
    () => [
      {
        id: 1,
        slug: "starter",
        name: "Figma Starter",
        product: {
          name: "Figma",
          slug: "figma",
        },
        price: "Free",
        billing: "Forever",
        amenities: [
          {
            id: 0,
            title: "3 Figma and 3 FigJam files",
          },
          {
            id: 1,
            title: "Unlimited personal files",
          },
          {
            id: 2,
            title: "Unlimited collaborators",
          },
          {
            id: 3,
            title: "Plugins, widgets, and templates",
          },
          {
            id: 4,
            title: "Mobile app",
          },
        ],
      },
      {
        id: 2,
        slug: "professional",
        name: "Figma Professional",
        product: {
          name: "Figma",
          slug: "figma",
        },
        price: "$12 per editor/month",
        billing: "Billed annually or $15 month-to-month",
        amenities: [
          {
            id: 0,
            title: "Unlimited Figma files",
          },
          {
            id: 1,
            title: "Unlimited version history",
          },
          {
            id: 2,
            title: "Sharing permissions",
          },
          {
            id: 3,
            title: "Shared and private projects",
          },
          {
            id: 4,
            title: "Team libraries",
          },
          {
            id: 5,
            title: "Audio conversations",
          },
        ],
      },
      {
        id: 3,
        slug: "organization",
        name: "Figma Organization",
        product: {
          name: "Figma",
          slug: "figma",
        },
        price: "$45 per editor/month",
        billing: "Annual billing only",
        amenities: [
          {
            id: 0,
            title: "Everything in Professional, plus...",
          },
          {
            id: 1,
            title: "Org-wide libraries",
          },
          {
            id: 2,
            title: "Design system analytics",
          },
          {
            id: 3,
            title: "Branching and merging",
          },
          {
            id: 4,
            title: "Centralized file management",
          },
          {
            id: 5,
            title: "Unified admin and billing",
          },
          {
            id: 6,
            title: "Private plugins and widgets",
          },
          {
            id: 7,
            title: "Single sign-on",
          },
        ],
      },
      {
        id: 4,
        slug: "starter",
        name: "FigJam Starter",
        product: {
          name: "FigJam",
          slug: "figjam",
        },
        price: "Free",
        billing: "Forever",
        amenities: [
          {
            id: 0,
            title: "3 Figma and 3 FigJam files",
          },
          {
            id: 1,
            title: "Unlimited personal files",
          },
          {
            id: 2,
            title: "Unlimited collaborators",
          },
          {
            id: 3,
            title: "Plugins, widgets, and templates",
          },
          {
            id: 4,
            title: "Mobile app",
          },
        ],
      },
      {
        id: 5,
        slug: "professional",
        name: "FigJam Professional",
        product: {
          name: "FigJam",
          slug: "figjam",
        },
        price: "$3 per editor/month",
        billing: "Billed annually or $5 month-to-month",
        amenities: [
          {
            id: 0,
            title: "Unlimited Figma files",
          },
          {
            id: 1,
            title: "Unlimited version history",
          },
          {
            id: 2,
            title: "Sharing permissions",
          },
          {
            id: 3,
            title: "Shared and private projects",
          },
          {
            id: 4,
            title: "Team libraries",
          },
          {
            id: 5,
            title: "Audio conversations",
          },
        ],
      },
      {
        id: 6,
        slug: "organization",
        name: "FigJam Organization",
        product: {
          name: "FigJam",
          slug: "figjam",
        },
        price: "$5 per editor/month",
        billing: "Annual billing only",
        amenities: [
          {
            id: 0,
            title: "Everything in Professional, plus...",
          },
          {
            id: 1,
            title: "Org-wide libraries",
          },
          {
            id: 2,
            title: "Design system analytics",
          },
          {
            id: 3,
            title: "Branching and merging",
          },
          {
            id: 4,
            title: "Centralized file management",
          },
          {
            id: 5,
            title: "Unified admin and billing",
          },
          {
            id: 6,
            title: "Private plugins and widgets",
          },
          {
            id: 7,
            title: "Single sign-on",
          },
        ],
      },
    ],
    []
  );
  return {
    plans,
  };
};

import {
  HomeIcon,
  Images,
  Settings2,
  User2,
} from "lucide-react";

export const mockImages = {
  title: "Test Board",
  images: [
    "/images/johmwick.jpg",
    "/images/cheesecake.jpg",
    "/images/curry.jpg",
    "/images/skinwalker.jpg",
    "/images/brisket.jpeg",
    "/images/brisket.jpeg",
    "/images/avatar.webp",
    "/images/ramen.jpg",
  ],
};

export const dashboardNavLinks = [
  {
    label: "Home",
    href: "/dashboard",
    icon: <HomeIcon />,
  },
  {
    label: "My Boards",
    href: "/dashboard/myBoards",
    icon: <Images />,
  },
  {
    label: "Profile",
    href: "/dashboard/profile",
    icon: <User2 />,
  },
  {
    label: "Settings",
    href: "/dashboard/settings",
    icon: <Settings2 />,
  },
];

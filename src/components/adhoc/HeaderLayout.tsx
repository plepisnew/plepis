import { cn } from "@/utils/cn";
import { ArrayMap } from "@/utils/types";
import React, { ReactNode, useEffect, useRef, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Background } from "./Background";
// import { homePage } from "@/pages/HomePage";
// import { projectsPage } from "@/pages/ProjectsPage";
// import { aboutPage } from "@/pages/AboutPage";
// import { backgroundPage } from "@/pages/BackgroundPage";

export const headerHeight = 70;

type NavItem = { path: string; label: string };

const headerNavItems: NavItem[] = [
  {
    // path: homePage.path,
    path: "/",
    label: "Whatever this is",
  },
  {
    // path: projectsPage.path,
    path: "/projects",
    label: "Projects",
  },
  {
    // path: aboutPage.path,
    path: "/about",
    label: "About me",
  },
  {
    // path: backgroundPage.path,
    path: "/background",
    label: "???",
  },
];

export const HeaderLayout: React.FC = () => {
  const { pathname } = useLocation();
  const [hoveredIndex, setHoveredIndex] = useState<number>();
  const [hoveringHeader, setHoveringHeader] = useState(false);
  const selectedIndex = headerNavItems.findIndex(
    (item) => item.path === pathname
  );

  const navItemContainerRef = useRef<HTMLUListElement>(null);
  const [navItemRects, setNavItemRects] = useState<DOMRect[]>();
  const navItemGap = 16;

  const navItemRenderer: ArrayMap<NavItem, ReactNode> = (
    { label, path },
    index
  ) => (
    <li key={label}>
      <Link
        to={path}
        onMouseEnter={() => {
          setHoveredIndex(index);
          setHoveringHeader(true);
        }}
        className={cn("px-3 py-2 rounded-lg")}
      >
        {label}
      </Link>
    </li>
  );

  useEffect(() => {
    const initHeader = () => {
      const children = [...navItemContainerRef.current!.children];
      const rects = children.map((node) => node.getBoundingClientRect());
      setNavItemRects(rects);
    };

    const timeoutId = setTimeout(initHeader, 100);

    return () => clearTimeout(timeoutId);
  }, []);

  const HoveringSlider = navItemRects && (
    <div
      style={{
        width:
          hoveredIndex === undefined ? 0 : navItemRects.at(hoveredIndex)!.width,
        left: navItemRects
          .slice(0, hoveredIndex ?? navItemRects.length)
          .reduce((prev, curr) => prev + curr.width + navItemGap, 0),
      }}
      className={cn(
        "absolute px-3 py-2 bg-primary-foreground/10 top-1/2 -translate-y-1/2 rounded-lg transition-all pointer-events-none",
        hoveringHeader ? "opacity-90" : "opacity-0 -translate-y-1/3"
      )}
    >
      &nbsp;
    </div>
  );

  const ActiveSlider = navItemRects && (
    <div
      style={{
        width: navItemRects.at(selectedIndex)!.width,
        left: navItemRects
          .slice(0, selectedIndex ?? navItemRects.length)
          .reduce((prev, curr) => prev + curr.width + navItemGap, 0),
      }}
      className={cn(
        "absolute px-3 py-2 bg-primary-foreground/20 top-1/2 -translate-y-1/2 rounded-lg transition-all pointer-events-none"
      )}
    >
      &nbsp;
    </div>
  );

  return (
    <React.Fragment>
      <header
        style={{ height: headerHeight }}
        onMouseLeave={() => setHoveringHeader(false)}
        className={cn(
          "fixed left-0 right-0 z-30",
          "from-primary-dark to-primary-darker bg-gradient-to-br border-b border-b-primary-boundary",
          "text-primary-foreground"
        )}
      >
        <div className={cn("container mx-auto flex items-center h-full")}>
          <nav className="relative">
            <ul
              className="flex"
              ref={navItemContainerRef}
              style={{ gap: navItemGap }}
            >
              {headerNavItems.map(navItemRenderer)}
            </ul>
            {HoveringSlider}
            {ActiveSlider}
          </nav>
        </div>
      </header>
      <div
        className={cn(
          "container mx-auto pb-8",
          "text-page-foreground",
          "min-h-screen "
        )}
        style={{
          paddingTop: `calc(${headerHeight}px + 2rem)`,
        }}
      >
        <Background
          options={{
            shouldFill: true,
            shouldStroke: true,
            shouldUpdate: true,
            shouldDraw: true,
            cellSize: 30,
            gapX: 3,
            gapY: 3,
            strongOpacityCeiling: 0.02,
            strongOpacityFloor: 0.03,
          }}
        />
        <Outlet />
      </div>
    </React.Fragment>
  );
};

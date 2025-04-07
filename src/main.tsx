import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "./components/ThemeProvider.tsx";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/index.tsx";
import "react-tooltip/dist/react-tooltip.css";
import AnimatedCursor from "react-animated-cursor";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <RouterProvider router={routes} />
    </ThemeProvider>
    <AnimatedCursor
      color="0,0,0"
      innerSize={15}
      outerSize={35}
      innerScale={2}
      outerScale={1.5}
      showSystemCursor={false}
      trailingSpeed={4}
      outerAlpha={0}
      innerStyle={{
        backgroundColor: "red",
      }}
      outerStyle={{
        border: "3px dashed violet",
        mixBlendMode: "exclusion",
      }}
    />
  </StrictMode>
);

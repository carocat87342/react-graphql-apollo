import { useEffect } from "react";
// routes
import Router from "./routes";
// theme
import ThemeConfig from "./theme";
import GlobalStyles from "./theme/globalStyles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// components
import Settings from "./components/settings";
import RtlLayout from "./components/RtlLayout";
import ScrollToTop from "./components/ScrollToTop";
import { ProgressBarStyle } from "./components/LoadingScreen";
import ThemePrimaryColor from "./components/ThemePrimaryColor";

// ----------------------------------------------------------------------

export default function App() {
  return (
    <ThemeConfig>
      <ThemePrimaryColor>
        <GlobalStyles />
        {/* <Settings /> */}
        <ScrollToTop />
        <Router />
      </ThemePrimaryColor>
    </ThemeConfig>
  );
}

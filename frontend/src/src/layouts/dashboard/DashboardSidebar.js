import PropTypes from "prop-types";
import { useEffect } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
// material
import { alpha, styled } from "@mui/material/styles";
import {
  Box,
  Link,
  Stack,
  Avatar,
  Drawer,
  Tooltip,
  Typography,
  CardActionArea,
  Button,
} from "@mui/material";
// hooks
import useCollapseDrawer from "../../hooks/useCollapseDrawer";
// components
import Logo from "../../components/Logo";
import Scrollbar from "../../components/Scrollbar";
import NavSection from "../../components/NavSection";
//
import { MHidden } from "../../components/@material-extend";
import sidebarConfig from "./SidebarConfig";
import guestsidebarConfig from "./GuestSidebarConfig";
import useSettings from "../../hooks/useSettings";

// ----------------------------------------------------------------------

const DRAWER_WIDTH = 250;
const COLLAPSE_WIDTH = 102;

const RootStyle = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("lg")]: {
    flexShrink: 0,
    transition: theme.transitions.create("width", {
      duration: theme.transitions.duration.complex,
    }),
  },
}));

export default function DashboardSidebar({ isOpenSidebar, onCloseSidebar }) {
  const { pathname } = useLocation();
  const location = useLocation();
  const { onChangeColorClick } = useSettings();
  let currenturl = new String(location.pathname);
  const isGuest = currenturl.includes("guest"); //true or false value

  const {
    isCollapse,
    collapseClick,
    collapseHover,
    onToggleCollapse,
    onHoverEnter,
    onHoverLeave,
  } = useCollapseDrawer();

  useEffect(() => {
    if (isOpenSidebar) {
      onCloseSidebar();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const renderContent = (
    <Scrollbar
      sx={{
        height: "100%",
        "& .simplebar-content": {
          height: "100%",
          display: "flex",
          flexDirection: "column",
        },
      }}
    >
      <NavSection
        navConfig={isGuest ? guestsidebarConfig : sidebarConfig}
        isShow={!isCollapse}
      />
      <Box flexGrow={1} />
      <Stack sx={{ m: 2 }}>
        <Logo />
        {isGuest && (
          <>
            <Button
              variant="contained"
              fullWidth
              size="large"
              sx={{ height: 60, mt: 2 }}
              component={RouterLink}
              to="/host/mypartners"
              onClick={() => onChangeColorClick("default")}
            >
              Become a Host
            </Button>
          </>
        )}
        {!isGuest && (
          <>
            <Button
              variant="contained"
              fullWidth
              size="large"
              sx={{ height: 60, mt: 2 }}
              component={RouterLink}
              to="/guest/mypartners"
              onClick={() => onChangeColorClick("grey")}
            >
              Become a Guest
            </Button>
          </>
        )}
      </Stack>
    </Scrollbar>
  );

  return (
    <RootStyle
      sx={{
        width: {
          lg: isCollapse ? COLLAPSE_WIDTH : DRAWER_WIDTH,
        },
        ...(collapseClick && {
          position: "absolute",
        }),
      }}
    >
      <MHidden width="lgDown">
        <Drawer
          open
          variant="persistent"
          onMouseEnter={onHoverEnter}
          onMouseLeave={onHoverLeave}
          PaperProps={{
            sx: {
              zIndex: 9,
              width: DRAWER_WIDTH,
              height: "calc(100% - 92px)",
              bgcolor: "white",
              borderRight: 0,
              mt: "92px",
              ...(isCollapse && {
                width: COLLAPSE_WIDTH,
              }),
              ...(collapseHover && {
                backdropFilter: "blur(6px)",
                WebkitBackdropFilter: "blur(6px)", // Fix on Mobile
                boxShadow: (theme) => theme.customShadows.z20,
                bgcolor: (theme) =>
                  alpha(theme.palette.background.default, 0.88),
              }),
            },
          }}
        >
          {renderContent}
        </Drawer>
      </MHidden>
    </RootStyle>
  );
}

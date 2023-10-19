import PropTypes from "prop-types";
import { Icon } from "@iconify/react";
import menu2Fill from "@iconify/icons-eva/menu-2-fill";
import NotificationsIcon from "@mui/icons-material/Notifications";
// material
import { alpha, styled } from "@mui/material/styles";
import {
  Box,
  Stack,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Badge,
} from "@mui/material";
import Logo from "../../components/Logo";
// hooks
import useCollapseDrawer from "../../hooks/useCollapseDrawer";
// components
import { MHidden } from "../../components/@material-extend";
import Searchbar from "./Searchbar";
import { Link as RouterLink, useLocation } from "react-router-dom";

// ----------------------------------------------------------------------

const DRAWER_WIDTH = 280;
const COLLAPSE_WIDTH = 102;

const APPBAR_MOBILE = 64;
const APPBAR_DESKTOP = 92;

const RootStyle = styled(AppBar)(({ theme }) => ({
  // zIndex: 10,
  boxShadow: "none",
  backdropFilter: "blur(6px)",
  WebkitBackdropFilter: "blur(6px)", // Fix on Mobile
  backgroundColor: "white",
  boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.11)",
}));

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  minHeight: APPBAR_MOBILE,
  [theme.breakpoints.up("lg")]: {
    minHeight: APPBAR_DESKTOP,
    padding: theme.spacing(0, 5),
  },
}));

// ----------------------------------------------------------------------

DashboardNavbar.propTypes = {
  onOpenSidebar: PropTypes.func,
};

export default function DashboardNavbar({ onOpenSidebar }) {
  const { isCollapse } = useCollapseDrawer();
  const location = useLocation();
  let curturl = new String(location.pathname);
  const isHost = curturl.includes("host"); //true or false value

  return (
    <RootStyle
      sx={{
        ...(isCollapse && {
          width: { lg: `calc(100% - ${COLLAPSE_WIDTH}px)` },
        }),
      }}
    >
      <ToolbarStyle>
        <MHidden width="lgUp">
          <IconButton
            onClick={onOpenSidebar}
            sx={{ mr: 1, color: "text.primary" }}
          >
            <Icon icon={menu2Fill} />
          </IconButton>
        </MHidden>

        <Logo />

        {isHost && (
          <>
            <Typography color="#64748B" variant="h4" sx={{ ml: 10 }}>
              Host Partner
            </Typography>
          </>
        )}
        {!isHost && (
          <>
            <Typography color="#64748B" variant="h4" sx={{ ml: 10 }}>
              Guest Partner
            </Typography>
          </>
        )}

        <Box sx={{ flexGrow: 1 }} />

        <Stack
          direction="row"
          alignItems="center"
          spacing={{ xs: 0.5, sm: 1.5 }}
        >
          <Badge
            color="primary"
            overlap="circular"
            variant="dot"
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
          >
            <NotificationsIcon sx={{ color: "#64748B" }} />
          </Badge>
          <Typography color="#64748B">Oleg rijikov</Typography>
        </Stack>
      </ToolbarStyle>
    </RootStyle>
  );
}

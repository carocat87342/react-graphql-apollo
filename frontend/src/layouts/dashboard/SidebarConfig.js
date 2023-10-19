// components
import SvgIconStyle from "../../components/SvgIconStyle";

// ----------------------------------------------------------------------

const getIcon = (name) => (
  <SvgIconStyle
    src={`/images/icons/${name}.png`}
    sx={{ width: "100%", height: "100%" }}
  />
);

const ICONS = {
  discover: getIcon("search"),
  partners: getIcon("partners"),
  dashboard: getIcon("dashboard"),
  insight: getIcon("insight"),
  like: getIcon("like"),
  setting: getIcon("setting"),
  help: getIcon("lifesaver"),
};

const sidebarConfig = [
  {
    items: [
      { title: "Discover", path: "/host/discover", icon: ICONS.discover },
      { title: "Partners", path: "/host/mypartners", icon: ICONS.partners },
      { title: "Dashboard", path: "/host/dashboard", icon: ICONS.dashboard },
      { title: "Insights", path: "/host/dashboard", icon: ICONS.insight },
      {
        title: "Recommendations",
        path: "/host/recommendation",
        icon: ICONS.like,
      },
    ],
  },

  {
    items: [
      {
        title: "Settings",
        path: "/host/settings",
        icon: ICONS.setting,
      },
      {
        title: "Help",
        path: "/host/help",
        icon: ICONS.help,
        // children: [{ title: 'Four', path: '/' }]
      },
    ],
  },
];

export default sidebarConfig;

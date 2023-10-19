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

const guestsidebarConfig = [
  {
    items: [
      { title: "Partners", path: "/guest/mypartners", icon: ICONS.partners },
    ],
  },

  {
    items: [
      {
        title: "Settings",
        path: "/settings",
        icon: ICONS.setting,
      },
      {
        title: "Help",
        path: "/help",
        icon: ICONS.help,
      },
    ],
  },
];

export default guestsidebarConfig;

import { useState } from "react";
// material
import { Container, Stack, Box, Tabs, Tab } from "@mui/material";
import { capitalCase } from "change-case";
import { gql, useQuery } from "@apollo/client";
import {
  NotIntegrated,
  Integrated,
  MultipleSlider,
  SliderCard,
} from "../components/host";

const GET_GUESTS = gql`
  query GetGuests {
    guests {
      _id
      name
      description
      thumb
      domain
      comission
      categories
      shippingTime
      approvalNeeded
    }
  }
`;

export default function Mypartner() {
  const { loading, error, data } = useQuery(GET_GUESTS);
  console.log(data);
  const Guests = data?.guests;
  const [currentItem, setCurrentItem] = useState({});
  const [currentTab, setCurrentTab] = useState("Not Integrated");
  const handleChangeTab = (event, newValue) => {
    setCurrentTab(newValue);
  };

  const INTEGRATE_TABS = [
    {
      value: "Not Integrated",
      component: <NotIntegrated />,
    },
    {
      value: "Integrated",
      component: <Integrated />,
    },
  ];

  return (
    <Stack>
      <Container maxWidth="xl">
        <MultipleSlider />

        <Stack sx={{ my: 3 }}>
          <Tabs
            value={currentTab}
            scrollButtons="auto"
            variant="scrollable"
            allowScrollButtonsMobile
            onChange={handleChangeTab}
          >
            {INTEGRATE_TABS.map((tab) => (
              <Tab
                disableRipple
                key={tab.value}
                label={capitalCase(tab.value)}
                value={tab.value}
                sx={{ fontSize: "23px", color: "#64748B" }}
              />
            ))}
          </Tabs>
        </Stack>

        <Stack sx={{ flexGrow: 1 }}>
          {INTEGRATE_TABS.map((tab) => {
            const isMatched = tab.value === currentTab;
            return isMatched && <Box key={tab.value}>{tab.component}</Box>;
          })}
        </Stack>
      </Container>
    </Stack>
  );
}

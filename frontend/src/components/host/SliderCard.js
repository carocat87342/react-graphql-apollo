import { useState } from "react";
// material
import { Container, Stack, Box, Typography } from "@mui/material";
import { gql, useQuery } from "@apollo/client";

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

export default function SliderCard(props) {
  const { loading, error, data } = useQuery(GET_GUESTS);
  console.log(data);
  const Hosts = data?.guest;
  const [currentItem, setCurrentItem] = useState({});
  // console.log("approved", props.item.approvalNeeded);
  const isApproved = props.item.approvalNeeded;
  const Aname = props.item.name;
  const Athumb = props.item.thumb;
  return (
    <Stack>
      <Stack direction="row" sx={{ position: "relative" }}>
        <Stack
          justifyContent="center"
          alignItems="center"
          sx={{
            width: 160,
            height: 160,
            bgcolor: isApproved ? "#94A3B8" : "white",
            // bgcolor: "white",
            mx: 1,
          }}
        >
          <Box
            component="img"
            src={`/images/brands/${Athumb}.png`}
            sx={{ width: 100, mt: 2 }}
          />
          {!isApproved && (
            <Typography sx={{ fontSize: "14px", color: "#1E293B" }}>
              Waiting for approval
            </Typography>
          )}
        </Stack>

        <Stack
          sx={{
            backgroundImage: "url(/images/icons/flow.png)",
            width: 132,
            height: 38.34,
            position: "absolute",
            top: -7,
            left: 7,
            zIndex: 99,
          }}
        >
          <Typography
            sx={{
              color: "#CCCCCC",
              display: "flex",
              justifyContent: "center",
              pt: "4px",
            }}
          >
            {Aname}
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}

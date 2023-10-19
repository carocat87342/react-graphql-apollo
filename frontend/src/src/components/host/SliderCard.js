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

export default function SliderCard() {
  const { loading, error, data } = useQuery(GET_GUESTS);
  console.log(data);
  const Hosts = data?.guest;
  const [currentItem, setCurrentItem] = useState({});

  return (
    <Stack>
      <Stack direction="row" sx={{ position: "relative" }}>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{
            width: 160,
            height: 160,
            bgcolor: "#94A3B8",
            mx: 1,
          }}
        >
          <Box
            component="img"
            src={`/images/brands/adidas.png`}
            sx={{ width: 100 }}
          />
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
            Adidas
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}

// import { useState } from "react";
// // material
// import { Container, Stack, Box, Typography } from "@mui/material";
// import { gql, useQuery } from "@apollo/client";

// const GET_GUESTS = gql`
//   query GetGuests {
//     guests {
//       _id
//       name
//       description
//       thumb
//       domain
//       comission
//       categories
//       shippingTime
//       approvalNeeded
//     }
//   }
// `;

// export default function SliderCard() {
//   const { loading, error, data } = useQuery(GET_GUESTS);
//   console.log(data);
//   const Hosts = data?.guest;
//   const [currentItem, setCurrentItem] = useState({});

//   return (
//     <Stack alignItems="center" sx={{ width: 180, height: 180 }}>
//       <Stack
//         sx={{
//           background: "#64748b",
//           width: 160,
//           height: 160,
//           position: "relative",
//         }}
//         alignItems="center"
//         justifyContent="center"
//       >
//         <Box component="img" src="/images/brands/adidas.png" />
//         <Stack
//           sx={{
//             zIndex: 2,
//             backgroundImage: "url(/images/icons/flow.png)",
//             position: "absolute",
//             left: 0,
//             width: 132,
//             top: "0",
//           }}
//         >
//           Adidas
//         </Stack>
//       </Stack>
//     </Stack>
//   );
// }

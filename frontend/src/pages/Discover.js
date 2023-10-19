import { useState, useEffect } from "react";
// material
import {
  Container,
  Typography,
  Grid,
  Stack,
  TextField,
  Box,
  Button,
  InputAdornment,
  Dialog,
  DialogActions,
  DialogContent,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { gql, useQuery, useMutation } from "@apollo/client";

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

const CREATE_CONTRACT = gql`
  mutation CreateContract($guestId: String!) {
    createContract(guestId: $guestId) {
      _id
    }
  }
`;

export default function Discover() {
  const { loading, error, data } = useQuery(GET_GUESTS);
  const [createContract, { loading: loadingCreate }] =
    useMutation(CREATE_CONTRACT);

  const Guests = data?.guests;
  // useEffect(() => {});
  const [currentItem, setCurrentItem] = useState({});

  const [open, setOpen] = useState(false);

  const handleClickOpen = (item) => {
    setOpen(true);
    setCurrentItem(item);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleRequest = () => {
    // createContract({ guestId: currentItem._id });
    createContract({
      variables: {
        _id: "guest16",
        name: "sdfsdfsd",
        domain: "ssdfsdf.com",
        thumb: "sdfsdf",
        description:
          "Adidas that designs and manufactures shoes, clothing and accessories.",
        comission: "28",
        categories: ["Shoes", "Clothes"],
        shippingTime: "13",
        approvalNeeded: true,
      },
    });
    console.log("loading", loadingCreate);
  };

  return (
    <Stack sx={{ mt: 4 }}>
      <Container maxWidth="xl">
        <Stack direction="row" spacing={2}>
          <TextField
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            label="Search by brand"
            sx={{
              "& fieldset": { border: "1px solid #E2E8F0" },
              "&.MuiTextField-root": { width: "352px" },
              "& .MuiOutlinedInput-root": {
                borderRadius: 0.75,
                bgcolor: "#F8FAFC",
              },
            }}
          />
          <TextField
            select
            label="Filter by category"
            sx={{
              "& fieldset": { border: "1px solid #E2E8F0" },
              "& select": {
                pl: 1,
                py: 0.5,
                pr: "24px !important",
                typography: "subtitle2",
              },
              "&.MuiTextField-root": { width: "352px" },
              "& .MuiOutlinedInput-root": {
                borderRadius: 0.75,
                bgcolor: "#F8FAFC",
              },
              "& .MuiNativeSelect-icon": {
                top: 4,
                right: 0,
                width: 20,
                height: 20,
              },
            }}
          ></TextField>
        </Stack>

        <Grid container spacing={2} sx={{ mt: 2 }}>
          {Guests?.map((item, index) => (
            <Grid item md={3}>
              <Stack
                onClick={() => handleClickOpen(item)}
                sx={{
                  p: "15px",
                  height: 300,
                  bgcolor: "white",
                  borderRadius: "4px",
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.08)",
                  transition: "all 0.3s",
                  cursor: "pointer",
                  "&:hover": {
                    boxShadow: "0px 9px 18px rgba(0, 0, 0, 0.15)",
                    bgcolor: "#FBDCE4",
                  },
                }}
              >
                <Stack
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  sx={{ height: 100 }}
                >
                  <Box
                    component="img"
                    src={`/images/brands/${item.thumb}.png`}
                    sx={{ width: 100 }}
                  />
                </Stack>
                <Typography>{item.description}</Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>

        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogContent sx={{ px: 9 }}>
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              sx={{ height: 100 }}
            >
              <Box
                component="img"
                src={`/images/brands/${currentItem.thumb}.png`}
                sx={{ width: 100 }}
              />
            </Stack>
            <Stack sx={{ mt: 3 }} spacing={5}>
              <Stack direction="row" alignItems="flex-start" spacing={2}>
                <Box
                  component="img"
                  src="/images/icons/signature.png"
                  sx={{ width: 32 }}
                />
                <Stack>
                  <Typography variant="h6">Name</Typography>
                  <Typography>{currentItem.name}</Typography>
                </Stack>
              </Stack>
              <Stack direction="row" alignItems="flex-start" spacing={2}>
                <Box
                  component="img"
                  src="/images/icons/click.png"
                  sx={{ width: 32 }}
                />
                <Stack>
                  <Typography variant="h6">Website</Typography>
                  <Typography>{currentItem.domain}</Typography>
                </Stack>
              </Stack>
              <Stack direction="row" alignItems="flex-start" spacing={2}>
                <Box
                  component="img"
                  src="/images/icons/cubes.png"
                  sx={{ width: 32 }}
                />
                <Stack>
                  <Typography variant="h6">Product</Typography>
                  <Typography>Denim, Jackets, Shirts</Typography>
                </Stack>
              </Stack>
              <Stack direction="row" alignItems="flex-start" spacing={2}>
                <Box
                  component="img"
                  src="/images/icons/discount.png"
                  sx={{ width: 32 }}
                />
                <Stack>
                  <Typography variant="h6">Commission</Typography>
                  <Typography>{currentItem.comission}%</Typography>
                </Stack>
              </Stack>
              <Stack direction="row" alignItems="flex-start" spacing={2}>
                <Box
                  component="img"
                  src="/images/icons/quality.png"
                  sx={{ width: 32 }}
                />
                <Stack>
                  <Typography variant="h6">Approval Needed</Typography>
                </Stack>
              </Stack>
              <Stack direction="row" alignItems="flex-start" spacing={2}>
                <Box
                  component="img"
                  src="/images/icons/fast-delivery.png"
                  sx={{ width: 32 }}
                />
                <Stack>
                  <Typography variant="h6">Shipping</Typography>
                  <Typography>10 days</Typography>
                </Stack>
              </Stack>
            </Stack>
            {/* </Stack> */}
          </DialogContent>
          <DialogActions>
            {!loadingCreate && (
              <Button
                variant="contained"
                fullWidth
                size="large"
                sx={{ height: 70, mt: 5 }}
                onClick={handleRequest}
              >
                Partner request
              </Button>
            )}
            {loadingCreate && (
              <Button
                variant="contained"
                fullWidth
                size="large"
                disabled
                sx={{ height: 70, mt: 5 }}
              >
                Request Partner...
              </Button>
            )}
          </DialogActions>
        </Dialog>
      </Container>
    </Stack>
  );
}

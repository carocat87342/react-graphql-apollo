import { useState } from "react";
// material
import {
  Container,
  Stack,
  TextField,
  Button,
  Box,
  InputAdornment,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableHead,
  TableContainer,
  Checkbox,
} from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import SearchIcon from "@mui/icons-material/Search";
import { gql, useQuery } from "@apollo/client";
import { SliderCard } from "./SliderCard";

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

export default function NotIntegrated() {
  const { loading, error, data } = useQuery(GET_GUESTS);
  console.log(data);
  const Guests = data?.guests;
  const [currentItem, setCurrentItem] = useState({});

  return (
    <Stack>
      <Container maxWidth="xl">
        <Stack direction="row" spacing={2}>
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
          <Button
            variant="contained"
            fullWidth
            size="small"
            sx={{ height: 56, width: 100, fontSize: "18px" }}
            startIcon={<FilterListIcon />}
          >
            sort
          </Button>
        </Stack>

        <TableContainer component={Paper} sx={{ mt: 3, height: 570 }}>
          <Table
            stickyHeader
            aria-label="sticky table"
            sx={{ minWidth: 650 }}
            aria-label="simple table"
          >
            <TableHead>
              <TableRow
                sx={{
                  height: 68,
                  boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.11)",
                }}
              >
                <TableCell sx={{ bgcolor: "white" }} padding="checkbox">
                  <Checkbox color="primary" />
                </TableCell>
                <TableCell sx={{ bgcolor: "white" }}>
                  <Box
                    component="img"
                    src="/images/icons/insert-picture.png"
                    sx={{ width: 41 }}
                  />
                </TableCell>
                <TableCell
                  sx={{
                    bgcolor: "white",
                    fontSize: "23px",
                  }}
                >
                  Product
                </TableCell>
                <TableCell sx={{ bgcolor: "white", fontSize: "23px" }}>
                  Categories
                </TableCell>
                <TableCell sx={{ bgcolor: "white", fontSize: "23px" }}>
                  Stock
                </TableCell>
                <TableCell sx={{ bgcolor: "white", fontSize: "23px" }}>
                  Price
                </TableCell>
                <TableCell sx={{ bgcolor: "white", fontSize: "23px" }}>
                  Date
                </TableCell>
                <TableCell sx={{ bgcolor: "white", fontSize: "23px" }}>
                  <Button
                    variant="contained"
                    fullWidth
                    size="small"
                    sx={{ height: 56, width: 156, fontSize: "18px" }}
                  >
                    Integrate
                  </Button>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Guests?.map((item, index) => (
                <TableRow
                  sx={{
                    height: 100,
                    borderBottom: "1px solid red",
                    "&:last-child td, &:last-child th": { border: 0 },
                  }}
                >
                  <TableCell padding="checkbox">
                    <Checkbox color="primary" />
                  </TableCell>
                  <TableCell>
                    <Box
                      component="img"
                      src="/images/icons/insert-picture.png"
                      sx={{ width: 41 }}
                    />
                  </TableCell>
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{ fontSize: "20px" }}
                  >
                    {item.name}
                  </TableCell>
                  <TableCell sx={{ fontSize: "20px" }}>{item.name}</TableCell>
                  <TableCell sx={{ fontSize: "20px" }}>In Stock</TableCell>
                  <TableCell sx={{ fontSize: "20px" }}>$95.00</TableCell>
                  <TableCell sx={{ fontSize: "20px" }}>29/8/2021</TableCell>
                  <TableCell>
                    <a
                      href="#"
                      style={{
                        fontSize: "20px",
                        color: "#64748B",
                        textDecoration: "none",
                      }}
                    >
                      View Product
                    </a>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Stack>
  );
}

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
} from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import SearchIcon from "@mui/icons-material/Search";
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

export default function Mypartner() {
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

        <TableContainer component={Paper} sx={{ mt: 3, height: 750 }}>
          <Table stickyHeader sx={{ minWidth: 650 }}>
            <TableHead>
              <TableRow
                sx={{
                  height: 68,
                  boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.11)",
                  backgroundColor: "white",
                }}
              >
                <TableCell
                  sx={{
                    backgroundColor: "white",
                    fontSize: "23px",
                  }}
                >
                  Company
                </TableCell>
                <TableCell sx={{ bgcolor: "white", fontSize: "23px" }}>
                  Website
                </TableCell>
                <TableCell sx={{ bgcolor: "white", fontSize: "23px" }}>
                  categories
                </TableCell>
                <TableCell sx={{ bgcolor: "white", fontSize: "23px" }}>
                  Status
                </TableCell>
                <TableCell sx={{ bgcolor: "white", fontSize: "23px" }}>
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Guests?.map((item, index) => (
                <TableRow
                  sx={{
                    height: 100,
                    borderBottom: "1px solid #94A3B8",
                    "&:last-child td, &:last-child th": { border: 0 },
                  }}
                >
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{ fontSize: "20px" }}
                  >
                    {item.name}
                  </TableCell>
                  <TableCell sx={{ fontSize: "20px" }}>{item.domain}</TableCell>
                  <TableCell sx={{ fontSize: "20px" }}>{item.name}</TableCell>
                  <TableCell sx={{ fontSize: "20px" }}>
                    {item.approvalNeeded && <p>Approved</p>}
                    {!item.approvalNeeded && <p>Waiting for approval</p>}
                  </TableCell>
                  <TableCell sx={{ fontSize: "20px" }}>
                    <Stack direction="row" spacing={1}>
                      {!item.approvalNeeded && (
                        <>
                          <Button
                            variant="contained"
                            fullWidth
                            size="small"
                            sx={{ height: 56, fontSize: "18px" }}
                          >
                            Approval
                          </Button>
                          <Button
                            variant=""
                            fullWidth
                            size="small"
                            sx={{ height: 56, fontSize: "18px" }}
                          >
                            Decline
                          </Button>
                        </>
                      )}
                      {item.approvalNeeded && (
                        <>
                          <Stack
                            direction="row"
                            alignItems="center"
                            spacing={2}
                          >
                            <Box
                              component="img"
                              src="/images/icons/Vector.png"
                              sx={{ width: 24 }}
                            />
                            <a href="#" style={{ color: "#64748B" }}>
                              Visit Website
                            </a>
                          </Stack>
                        </>
                      )}
                    </Stack>
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

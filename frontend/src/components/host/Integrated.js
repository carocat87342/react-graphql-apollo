import * as React from "react";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
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
  Card,
  Typography,
  TableSortLabel,
  Switch,
  FormControlLabel,
} from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import SearchIcon from "@mui/icons-material/Search";
import { visuallyHidden } from "@mui/utils";
import Scrollbar from "../../components/Scrollbar";

function createData(name, calories, fat, carbs, protein) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
  };
}

const rows = [
  createData("River Island", "Shorts", "In Stock", "$95.00", "28/9/2021"),
  createData("Nike Runing Trail", "Shorts", "In Stock", "$95.00", "28/9/2021"),
  createData("Wide chino shorts", "Shorts", "In Stock", "$95.00", "28/9/2021"),
  createData("new look sport", "Shorts", "In Stock", "$95.00", "28/9/2021"),
  createData("short in black", "Shorts", "In Stock", "$95.00", "28/9/2021"),
  createData("River Islands", "Shorts", "In Stock", "$95.00", "28/9/2021"),
  createData("Nike Runing Trails", "Shorts", "In Stock", "$95.00", "28/9/2021"),
  createData("Wide chinos shorts", "Shorts", "In Stock", "$95.00", "28/9/2021"),
  createData("new looks sport", "Shorts", "In Stock", "$95.00", "28/9/2021"),
  createData("shorts in black", "Shorts", "In Stock", "$95.00", "28/9/2021"),
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: "name",
    numeric: false,
    disablePadding: true,
    label: "Product",
  },
  {
    id: "calories",
    numeric: true,
    disablePadding: false,
    label: "Categories",
  },
  {
    id: "fat",
    numeric: true,
    disablePadding: false,
    label: "Stock",
  },
  {
    id: "carbs",
    numeric: true,
    disablePadding: false,
    label: "Price",
  },
  {
    id: "protein",
    numeric: true,
    disablePadding: false,
    label: "Date",
  },
];

function EnhancedTableHead(props) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow
        sx={{
          height: 68,
          boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.11)",
        }}
      >
        <TableCell padding="checkbox" sx={{ bgcolor: "white" }}>
          <Checkbox
            color="primary"
            size="large"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              "aria-label": "select all desserts",
            }}
          />
        </TableCell>
        <TableCell sx={{ bgcolor: "white" }}>
          <Box
            component="img"
            src="/images/icons/insert-picture.png"
            sx={{ width: 41 }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            // align={headCell.numeric ? "right" : "left"}
            // padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
            sx={{ bgcolor: "white", fontSize: "23px" }}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
        <TableCell sx={{ bgcolor: "white", fontSize: "23px" }}></TableCell>
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

export default function Integrated() {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  return (
    <Box sx={{ width: "100%" }}>
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
      <Paper sx={{ width: "100%", mt: 3 }}>
        <Scrollbar>
          <TableContainer sx={{ maxHeight: 500 }}>
            <Table stickyHeader>
              <EnhancedTableHead
                numSelected={selected.length}
                order={order}
                orderBy={orderBy}
                onSelectAllClick={handleSelectAllClick}
                onRequestSort={handleRequestSort}
                rowCount={rows.length}
              />

              <TableBody>
                {stableSort(rows, getComparator(order, orderBy))
                  // .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    const isItemSelected = isSelected(row.name);
                    const labelId = `enhanced-table-checkbox-${index}`;

                    return (
                      <TableRow
                        hover
                        onClick={(event) => handleClick(event, row.name)}
                        role="checkbox"
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={row.name}
                        selected={isItemSelected}
                        sx={{
                          height: 100,
                          borderBottom: "1px solid #64748B",
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell padding="checkbox">
                          <Checkbox
                            color="primary"
                            checked={isItemSelected}
                            inputProps={{
                              "aria-labelledby": labelId,
                            }}
                            size="large"
                          />
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
                          id={labelId}
                          scope="row"
                          padding="none"
                          sx={{ fontSize: "20px" }}
                        >
                          {row.name}
                        </TableCell>
                        <TableCell sx={{ fontSize: "20px" }}>
                          {row.calories}
                        </TableCell>
                        <TableCell sx={{ fontSize: "20px" }}>
                          {row.fat}
                        </TableCell>
                        <TableCell sx={{ fontSize: "20px" }}>
                          {row.carbs}
                        </TableCell>
                        <TableCell sx={{ fontSize: "20px" }}>
                          {row.protein}
                        </TableCell>
                        <TableCell sx={{ fontSize: "20px" }}>
                          View Product
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
        </Scrollbar>
      </Paper>
    </Box>
  );
}

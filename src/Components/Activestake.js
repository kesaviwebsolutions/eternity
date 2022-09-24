import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Container } from "@mui/system";
import Imagelogo5 from "../Components/Images/stakebalance.png";
import Imagelogo4 from "../Components/Images/tokenstake.png";
import Imagelogo6 from "../Components/Images/portfolio.png";
import Imagelogo7 from "../Components/Images/rewardtokens.png";

const columns = [
  { id: "name", label: "SNO.", minWidth: 170, align: "left" },
  {
    id: "size",
    label: "Amount",
    minWidth: 170,
    align: "left",
    format: (value) => value.toFixed(2),
  },
  {
    id: "density",
    label: "Timestamp of stake",
    minWidth: 170,
    align: "left",
    format: (value) => value.toFixed(2),
  },
  {
    id: "density",
    label: "Endtime of stake",
    minWidth: 170,
    align: "left",
    format: (value) => value.toFixed(2),
  },
  {
    id: "density",
    label: "Duration",
    minWidth: 170,
    align: "left",
    format: (value) => value.toFixed(2),
  },
  {
    id: "density",
    label: "Claim reward",
    minWidth: 170,
    align: "left",
    format: (value) => value.toFixed(2),
  },
  {
    id: "density",
    label: "Action",
    minWidth: 170,
    align: "left",
    format: (value) => value.toFixed(2),
  },
];

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

const rows = [
  createData("1", 23423234, 23423234, 1324171354, 3287263),
  createData("2", 23423234, 1403500365, 9596961),
  createData("3", 23423234, 60483973, 301340),
  createData("4", 23423234, 327167434, 9833520),
  createData("5", 23423234, 37602103, 9984670),
  createData("6", 23423234, 25475400, 7692024),
  createData("7", 23423234, 83019200, 357578),
  createData("8", 23423234, 4857000, 70273),
  createData("9", 23423234, 126577691, 1972550),
  createData("10", 23423234, 126317000, 377973),
  createData("11", 23423234, 67022000, 640679),
  createData("12", 23423234, 67545757, 242495),
  createData("13", 23423234, 146793744, 17098246),
  createData("14", 23423234, 200962417, 923768),
  createData("15", 23423234, 210147125, 8515767),
];

export default function Activestake() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      <div className="container my-5">
        <h2 className="heading-2">Balances</h2>
        <div className="">
          <div className="row ">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12 ">
              <div className="border-meta">
                <div
                  className="row total"
                  style={{
                    marginRight: "1rem",
                    background: "#191015",
                    borderRadius: "10px",
                    // padding: "2rem 3rem",
                    margin: "0.01rem",
                  }}
                >
                  <div className="col-lg-3 col-md-3 col-sm-6 col-12 section1a">
                    <div className="row">
                      <div className="col-lg-4 col-md-4 col-sm-4 col-2">
                        <img
                          src={Imagelogo5}
                          alt=""
                          className="Image1"
                          style={{ float: "right", marginTop: "10px" }}
                        />
                      </div>
                      <div
                        className="col-lg-8 col-md-8 col-sm-8 col-6"
                        style={{ fontFamily: "roboto" }}
                      >
                        <span className="p" style={{ color: "white" }}>
                          $0.00
                        </span>
                        <br />
                        <span
                          style={{
                            color: "#A39FA1",
                            fontSize: "14px",
                            // marginLeft: "2rem",
                          }}
                        >
                          Staked Balance
                        </span>
                        <hr style={{ color: "white" }} />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-6 col-12 section1a">
                    <div className="row">
                      <div className="col-lg-4 col-md-4 col-sm-4 col-2">
                        <img
                          src={Imagelogo4}
                          alt=""
                          className="Image1"
                          style={{
                            float: "right",
                            marginTop: "10px",
                            width: "30px",
                          }}
                        />
                      </div>
                      <div className="col-lg-8 col-md-8 col-sm-8 col-6">
                        <span style={{ color: "white", fontSize: "18px" }}>
                          0
                        </span>
                        <br />
                        <span
                          style={{
                            color: "#A39FA1",
                            fontSize: "14px",
                            // marginLeft: "2rem",
                            fontFamily: "roboto",
                          }}
                        >
                          Tokens Staked
                        </span>
                        <hr style={{ color: "white" }} />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-6 col-12 section1a">
                    <div className="row">
                      <div className="col-lg-4 col-md-4 col-sm-4 col-2">
                        <img
                          src={Imagelogo6}
                          alt=""
                          className="Image1"
                          style={{
                            float: "right",
                            marginTop: "10px",
                            width: "30px",
                          }}
                        />
                      </div>
                      <div
                        className="col-lg-8 col-md-8 col-sm-8 col-6"
                        style={{ fontFamily: "roboto" }}
                      >
                        <span style={{ color: "white", fontSize: "18px" }}>
                          $0.00
                        </span>
                        <br />
                        <span
                          style={{
                            color: "#A39FA1",
                            fontSize: "14px",
                            // marginLeft: "2rem",
                          }}
                        >
                          Full Portfolio Value
                        </span>
                        <hr style={{ color: "white" }} />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-6 col-12 ">
                    <div className="row">
                      <div className="col-lg-4 col-md-4 col-sm-4 col-2">
                        <img
                          src={Imagelogo7}
                          alt=""
                          className="Image1"
                          style={{
                            float: "right",
                            marginTop: "10px",
                            width: "30px",
                          }}
                        />
                      </div>
                      <div
                        className="col-lg-8 col-md-8 col-sm-8 col-6"
                        style={{ fontFamily: "roboto" }}
                      >
                        <span style={{ color: "white", fontSize: "18px" }}>
                          0
                        </span>
                        <br />
                        <span style={{ color: "#A39FA1", fontSize: "14px" }}>
                          Free Tokens
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Paper sx={{ width: "100%", overflow: "hidden", background: "none" }}>
        <Container maxWidth="lg">
          <TableContainer
            sx={{
              maxHeight: 440,
              background: "#191015",
              border: "2px solid #F1B80B",
              borderRadius: "10px",
            }}
          >
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                      sx={{ background: "#191015", color: "white" }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell
                            key={column.id}
                            align={column.align}
                            sx={{ color: "white" }}
                          >
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </Paper>
    </>
  );
}

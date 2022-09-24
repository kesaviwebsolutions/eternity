import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Container} from "@mui/system";
import Typography from '@mui/material/Typography';
import Imagelogo5 from "../Components/Images/stakebalance.png";
import Imagelogo4 from "../Components/Images/tokenstake.png";
import Imagelogo6 from "../Components/Images/portfolio.png";
import Imagelogo7 from "../Components/Images/rewardtokens.png";
import { StakeBalace, tokenBalance, getDetails, unstake, emergencyaction } from "./../Web3/Wallets"
import toast, { Toaster } from 'react-hot-toast'

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


const notify = (msg) => toast.success(msg)
const warning = (msg) => toast.error(msg)

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
 
];

export default function Activestake({account}) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [userstake, setUserState] = React.useState(0)
  const [balance, setBalance] = React.useState(0)
  const [stakeEvents, setStakeEvents] = React.useState()
  

  React.useEffect(()=>{
    const init =async()=>{
      const stake = await StakeBalace();
      setUserState(stake)
      const bal = await tokenBalance();
      setBalance(bal)
      const events = await getDetails()
      setStakeEvents(events)
      
    }
    init();
  },[account])

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

const upcommingDate=(time)=>{
    var current = Math.round(new Date().getTime()/1000);
    var seconds =  time-current 
    if(seconds > 0){
      const days = Math.floor(seconds/86400)
      const hour = Math.floor(seconds / 3600) % 24;
      const min = Math.floor(seconds / 60) % 60;
      const sec = seconds % 60;
      // return days+"D :"+hour+"H :"+min+"M :"+sec+"S"
      return days+"D " + hour + "H"
    }
    else{
      return "UNSTAKE"
    }
  } 

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const EmergencyUnstake =async(id)=>{
    const data = await emergencyaction(id);
    if(data.status){
      notify('Unstake Successfully')
      const stake = await StakeBalace();
      setUserState(stake)
      const bal = await tokenBalance();
      setBalance(bal)
    }
  }

  const unStakeAmount = async (id) => {
    const data = await unstake(id)
    if (data.status) {
      notify('Staked Successfully')
      const stake = await StakeBalace();
      setUserState(stake)
      const bal = await tokenBalance();
      setBalance(bal)
    }
  }

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
                          ${userstake}
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
                          {userstake}
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
                          ${balance}
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
                          {balance}
                        </span>
                        <br />
                        <span style={{ color: "#A39FA1", fontSize: "14px" }}>
                          Tokens Balance
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
            {stakeEvents ? <Table stickyHeader aria-label="sticky table">
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
                {stakeEvents.map((row) => {
                  return (
                    <TableRow hover role="checkbox"  tabIndex={-1} key={row[0]} >
                      <TableCell> <Typography color="whitesmoke">{stakeEvents.indexOf(row) + 1}</Typography></TableCell>
                      <TableCell> <Typography color="whitesmoke">{row.amount/10**18}</Typography></TableCell>
                      <TableCell> <Typography color="whitesmoke">{new Date(Number(row.starttime)*1000).toLocaleDateString()}</Typography></TableCell>
                      <TableCell> <Typography color="whitesmoke">{new Date(Number(row.endtime)*1000).toLocaleDateString()}</Typography></TableCell>
                      <TableCell> <Typography color="whitesmoke">{row.lockupDuration}</Typography></TableCell>
                      <TableCell> <Typography color="whitesmoke">{row.claimedReward}</Typography></TableCell>
                      <TableCell>{!row.claimed ? <Typography color="whitesmoke">{ row.endtime < new Date().getTime/1000 ? <Typography color="whitesmoke" onClick={()=>{unStakeAmount(row.id)}}>UNSTAKE</Typography> : <Typography color="whitesmoke" onClick={()=>EmergencyUnstake(row.id)}>Emergency Withdraw</Typography>}</Typography>:<Typography color="whitesmoke">CLAIMED</Typography>}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table> : <Skeleton count={10} height='40' width='100'/>}
          </TableContainer>
        </Container>
      </Paper>
      <Toaster/>
    </>
  );
}

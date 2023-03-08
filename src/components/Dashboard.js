import React, { useEffect, useState } from "react";
import { Button, Grid, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import "./Dashboard.scss";
import { DataGrid } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "./AxiosConfig";

function Dashboard() {
  const DeleteData = (id) => {
    axios.delete("/student/" + id).then((res) => {
      alert("Deleted Successfully...!");
      window.location.reload();
    });
  };

  const [pageSize, setPageSize] = useState(5);

  const columns = [
    { field: "studentId", headerName: "Id", width: "50" },
    { field: "firstName", headerName: "Student Name", width: "200" },
    { field: "uid", headerName: "UID", width: "90" },
    { field: "abcId", headerName: "ABC ID", width: "90" },
    { field: "cluster", headerName: "Clusters", width: "200", sortable: false },
    { field: "course", headerName: "Course", width: "250", sortable: false },
    { field: "emailId", headerName: "Email", width: "250", sortable: false },
    {
      field: "action",
      headerName: "Action",
      width: "90",
      sortable: false,
      renderCell: (params) => (
        <div>
          <IconButton
            onClick={() => {
              DeleteData(params.id);
            }}
          >
            <DeleteIcon />
          </IconButton>
        </div>
      ),
    },
  ];

  const [row, setRow] = useState([]);

  const getData = () => {
    return axios.get("/student").then(({ data }) => {
      const newData = data.data;
      setRow(newData);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  // fetch("http://localhost:5183/api/Student")
  //   .then(
  //     (res) =>
  // console.log(
  //   res.json().then((res) => {
  //     console.log(res);
  //   })
  //       console.log(res)
  //)
  //   )
  //   .catch((err) => console.log(err));

  //  axios.get("http://localhost:5183/api/Student").then((res)=>{
  //   const data = res.json();
  //  }

  return (
    <div style={{ marginTop: "1.5rem", marginLeft: "2rem" }}>
      <span style={{ fontSize: "26px", color: "#666666" }}>
        Manage Students
      </span>
      <hr style={{ marginRight: "2rem", marginBottom: "1rem" }} />

      <Grid container display="flex" alignItems="center">
        <Grid item xs={2}>
          <p
            style={{
              fontSize: "20px",
              marginTop: "5px",
              color: "#00224B",
              fontWeight: "500",
              letterSpacing: "2px",
            }}
          >
            Students List
          </p>
        </Grid>
        <Grid item xs={8}>
          <input type="search" placeholder="Search..." />
        </Grid>
        <Grid item xs={2}>
          <Button
            variant="contained"
            size="small"
            style={{
              background: "black",
              textTransform: "capitalize",
            }}
          >
            <Link to="/manage" style={{ color: "#fff" }}>
              Onboard Students
            </Link>
          </Button>
        </Grid>
      </Grid>

      <div style={{ padding: "0px 30px 0 0", margin: "20px 0 20px 0" }}>
        <div style={{ height: 400, width: "100%" }}>
          <DataGrid
            pagination
            rows={row}
            getRowId={(row) => row.studentId}
            columns={columns}
            pageSize={pageSize}
            onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
            rowsPerPageOptions={[5, 10, 20]}
            checkboxSelection
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

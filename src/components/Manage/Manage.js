import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Manage.scss";
import AddIcon from "@mui/icons-material/Add";
import axios from "../AxiosConfig";
import EducationDetails from "./EducationDetails";

function Manage() {
  const navigate = useNavigate();
  const initialValues = {
    studentId: 0,
    uid: "",
    firstName: "",
    middleName: "",
    lastName: "",
    studentMobile: "",
    emailId: "",
    abcId: "",
    gender: "",
    maritialStatus: "",
    dateOfBirth: "",
    idType: "",
    idNumber: "",
    fatherName: "",
    fatherMobile: "",
    fatherEmail: "",
    motherName: "",
    motherMobile: "",
    motherEmail: "",
    addressLine1: "",
    addressLine2: "",
    country: "",
    state: "",
    city: "",
    postalCode: 0,
    cluster: "",
    department: "",
    course: "",
    other1: "",
    other2: "",
    other3: "",
    other4: "",
    other5: "",
    other6: "",
    educationDetails: [],
  };

  const [formValues, setFormValues] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(name, value);
  };

  const EducationDetailsChange = (details) => {
    setFormValues({ ...formValues, ["educationDetails"]: details });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);

    axios.post("/student", formValues).then(({ data }) => console.log(data));

    // fetch("http://localhost:5183/api/Student", {
    //   method: "POST",
    //   headers: { "content-type": "application/json" },
    //   body: JSON.ify(formValues),
    // })
    //   .then((res) => {
    //     alert("Saved Successfully!");
    //     console.log(formValues);
    //     navigate("/dashboard");
    //   })
    //   .catch((errors) => {
    //     console.log(errors.message);
    //   });
    navigate("/dashboard");
  };

  const handleCancle = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <>
      <Box sx={{ marginLeft: "2rem" }}>
        <Typography component={"span"} style={{ marginTop: "0.8rem" }}>
          <p>
            <Link
              style={{
                textDecoration: "underline",
                fontSize: "14px",
                color: "#68747B",
              }}
            >
              Student Management
            </Link>
            &gt;
            <span style={{ fontSize: "12px", color: "#00224B" }}>
              {" "}
              Onboard Student
            </span>
          </p>
        </Typography>
      </Box>

      <span style={{ marginLeft: "2rem" }}>
        <span
          style={{ fontSize: "24px", letterSpacing: "1px", color: "#68747B" }}
        >
          Onboard Student
        </span>
      </span>

      <div style={{ marginLeft: "2rem" }}>
        <form>
          <h3 style={{ marginTop: "1rem" }}>Student Information</h3>
          <hr style={{ marginRight: "2rem", marginBottom: "1rem" }} />

          <div>
            <Grid container spacing={2} rowGap={3}>
              <Grid display="flex" flexDirection="column" item xs={3}>
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  placeholder="Enter First Name"
                  id="firstName"
                  name="firstName"
                  value={formValues.firstName}
                  onChange={handleChange}
                />
              </Grid>

              <Grid display="flex" flexDirection="column" item xs={3}>
                <label htmlFor="middleName">Middle Name</label>
                <input
                  type="text"
                  placeholder="Enter Middle Name"
                  id="middleName"
                  name="middleName"
                  value={formValues.middleName}
                  onChange={handleChange}
                />
              </Grid>

              <Grid display="flex" flexDirection="column" item xs={3}>
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  placeholder="Enter Last Name"
                  id="lastName"
                  name="lastName"
                  value={formValues.lastName}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>

            <Grid container spacing={2}>
              <Grid display="flex" flexDirection="column" item xs={3}>
                <label htmlFor="studentMobile">Mobile Number</label>
                <input
                  type="text"
                  placeholder="Enter Mobile Number"
                  id="studentMobile"
                  name="studentMobile"
                  value={formValues.studentMobile}
                  onChange={handleChange}
                />
              </Grid>

              <Grid display="flex" flexDirection="column" item xs={3}>
                <label htmlFor="emailId">Email</label>
                <input
                  type="email"
                  placeholder="Enter Email"
                  id="emailId"
                  name="emailId"
                  value={formValues.emailId}
                  onChange={handleChange}
                />
              </Grid>

              <Grid display="flex" flexDirection="column" item xs={3}>
                <label htmlFor="uid">Generated UID</label>
                <input
                  type="text"
                  disabled
                  id="uid"
                  name="uid"
                  value={formValues.uid}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>

            <Grid container spacing={2}>
              <Grid display="flex" flexDirection="column" item xs={3}>
                <label htmlFor="abcId">ABC ID</label>
                <input
                  type="text"
                  placeholder="Enter ABC ID"
                  id="abcId"
                  name="abcId"
                  value={formValues.abcId}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            {/* ************************ */}

            {/* Personal Details */}
            {/* ************************ */}
            <h3>Personal Details</h3>
            <hr style={{ marginRight: "2rem", marginBottom: "1rem" }} />
            <Grid container spacing={2}>
              <Grid display="flex" flexDirection="column" item xs={3}>
                <label htmlFor="gender">Gender</label>
                <input
                  type="text"
                  placeholder="Enter Your Gender"
                  id="gender"
                  name="gender"
                  value={formValues.gender}
                  onChange={handleChange}
                />
              </Grid>

              <Grid display="flex" flexDirection="column" item xs={3}>
                <label htmlFor="maritialStatus">Marital Status</label>
                <input
                  type="text"
                  placeholder="Enter Marital Status"
                  id="maritialStatus"
                  name="maritialStatus"
                  value={formValues.maritialStatus}
                  onChange={handleChange}
                />
              </Grid>

              <Grid display="flex" flexDirection="column" item xs={3}>
                <label htmlFor="dateOfBirth">Date of Birth</label>
                <input
                  type="text"
                  placeholder="Enter Your DOB"
                  id="dateOfBirth"
                  name="dateOfBirth"
                  value={formValues.dateOfBirth}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>

            <Grid container spacing={2}>
              <Grid display="flex" flexDirection="column" item xs={3}>
                <label htmlFor="idType">ID Type</label>
                <input
                  type="text"
                  placeholder="Enter ID Type"
                  id="idType"
                  name="idType"
                  value={formValues.idType}
                  onChange={handleChange}
                />
              </Grid>

              <Grid display="flex" flexDirection="column" item xs={3}>
                <label htmlFor="idNumber">ID Number</label>
                <input
                  type="text"
                  placeholder="Enter ID Number"
                  id="idNumber"
                  name="idNumber"
                  value={formValues.idNumber}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>

            {/* *********************** */}

            {/* Parents Details */}
            {/* *********************** */}
            <h3 style={{ marginBottom: "1rem" }}>Parent Contact Details</h3>
            <Grid container spacing={2}>
              <Grid display="flex" flexDirection="column" item xs={3}>
                <label htmlFor="fatherName">Father's Full Name</label>
                <input
                  type="text"
                  placeholder="Enter Father's Full Name"
                  id="fatherName"
                  name="fatherName"
                  value={formValues.fatherName}
                  onChange={handleChange}
                />
              </Grid>

              <Grid display="flex" flexDirection="column" item xs={3}>
                <label htmlFor="fatherMobile">Mobile Number</label>
                <input
                  type="text"
                  placeholder=""
                  id="fatherMobile"
                  name="fatherMobile"
                  value={formValues.fatherMobile}
                  onChange={handleChange}
                />
              </Grid>

              <Grid display="flex" flexDirection="column" item xs={3}>
                <label htmlFor="fatherEmail">Email</label>
                <input
                  type="text"
                  placeholder="Enter Email"
                  id="fatherEmail"
                  name="fatherEmail"
                  value={formValues.fatherEmail}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>

            <Grid container spacing={2}>
              <Grid display="flex" flexDirection="column" item xs={3}>
                <label htmlFor="motherName">Full Maiden Name of Mother</label>
                <input
                  type="text"
                  placeholder="Enter Full Maiden Name of Mother"
                  id="motherName"
                  name="motherName"
                  value={formValues.motherName}
                  onChange={handleChange}
                />
              </Grid>

              <Grid display="flex" flexDirection="column" item xs={3}>
                <label htmlFor="motherMobile">Mobile Number</label>
                <input
                  type="text"
                  placeholder=""
                  id="motherMobile"
                  name="motherMobile"
                  value={formValues.motherMobile}
                  onChange={handleChange}
                />
              </Grid>

              <Grid display="flex" flexDirection="column" item xs={3}>
                <label htmlFor="motherEmail">Email</label>
                <input
                  type="text"
                  placeholder="Enter Email"
                  id="motherEmail"
                  name="motherEmail"
                  value={formValues.motherEmail}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>

            {/* ************************* */}

            {/* Educational Details */}
            <EducationDetails educationDetailsChange={EducationDetailsChange} />
            {/* *************************** */}

            {/* ****************** */}

            {/* Address */}
            {/* ****************** */}
            <h3>Address</h3>
            <hr style={{ marginRight: "2rem", marginBottom: "1rem" }} />

            <Grid container spacing={2}>
              <Grid display="flex" flexDirection="column" item xs={3}>
                <label htmlFor="addressLine1">Address Line 1</label>
                <input
                  type="text"
                  placeholder="Type Address 1"
                  id="addressLine1"
                  name="addressLine1"
                  value={formValues.addressLine1}
                  onChange={handleChange}
                />
              </Grid>

              <Grid display="flex" flexDirection="column" item xs={3}>
                <label htmlFor="addressLine2">Address Line 2</label>
                <input
                  type="text"
                  placeholder="Type Address 2"
                  id="addressLine2"
                  name="addressLine2"
                  value={formValues.addressLine2}
                  onChange={handleChange}
                />
              </Grid>

              <Grid display="flex" flexDirection="column" item xs={3}>
                <label htmlFor="country">Country</label>
                <input
                  type="text"
                  placeholder="Enter Country"
                  id="country"
                  name="country"
                  value={formValues.country}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>

            <Grid container spacing={2}>
              <Grid display="flex" flexDirection="column" item xs={3}>
                <label htmlFor="state">State/Province</label>
                <input
                  type="text"
                  placeholder="Enter State/Province"
                  id="state"
                  name="state"
                  value={formValues.state}
                  onChange={handleChange}
                />
              </Grid>

              <Grid display="flex" flexDirection="column" item xs={3}>
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  placeholder="Enter city"
                  id="city"
                  name="city"
                  value={formValues.city}
                  onChange={handleChange}
                />
              </Grid>

              <Grid display="flex" flexDirection="column" item xs={3}>
                <label htmlFor="postalCode">Zip/Postal Code</label>
                <input
                  type="number"
                  placeholder="Enter Zip/Postal Code"
                  id="postalCode"
                  name="postalCode"
                  value={formValues.postalCode}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            {/* **************************** */}

            {/* Course Details */}
            {/* ****************** */}
            <h3>Course Details</h3>
            <hr style={{ marginRight: "2rem", marginBottom: "1rem" }} />

            <Grid container spacing={2}>
              <Grid display="flex" flexDirection="column" item xs={3}>
                <label htmlFor="cluster">Cluster</label>
                <input
                  type="text"
                  placeholder="Enter Cluster"
                  id="cluster"
                  name="cluster"
                  value={formValues.cluster}
                  onChange={handleChange}
                />
              </Grid>

              <Grid display="flex" flexDirection="column" item xs={3}>
                <label htmlFor="department">Department</label>
                <input
                  type="text"
                  placeholder="Enter Department"
                  id="department"
                  name="department"
                  value={formValues.department}
                  onChange={handleChange}
                />
              </Grid>

              <Grid display="flex" flexDirection="column" item xs={3}>
                <label htmlFor="course">Course</label>
                <input
                  type="text"
                  placeholder="Enter Course"
                  id="course"
                  name="course"
                  value={formValues.course}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            {/* **************************** */}

            {/* Other */}
            {/* ****************** */}
            <h3>Other</h3>
            <hr style={{ marginRight: "2rem", marginBottom: "1rem" }} />

            <Grid container spacing={2}>
              <Grid display="flex" flexDirection="column" item xs={3}>
                <label htmlFor="other1">Other 1</label>
                <input
                  type="text"
                  placeholder="Enter Other 1"
                  id="other1"
                  name="other1"
                  value={formValues.other1}
                  onChange={handleChange}
                />
              </Grid>

              <Grid display="flex" flexDirection="column" item xs={3}>
                <label htmlFor="other2">Other 2</label>
                <input
                  type="text"
                  placeholder="Enter Other 2"
                  id="other2"
                  name="other2"
                  value={formValues.other2}
                  onChange={handleChange}
                />
              </Grid>

              <Grid display="flex" flexDirection="column" item xs={3}>
                <label htmlFor="other3">Other 3</label>
                <input
                  type="text"
                  placeholder="Enter Other 3"
                  id="other3"
                  name="other3"
                  value={formValues.other3}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>

            <Grid container spacing={2}>
              <Grid display="flex" flexDirection="column" item xs={3}>
                <label htmlFor="other4">Other 4</label>
                <input
                  type="text"
                  placeholder="Enter Other 4"
                  id="other4"
                  name="other4"
                  value={formValues.other4}
                  onChange={handleChange}
                />
              </Grid>

              <Grid display="flex" flexDirection="column" item xs={3}>
                <label htmlFor="other5">Other 5</label>
                <input
                  type="text"
                  placeholder="Enter Other 5"
                  id="other5"
                  name="other5"
                  value={formValues.other5}
                  onChange={handleChange}
                />
              </Grid>

              <Grid display="flex" flexDirection="column" item xs={3}>
                <label htmlFor="other6">Other 6</label>
                <input
                  type="text"
                  placeholder="Enter Other 6"
                  id="other6"
                  name="other6"
                  value={formValues.other6}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
          </div>
          <hr style={{ marginTop: "4rem", marginRight: "2rem" }} />

          <Grid display="flex" justifyContent="end" sx={{ padding: "1rem" }}>
            <Button
              size="medium"
              variant="outlined"
              style={{
                padding: "5px 35px ",
                marginRight: "2rem",
                border: "1px solid #464033",
                fontSize: "12px",
                textTransform: "capitalize",
                color: "#464033",
              }}
              onClick={handleCancle}
            >
              Cancel
            </Button>
            <Button
              size="medium"
              variant="contained"
              style={{
                padding: "5px 35px ",
                marginRight: "2rem",
                background: "#464033",
                fontSize: "12px",
                textTransform: "capitalize",
              }}
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </Grid>
          <hr style={{ marginRight: "2rem" }} />
        </form>
      </div>
    </>
  );
}

export default Manage;

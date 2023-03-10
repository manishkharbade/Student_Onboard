import { Button, Grid } from "@mui/material";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";

function EducationDetails({ educationDetailsChange }) {
  const educationDetails = [
    {
      id: 0,
      educationType: "",
      college: "",
      university: "",
      degree: "",
      studentId: 0,
    },
  ];

  const [formValues, setFormValues] = useState(educationDetails);
  const handleChange = (e, id) => {
    const { name, value } = e.target;
    // console.log(id);
    const newValues = formValues.map((item) => {
      if (item.id === id) {
        item[name] = value;
      }
      return item;
    });

    setFormValues(newValues);
    educationDetailsChange(newValues);
  };
  const handleClick = () => {
    let newFiels = [...formValues];
    newFiels.push({
      id: newFiels.length - 1 + 1,
      educationType: "",
      college: "",
      university: "",
      degree: "",
      studentId: 0,
    });
    setFormValues(newFiels);
  };

  const Details = formValues.map((item) => {
    return (
      <div key={item.id}>
        <Grid container spacing={2}>
          <Grid display="flex" flexDirection="column" item xs={3}>
            <label htmlFor="educationType">Education</label>
            <input
              type="text"
              placeholder="Enter Education"
              id="educationType"
              name="educationType"
              value={item.educationType}
              onChange={(event) => handleChange(event, item.id)}
            />
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid display="flex" flexDirection="column" item xs={3}>
            <label htmlFor="college">School/College</label>
            <input
              type="text"
              placeholder="Enter School/College"
              id="college"
              name="college"
              value={item.college}
              onChange={(event) => handleChange(event, item.id)}
            />
          </Grid>

          <Grid display="flex" flexDirection="column" item xs={3}>
            <label htmlFor="university">University</label>
            <input
              type="text"
              placeholder="Enter University"
              id="university"
              name="university"
              value={item.university}
              onChange={(event) => handleChange(event, item.id)}
            />
          </Grid>

          <Grid display="flex" flexDirection="column" item xs={3}>
            <label htmlFor="degree">Degree</label>
            <input
              type="text"
              placeholder="Enter Degree"
              id="degree"
              name="degree"
              value={item.degree}
              onChange={(event) => handleChange(event, item.id)}
            />
          </Grid>
          <Grid
            item
            alignItems="center"
            display="flex"
            xs={3}
            style={{ outlineColor: "#00224B" }}
          ></Grid>

        </Grid>

      </div>
    );
  });
  return (
    <div>
      <h3>Educational Details</h3>
      <hr style={{ marginRight: "2rem", marginBottom: "1rem" }} />
      {Details}


      <Button
        variant="outlined"
        size="small"
        style={{
          textTransform: "capitalize",
          color: "#00224B",
          border: "1px Solid #00224B",
        }}
        onClick={handleClick}
      >
        <AddIcon /> Add Education
      </Button>

    </div>
  );
}

export default EducationDetails;

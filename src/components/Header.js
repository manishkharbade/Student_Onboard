import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import { Badge, IconButton, Toolbar, Typography } from "@mui/material";
import CampaignIcon from "@mui/icons-material/Campaign";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import "./Header.scss";

function Header() {
  return (
    <AppBar
      position="sticky"
      style={{
        background: "#000",
        boxShadow: "0px 1px 1px .5px #F2F3F6",
        overflow: "hidden",
      }}
    >
      <Toolbar>
        <Typography>
          <Link
            style={{ fontSize: "20px", color: "#fff", letterSpacing: "5px" }}
            to="/"
          >
            Techademy
          </Link>
        </Typography>

        <div className="lists">
          <Link to="/dashboard" className="links">
            Dashboard
          </Link>

          <Link to="/Manage" className="links">
            Manage
          </Link>

          <Link to="/Schedule" className="links">
            Schedule
          </Link>

          <IconButton>
            <Link className="linkbtn" style={{ marginRight: "1.5rem" }}>
              <CampaignIcon />
            </Link>
          </IconButton>

          <IconButton style={{ marginRight: "1rem" }}>
            <Badge color="error" variant="dot">
              <Link className="linkbtn">
                <NotificationsNoneIcon />
              </Link>
            </Badge>
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;

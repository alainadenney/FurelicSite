import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const linkStyle = {
  color: "grey"
}

const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        py: 3,
        backgroundColor: "secondary.main",
        borderTop: "1px solid",
        borderColor: "divider",
        textAlign: "center",
        mt: 5,
      }}
    >
      <Typography variant="body2" color="secondary.contrastText">
        © {new Date().getFullYear()} Furelic. All rights reserved.
      </Typography>
      <Typography variant="body2" color="secondary.contrastText">
        <Link to="/terms-of-service" style={linkStyle}>Terms</Link>
      </Typography>
      <Typography variant="body2" color="secondary.contrastText">
        <Link to="/privacy-policy" style={linkStyle}>Privacy</Link>
      </Typography>
    </Box>
  );
};

export default Footer;

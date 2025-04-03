import { Box } from "@mui/material";
import NavBar from "../components/navBar";
import Footer from "../pageSections/footer";

function PrivacyPage() {
  return (
    <>
      <NavBar />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Footer></Footer>
      </Box>
    </>
  );
}

export default PrivacyPage;

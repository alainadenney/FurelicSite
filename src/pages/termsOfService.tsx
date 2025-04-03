import { Box } from "@mui/material";
import NavBar from "../components/navBar";
import Footer from "../pageSections/footer";

function TermsPage() {
  return (
    <>
      <NavBar />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Footer></Footer>
      </Box>
    </>
  );
}

export default TermsPage;
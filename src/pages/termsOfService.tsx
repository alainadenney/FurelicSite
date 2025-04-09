import NavBar from "../components/navBar";
import Footer from "../pageSections/footer";
import { Box, Container, Typography } from "@mui/material";

function TermsPage() {
  return (
    <>
      <NavBar />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box sx={{ height: "4.5em" }}></Box>
      <Container>
      <Typography variant="h4" sx={{ fontWeight: "bold" }}>
        Furelic Terms of Service
      </Typography>
      <span><em>Effective April 3, 2025</em></span>
      <ol type="1">
      <li> 
        <h4>Overview of Services</h4>
        <span>Furelic provides a software platform for property managers and residents to 
          manage pet-related data, including documentation, fee tracking, and 
          communication tools. We do not process payments or make legal housing
          determinations.
        </span>
      </li>
      <li>
        <h4>Eligibility</h4>
        <span>Users must be 18 years or older or have appropriate authorization to act on
        behalf of a business entity.</span>
      </li>
      <li>
        <h4>Account Registration</h4>
        <span>Users are responsible for maintaining secure login credentials. Furelic is not liable
        for activity resulting from unauthorized account access.</span>
      </li>
      <li>
        <h4>User Responsibilities</h4>
        <span>All users agree to provide accurate information and use the platform only in
        compliance with applicable laws.</span>
      </li>
      <li>
        <h4>Pet and Assistance Animal Information</h4>
        <span>
        Furelic enables users to submit pet, ESA, or service animal documentation.
        Furelic does not independently verify or approve such claims.
        </span>
      </li>
      <li>
        <h4>Fee Monitoring and Communication</h4>
        <span>Furelic tracks the status of pet-related fees but does not collect payments or
        enforce policy compliance.</span>
      </li>
      <li>
        <h4>Privacy and Data Handling</h4>
        <span>Refer to our Privacy Policy for how we collect, use, and protect personal data.</span>
      </li>
      <li>
        <h4>Intellectual Property</h4>
        <span>All platform materials, branding, and content are owned by Furelic or its licensors.
        No unauthorized use is permitted.</span>
      </li>
      <li>
        <h4>Termination</h4>
        <span>
        Furelic may suspend or terminate access for violations of these terms or misuse
        of the platform.
        </span>
      </li>
      <li>
        <h4>Disclaimers</h4>
        <span>
        The service is provided "as is" without warranties of any kind. We do not
        guarantee uninterrupted or error-free operation.
        </span>
      </li>
      <li>
        <h4>Limitation of Liability</h4>
        <span>
        To the fullest extent allowed by law, Furelic is not liable for indirect, incidental, or
        consequential damages.
        </span>
      </li>
      <li>
        <h4>Modifications to Terms</h4>
        <span>
        We may update these terms and will notify users of significant changes via email
        or platform notification.
        </span>
      </li>
      <li>
        <h4>Contact Us</h4>
        <span>
        For questions, email support@furelic.com.
        </span>
      </li>
      </ol>
      </Container>
        <Footer></Footer>
      </Box>
    </>
  );
}

export default TermsPage;
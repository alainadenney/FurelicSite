import NavBar from "../components/navBar";
import Footer from "../pageSections/footer";
import { Box, Container, Typography } from "@mui/material";

function PrivacyPage() {
  return (
    <>
      <NavBar />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box sx={{ height: "4.5em" }}></Box>
      <Container>
      <Typography variant="h4" sx={{ fontWeight: "bold" }}>
        Furelic Privacy Policy
      </Typography>
      <span><em>Effective April 3, 2025</em></span>
      <ol type="1">
      <li> 
        <h4>Information We Collect</h4>
        <span>
        We collect personal information from both residents and property managers when
        using our services. This may include:
        <ul>
          <li>Account and contact details (name, email, phone number)</li>
          <li>Property details and affiliation</li>
          <li>Pet or animal information (name, breed, vaccination history, ESA/service
            animal documentation)</li>
          <li>Platform usage logs (IP address, browser type, device identifiers)</li>
        </ul>
        </span>
      </li>
      <li>
        <h4>How We Use Your Information</h4>
        <span>
          Your information is used to: 
          <ul>
            <li>Deliver, operate, and improve our services</li>
            <li>Support policy compliance between residents and property managers</li>
            <li>Send communications and reminders regarding documentation status</li>
            <li>Comply with applicable legal and regulatory requirements</li>
          </ul>
        </span>
      </li>
      <li>
        <h4>Data Sharing</h4>
        <span>
        We do not sell your information. Limited data may be shared with:
        <ul>
          <li>Authorized personnel at your property management company</li>
          <li>Service providers who assist with hosting, support, or communications</li>
          <li>Legal authorities, if required by law</li>
        </ul>
        </span>
      </li>
      <li>
        <h4>Data Retention</h4>
        <span>
        We retain your personal data only for as long as necessary to provide services
        and meet legal obligations. Data may be retained longer in anonymized form for
        analytical purposes.
        </span>
      </li>
      <li>
        <h4>Security</h4>
        <span>
        We implement industry-standard safeguards to protect your data. These include
        access controls, encryption, secure authentication, and regular system
        monitoring.
        </span>
      </li>
      <li>
        <h4>Your Rights</h4>
        <span>
          You have the right to: 
          <ul>
            <li>Access and review your personal information</li>
            <li>Request corrections or updates</li>
            <li>Request deletion of personal data where legally permissible</li>
            <li>Withdraw consent, if applicable</li>
          </ul>
        </span>
        <p></p>
        <span>
        To exercise these rights, email us at support@furelic.com.
        </span>
      </li>
      <li>
        <h4>Children's Privacy</h4>
        <span>Furelic does not knowingly collect or store personal data from children under the
        age of 13. If we learn that we have done so, we will delete the data promptly.</span>
      </li>
      <li>
        <h4>Changes To This Policy</h4>
        <span>
        We may revise this Privacy Policy periodically. We will notify users of material
        changes through email or a notice on the platform.
        </span>
      </li>
      <li>
        <h4>Contact Us</h4>
        <span>For privacy-related questions or requests, contact us at support@furelic.com.</span>
      </li>
      </ol>
      </Container>
        <Footer></Footer>
      </Box>
    </>
  );
}

export default PrivacyPage;

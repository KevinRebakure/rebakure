import {
  Box,
  Container,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import HeroSection from "./components/layout/HeroSection";
import NavBar from "./components/layout/NavBar";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container>
        <Stack spacing={15}>
          {/* Hero section */}
          <Box
            sx={{
              backgroundImage:
                "url('https://img.freepik.com/free-photo/abstract-textured-backgound_1258-30471.jpg?t=st=1740325129~exp=1740328729~hmac=6af6cabd4bdfa231bb7673cf7085d22239eb86e365babd75c3eb4a4ce8c2aed2&w=900')",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <NavBar />
            <HeroSection />
          </Box>

          {/* Welcoming text */}
          <Box>
            <Typography variant="h2" component="p" textAlign="center">
              Let's learn and build stuff together
            </Typography>
            <Typography variant="body1" component="p" textAlign="center">
              The goal is not only to learn how to write good code, but also to
              keep everything structured and organized.
            </Typography>
          </Box>

          {/* Why I'm building this */}
          <Box>
            <Typography variant="h4" component="p">
              This is not just a portfolio
            </Typography>
            <Typography variant="body1" component="p">
              The goal is not only to learn how to write good code, but also to
              keep everything structured and organized.
            </Typography>
            <Typography variant="body1" component="p">
              I'm building this to:
            </Typography>
            <List>
              {reasons.map((reason) => (
                <ListItem>
                  <ListItemText primary={reason} />
                </ListItem>
              ))}
            </List>
          </Box>

          {/* Community */}

          <Box>
            <Typography variant="h4" component="p">
              Community
            </Typography>
            <Typography variant="body1" component="p">
              I'm looking forward to engage with all of you. Let's share our
              experiences.
            </Typography>

            <List>
              {community.map((community) => (
                <ListItem>
                  <ListItemText primary={community} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Stack>
      </Container>
    </ThemeProvider>
  );
}

const reasons = [
  "Have fun in coding",
  "Learn while building small but practical projects",
  "Learn how to organize stuff and think like an engineer",
  "Keep iterating and learning through real practical challenges and user feedbacks",
];

const community = [
  "All projects will be open source",
  "I welcome y'all to contribute",
  "Everyone will also be able to share their projects here and let others contribute to them as well",
];

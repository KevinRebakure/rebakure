import { Box } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import AboutMe from "./components/layout/AboutMe";
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
      <AboutMe />
    </ThemeProvider>
  );
}

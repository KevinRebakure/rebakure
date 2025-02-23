import { Container } from "@mui/material";
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
        <NavBar />
        <HeroSection />
      </Container>
    </ThemeProvider>
  );
}

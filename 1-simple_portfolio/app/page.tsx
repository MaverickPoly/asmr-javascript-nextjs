import About from "@/components/About";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import { Edit } from "@mui/icons-material";
import { Fab, Typography } from "@mui/material";
import {AppBar} from "@mui/material";

export default function Home() {
  return (
    <div style={{padding: "15px"}}>
      <About />
      <Projects />
      <Contact />
      <Fab 
        variant="circular" 
        color="error"
        style={{position: "fixed", bottom: "20px", right: "20px"}}>
        <Edit />
      </Fab>
    </div>
  );
}

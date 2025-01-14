"use client"

import { ArrowRight } from "@mui/icons-material";
import { Chip, Container, Divider, Typography } from "@mui/material"


const About = () => {
    const handleClick = () => {

    }

    return (
        <section id="about">
            <Container sx={{padding: '2rem 0', display: "flex", justifyContent: "center", flexDirection: "column", height: "50vh", alignItems: "start"}}>
                <Typography variant="h4" gutterBottom>
                    About Me
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Hello! I'm a passionate developer specializing 
                    in building awesome web applications.
                </Typography>
                <Divider style={{width: "100%", margin: "20px 0px"}}/>
                <Chip label="Recent Release " icon={<ArrowRight />} variant="outlined" onClick={handleClick}/>
            </Container>
        </section>
    );
};


export default About;
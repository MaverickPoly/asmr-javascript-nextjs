import { Button, Container, TextField, Typography } from "@mui/material"

const Contact = () => {
    return (
        <section id="contact">
            <Container>
                <Typography variant="h4" gutterBottom>
                    Contact Me
                </Typography>
                <form noValidate autoComplete="off">
                    <TextField label="Name" fullWidth margin="normal" variant="standard"/>
                    <TextField label="Email"  fullWidth margin="normal"/>
                    <TextField label="Message" multiline rows={4} fullWidth margin="normal"/>
                    <Button variant="contained" color="secondary" sx={{mt: 3}}>
                        Send
                    </Button>
                </form>
            </Container>
        </section>
    )
}

export default Contact;
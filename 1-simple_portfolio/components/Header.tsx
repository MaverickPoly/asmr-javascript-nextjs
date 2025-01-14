import { AppBar, Button, Toolbar, Typography } from "@mui/material"

const Header = () => {
    return (
        <AppBar position="sticky" color="primary">
            <Toolbar>
                <Typography variant="h5" component="div" sx={{flexGrow: 1}}>
                    Portfolio
                </Typography>
                <Button color="inherit" href="#about">About</Button>
                <Button color="inherit" href="#projects">Projects</Button>
                <Button color="inherit" href="#contact">Contact</Button>
            </Toolbar>
        </AppBar>
    )
}

export default Header;
import {AppBar, Button, Toolbar, Typography} from "@mui/material";

export default function Header() {

    return (
        <AppBar position="static" color="default">
            <Toolbar>
                <Typography variant="h4" sx={{flexGrow: 1}}>
                    Ecommerce App
                </Typography>
                <Button href="/">
                    Home
                </Button>
                <Button href="/cart">
                    Cart
                </Button>
            </Toolbar>
        </AppBar>
    )
}
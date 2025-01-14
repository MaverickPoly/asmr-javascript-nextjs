import {Button, Typography} from "@mui/material";

export default function Hero() {
    return (
        <div className="bg-blue-500 text-white py-20 px-10 text-center">
            <Typography variant="h2" gutterBottom>
                Welcome to Our store!
            </Typography>
            <Typography variant="body1" gutterBottom>
                Discover amazing products in my super store at unbeatable prices.
            </Typography>
            <Button color="secondary" variant="contained">
                Shop Now
            </Button>
        </div>
    );
};

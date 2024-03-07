'use client';
import { Box, Container, Grid, Typography } from '@mui/material';
import { createCustomTheme } from '../Theme/theme';
import ButtonComp from '../Components/common/Button/Button';

const Page = () => {
    const theme = createCustomTheme();
    return (
        <Container maxWidth="xlg">
            <Box sx={{ minHeight: "280px", width: "100%", backgroundColor: theme.palette.primary.main, display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Grid container sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Grid item lg={8} sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", color: "#fff" }}>
                        <Typography>Free Shipping</Typography>
                        <Typography>ON ORDERS OVER $50 - USE COUPON CODE OVER50</Typography>
                        <Box sx={{ width: "100%", display: "flex", justifyContent: "space-evenly" }}>
                            <ButtonComp text={"Shop Women"} sx={{ backgroundColor: "none", border: "2px solid #fff", borderRadius: "0px", padding: "8px 40px" }} />
                            <ButtonComp text={"Shop Men"} sx={{ backgroundColor: "none", border: "2px solid #fff", borderRadius: "0px", padding: "8px 40px" }} />
                            <ButtonComp text={"Shop Sale"} sx={{ backgroundColor: "none", border: "2px solid #fff", borderRadius: "0px", padding: "8px 40px" }} />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default Page;

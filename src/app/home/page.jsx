'use client';
import { Box, Container, Grid, Typography } from '@mui/material';
import { createCustomTheme } from '../Theme/theme';
import ButtonComp from '../common/Button/Button';
import BannerSections from '../Components/BannerSections/BannerSections';
import ImagesSection from '../Components/ImagesSection/ImagesSection';
import Heading from '../common/Heading/Heading';
import NewArrivals from '../Components/NewArrivals/NewArrivals';

const Page = () => {
    const theme = createCustomTheme();
    return (
        <Container maxWidth="xlg">
            <BannerSections />
            <ImagesSection />
            <NewArrivals />
        </Container>
    );
};

export default Page;

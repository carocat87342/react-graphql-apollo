import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import flashFill from '@iconify/icons-eva/flash-fill';
import { Link as RouterLink } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
import { Button, Box, Link, Container, Typography, Stack, Card, CardContent, CardMedia } from '@mui/material';
//
import { varFadeIn, varFadeInUp, varWrapEnter, varFadeInRight } from '../../animate';

// ----------------------------------------------------------------------

const RootStyle = styled(motion.div)(({ theme }) => ({
  position: 'relative',
  background: 'url(/images/sample-nft.jpg)',
  backgroundSize: '200% 400%',
  [theme.breakpoints.up('md')]: {
    top: 0,
    left: 0,
    width: '100%',
    height: '80vh',
    display: 'flex',
    position: 'fixed',
    alignItems: 'center'
  }
}));

const ContentStyle = styled((props) => <Stack spacing={5} {...props} />)(({ theme }) => ({
  zIndex: 10,
  position: 'relative'
}));

const HeroOverlayStyle = styled(motion.div)({
  zIndex: 9,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
  background: 'rgba(255, 255, 255, 0.8)',
  backdropFilter: 'blur(20px)'
});

// ----------------------------------------------------------------------

export default function LandingHero() {
  return (
    <>
      <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
        <HeroOverlayStyle alt="overlay" />

        <Container maxWidth="lg">
          <ContentStyle>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <Stack spacing={5}>
                <motion.div variants={varFadeInRight}>
                  <Typography variant="h2">
                    Create, Sell and Buy <br />
                    Ruffy NFTs in Ruffy World!
                  </Typography>
                </motion.div>

                <motion.div variants={varFadeInRight}>
                  <Typography variant="h4">
                    Meta Ruffy is the world's <br /> largest metaverse
                  </Typography>
                </motion.div>

                <Stack direction="row" spacing={5}>
                  <Button
                    component={RouterLink}
                    to="/explore"
                    size="large"
                    color="info"
                    variant="contained"
                    sx={{ width: 160 }}
                  >
                    Explore
                  </Button>
                  <Button size="large" color="info" variant="outlined" sx={{ width: 160 }}>
                    Create
                  </Button>
                </Stack>
              </Stack>

              <Card sx={{ width: 560 }}>
                <CardMedia component="img" height="400" image="/images/sample-nft.jpg" alt="green iguana" />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Meta Ruffy #1111
                  </Typography>
                </CardContent>
              </Card>
            </Stack>
          </ContentStyle>
        </Container>
      </RootStyle>
      <Box sx={{ height: { md: '100vh' } }} />
    </>
  );
}

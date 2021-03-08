import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Carousel from "react-material-ui-carousel";
import Image from "next/image";
import React from "react";
import { useStyles } from "./style";
import { cards } from "./cards";

export default function MainOrder() {
  const classes = useStyles();

  return <main className={classes.main}>
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Box display="flex" alignItems="between" justify="space-around" flexDirection="column" height="100%">
            <Typography component="h1" className={classes.mainTitle}>
              Indywidualnie dopasowane dywaniki samochodowe EVA
            </Typography>
            <Typography component="p" className={classes.description}>
              For those who value in-car cleanliness, functionality and authentic design
            </Typography>
            <Box>
              <Button className={classes.chooseKitButton}>Выберите свой набор</Button>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Carousel
            autoPlay={false}
            timeout={100}
            navButtonsAlwaysInvisible={true}
          >
            <Image src="/main/main.png" width={600} height={435} alt="" loading="eager" priority/>
            <Image src="/main/main2.png" width={600} height={435} alt="" loading="eager" priority/>
          </Carousel>
        </Grid>
        <Grid container display="flex" width="100%" style={{ marginTop: "60px" }}>
          {
            cards.map(({ src, alt, topText, bottomText }, i) =>
              <Grid container item sm={4} display="flex" justify="center" key={i}>
                <Box className={classes.mainInfoContainer} xs={12}>
                  <Box className={classes.image}>
                    <Image
                      src={src}
                      width={68}
                      height={68}
                      alt={alt}
                      loading="eager"
                    />
                  </Box>
                  <Box className={classes.info}>
                    <span>{topText}</span>
                    <p>{bottomText}</p>
                  </Box>
                </Box>
              </Grid>)
          }
        </Grid>
      </Grid>
    </Container>
  </main>
}
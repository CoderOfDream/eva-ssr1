import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import React from "react";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./styles";
import Box from "@material-ui/core/Box";
import Image from "next/image";
import { cards } from "./cards";

export default function KeyQualities() {
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <Typography component="h2" className={classes.mainTitle}>
        Key qualities
      </Typography>
      <Grid container spacing={3} justify="center">
        {
          cards.map(({ src, alt, topText, bottomText }, i) =>
            <Grid item xs={12} sm={4} display="flex" key={i}>
              <Box className={classes.mainInfoContainer} xs={12}>
                <Box className={classes.image}>
                  <Image
                    src={src}
                    width={230}
                    height={230}
                    alt={alt}
                    loading="eager"
                  />
                </Box>
                <Box className={classes.info}>
                  <h2>{topText}</h2>
                  <p>{bottomText}</p>
                </Box>
              </Box>
            </Grid>)
        }
      </Grid>
      <Grid container spacing={3}>
        <Grid container item xs={12} sm={5} display="flex" justify="center">
          <Image
            src="/main/mesh.jpg"
            width={408}
            height={306}
            alt="mesh"
            loading="eager"
          />
        </Grid>
        <Grid item xs={12} sm={7}>
          <Image
            src="/main/rombs.png"
            width={70}
            height={70}
            alt="rombs"
            loading="eager"
          />
          <Typography component="h2" className={classes.meshDescriptionTitle}>
            Unikalny kształt komórek wewnątrz dywaników
          </Typography>
          <p>
            Komórki o kształtach Rombu oraz Plastra Miodu umożliwiają bezpieczne utrzymywanie do 2 litrów płynów i brudu
          </p>
        </Grid>
      </Grid>
    </Container>
  )
}
import Typography from "@material-ui/core/Typography";
import React from "react";
import { useStyles } from "./style";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Image from "next/image";
import { cards } from "./cards";

export default function OurClients() {
  const classes = useStyles();

  return (
    <section className={classes.container}>
      <Container maxWidth="lg">
        <Box display="flex" justify="center" flexDirection="column" alignItems="center">
          <Typography component="h2" className={classes.mainTitle}>
            Out Clients
          </Typography>
          <Typography component="h5" className={classes.description}>
            Zobacz jak wyglądają dywaniki EVA naszej produkcji w samochodach tych, którzy nam zaufali
          </Typography>
        </Box>
        <Grid container spacing={3}>
          {
            cards.map(({ src }, i) =>
              <Grid container item xs={12} sm={3} display="flex" justify="center" key={i}>
                <Box className={classes.mainInfoContainer} xs={12} display="flex">
                  <Box className={classes.image}>
                    <Image
                      src={src}
                      width="300px"
                      height="300px"
                      alt=""
                    />
                  </Box>
                </Box>
              </Grid>)
          }
        </Grid>
      </Container>
    </section>
  )
}

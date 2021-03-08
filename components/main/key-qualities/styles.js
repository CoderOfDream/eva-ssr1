import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  mainTitle: {
    color: "#0C0C0C",
    fontFamily: "Montserrat, Sans-serif",
    fontSize: "34px",
    fontWeight: 800,
    margin: "50px 0"
  },
  meshDescriptionTitle: {
    fontWeight: "bold",
    fontFamily: "Montserrat, Sans-serif",
    fontSize: "28px"
  },
  mainInfoContainer: {
    display: "flex",
    flexDirection: "column",
    "&.img": {
      padding: "20px"
    },
    "@media (max-width: 900px)": {
      justifyContent: "center"
    }
  },
  image: {
    margin: "0 auto"
  },
  info: {
    padding: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    "& h2": {
      fontFamily: "Montserrat, Sans-serif",
      margin: "0 0 10px 0",
      fontWeight: "bold",
      height: "40px",
      fontSize: "20px",
      lineHeight: 1
    },
    "& p": {
      fontWeight: 400,
      fontSize: "14px",
      color: "#3F3F3F"
    }
  },
  main: {
    backgroundImage: `url(./main/background.png)`,
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    marginTop: "121px"
  }
}))
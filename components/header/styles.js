import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "#0c0c0c",
    padding: "16px 0 16px 0",
    "@media (max-width: 900px)": {
      paddingLeft: 0,
    },
  },
  menuButton: {
    $this: "&",
    fontFamily: "Montserrat, Sans-serif",
    fontWeight: 800,
    size: "14px",
    padding: "7px 0",
    // transition: "background-color 0s, box-shadow: 0.3s",
    marginLeft: "30px",
    borderRadius: "0",
    textTransform: "capitalize",
    "&:nth-last-child(1)": {
      paddingRight: 0
    },
    "&:hover": {
      color: "#CE2B2B",
      boxShadow: "0 5px 0px 0px #CE2B2B"
    },
    "&-active": {
      color: "#CE2B2B",
      boxShadow: "0 5px 0px 0px #CE2B2B"
    }
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  drawerContainer: {
    padding: "20px 30px",
  },
}));
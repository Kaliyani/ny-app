import { Backdrop, CircularProgress, Box } from "@mui/material";
import { useSelector } from "react-redux";
import { getShowLoader } from "../../app/redux/selectors";

const Loader = () => {
  const isLoading = useSelector(getShowLoader);
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={isLoading}
      data-testid="loader"
    >
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <CircularProgress color="inherit" data-testid="circular-progress" />
        <Box mt={2}>Loading...</Box>
      </Box>
    </Backdrop>
  );
};

export default Loader;

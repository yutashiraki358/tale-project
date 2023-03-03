import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { HeaderRight } from "./HeaderRight";
import { SearchBase } from "./Search";

export const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            メルカリクローン
          </Typography>
          <SearchBase />
          <Box sx={{ flexGrow: 1 }} />
          <HeaderRight />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

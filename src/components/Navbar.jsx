import { AppBar, Typography, Box, Toolbar } from "@mui/material";
import EditNoteIcon from "@mui/icons-material/EditNote";

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ display: "flex" }}>
      <Box>
        <Toolbar variant="dense">
          <EditNoteIcon />
          <Typography marginInline={1}>Daily_Notes</Typography>
        </Toolbar>
      </Box>
    </AppBar>
  );
};

export default Navbar;

import InputField from "./components/InputField";
import ListGroup from "./components/ListGroup";
import Navbar from "./components/Navbar";
import {
  Box,
  Stack,
  Typography,
  Container,
} from "@mui/material";

const App = () => {
  return (
    <>
      <Box>
        <Navbar />
        <Stack
          display={"flex"}
          direction={"column"}
          spacing={2}
          justifyContent={"space-between"}
          alignItems={"center"}
          mt={3}
        >
          <Typography variant="h4">Enter Your TODO</Typography>
          <InputField />
          <Container maxWidth="sm">
            <ListGroup />
          </Container>
        </Stack>
      </Box>
    </>
  );
};

export default App;

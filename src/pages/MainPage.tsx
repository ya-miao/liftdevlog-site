import { Box, Stack, Typography } from "@mui/material";

// TODO: Let's place tabs in here
const MainPage = () => {
  return (
    <Box
      height="100%"
      display="flex"
      justifyContent="center"
      flexDirection="column"
      sx={{ m: 4 }}
    >
      <Stack spacing={2}>
        <Typography variant='h4'>Early Stage & Under Construction</Typography>
      </Stack>
    </Box>
  )
};

export default MainPage;
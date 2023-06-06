import { Box, Stack, Typography } from "@mui/material";

import { Routes, Route, Outlet, Link } from "react-router-dom";

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
      {/* <Stack spacing={2}>
        <Typography variant='h4'>Under Construction</Typography>
      </Stack> */}
      <Routes>
        <Route path="/" element={<>Root</>} />
        <Route path="about" element={<>About</>} />
        <Route path="projects" element={<>Projects</>} />
        <Route path="updates" element={<>Updates</>} />
        <Route path="suggestions" element={<>Suggestions</>} />
        <Route path="reports" element={<>Reports</>} />
      </Routes>
    </Box>
  )
};

export default MainPage;
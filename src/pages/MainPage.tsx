import { Box, Stack, Typography } from "@mui/material";

import { Routes, Route, Outlet, Link } from "react-router-dom";

import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import ProjectsPage from "./ProjectsPage";
import UpdatesPage from "./UpdatesPage";
import SuggestionsPage from "./SuggestionsPage";
import ReportsPage from "./ReportsPage";

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
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="updates" element={<UpdatesPage/>} />
        <Route path="suggestions" element={<SuggestionsPage />} />
        <Route path="reports" element={<ReportsPage />} />
      </Routes>
    </Box>
  )
};

export default MainPage;
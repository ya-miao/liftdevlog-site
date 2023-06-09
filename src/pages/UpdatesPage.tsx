import { Avatar, Accordion, AccordionDetails, AccordionSummary, Box, Button, Card, CardContent, Divider, Grid, IconButton, Snackbar, Stack, Typography } from "@mui/material";

const UpdatesPage = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Stack direction='column' alignItems='center' justifyContent='center' spacing={2}>
                  <Typography variant='h4'>
                    UPDATES
                  </Typography>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ backgroundColor: '#ffffff', color: '#000000' }}>
          <CardContent sx={{ m: 1 }}>
            <Stack alignItems='center' justifyContent='center' spacing={2}>
              <Typography variant='h5'>
                Coming Soon
              </Typography>
            </Stack>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
};

export default UpdatesPage;
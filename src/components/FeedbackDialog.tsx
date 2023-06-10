import React, { useState } from "react";

import { Box, Button, Card, CardContent, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, InputLabel, MenuItem, Paper, TextField, Typography, Stack, Grid, Select } from "@mui/material";

import { SelectChangeEvent } from '@mui/material/Select';

import FeedbackSnackbar from "../components/FeedbackSnackbar";

// import { API } from "aws-amplify";
// import * as mutations from '../graphql/mutations';

// import ContactSnackbar from "./ContactSnackbar";

interface FeedbackDialogProps {
  open: boolean;
  onClose: () => void;
}

const FeedbackDialog = ({ open, onClose }: FeedbackDialogProps) => {

  const [feedbackType, setFeedbackType] = useState('');
  const handleChange = (event: SelectChangeEvent) => {
    setFeedbackType(event.target.value as string);
  };

  const [openSnackbar, setOpenSnackbar] = useState(false);

  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formInquiry, setFormInquiry] = useState('');

  const [isFilledOut, setIsFilledOut] = useState(false);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormName(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormEmail(event.target.value);
  };

  const handleInquiryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormInquiry(event.target.value);
  };

  const handleCloseSnackbar = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };

  const createNewInquiry = async () => {
    // if (formName === '' || formEmail === '' || formInquiry === '') {
    //   setIsFilledOut(false);
    // } else {
    //   setIsFilledOut(true);
    //   try {
    //     const newTodo = await API.graphql({
    //       query: mutations.createInquiry,
    //       variables: {
    //         input: {
    //           name: formName,
    //           email: formEmail,
    //           inquiry: formInquiry,
    //         }
    //       }
    //     });
    //   } catch (error) {
    //   }
    //   onClose();
    // }
  };

  return (
    <>
      <Dialog onClose={onClose} open={open} fullWidth={true} maxWidth='sm' sx={{ m: 2 }}>
        <DialogTitle>
          <Typography variant='h5'>
            Feedback Form
          </Typography>
        </DialogTitle>
        <DialogContent>
          {/* <DialogContentText sx={{ mb: 2 }}>Enter your contact info and inquiry.</DialogContentText> */}
          <Stack spacing={2}>
            {/* <Typography>Enter your name, email, and feedback.</Typography> */}
            <Card sx={{ backgroundColor: '#eaeaea' }}>
              <CardContent sx={{ m: 0.5 }}>
                <Stack spacing={3}>
                  <Grid container display='flex' spacing={2}>
                    <Grid item xs={12}>
                      <Box sx={{ minWidth: 120 }}>
                        <FormControl size="small" variant="filled" fullWidth>
                          <InputLabel>Category</InputLabel>
                          <Select
                            value={feedbackType}
                            label="Feedback"
                            onChange={handleChange}
                          >
                            <MenuItem value='Report'>Report A Bug</MenuItem>
                            <MenuItem value='Suggestion'>Suggest A Feature</MenuItem>
                          </Select>
                        </FormControl>
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField size='small' label='Name' variant='filled' fullWidth onChange={handleNameChange} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField size='small' label='Email' variant='filled' fullWidth onChange={handleEmailChange} />
                    </Grid>
                  </Grid>
                  <TextField size='small' variant='filled' multiline rows={5} label='Feedback' onChange={(handleInquiryChange)} />
                </Stack>
              </CardContent>
            </Card>
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button sx={{ mb: 2, mr: 1 }} variant='outlined' size='small' onClick={onClose}>Cancel</Button>
          <Button sx={{ mb: 2, mr: 2 }} variant='contained' size='small' onClick={() => {
            // createNewInquiry();
            setOpenSnackbar(true);
            // onClose();
          }}>Submit</Button>
        </DialogActions>
      </Dialog>
      {/* <ContactSnackbar isFilledOut={isFilledOut} openSnackbar={openSnackbar} handleCloseSnackbar={handleCloseSnackbar} /> */}
      <FeedbackSnackbar openSnackbar={openSnackbar} handleCloseSnackbar={handleCloseSnackbar} />
    </>
  );
};

export default FeedbackDialog;
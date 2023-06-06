import React, { useState } from "react";

import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, Typography, Stack, Grid } from "@mui/material";

// import { API } from "aws-amplify";
// import * as mutations from '../graphql/mutations';

// import ContactSnackbar from "./ContactSnackbar";

interface ContactDialogProps {
  open: boolean;
  onClose: () => void;
}

const ContactDialog = ({ open, onClose }: ContactDialogProps) => {

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
        <DialogTitle>Contact Me</DialogTitle>
        <DialogContent>
          {/* <DialogContentText sx={{ mb: 2 }}>Enter your contact info and inquiry.</DialogContentText> */}
          {/* <Stack spacing={1.5} alignItems='center' justifyContent='center'> */}
          <Stack spacing={1.5}>
            <Typography>
              Early Stage Visitor,
            </Typography>
            {/* <Stack spacing={0.5} alignItems='center' justifyContent='center'> */}
            <Stack spacing={0.5}>
              {/* <Typography>Welcome.</Typography> */}
              <Typography>
                I am best reached via email at liz@liftdevlog.co.
              </Typography>
            </Stack>
            <Typography>
              Founder, Liz Dev
            </Typography>
          </Stack>
          {/* <Stack spacing={3}>
            <Grid container display='flex' spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField size='small' label='Name' variant='filled' fullWidth onChange={handleNameChange} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField  size='small'label='Email' variant='filled' fullWidth onChange={handleEmailChange} />
              </Grid>
            </Grid>
            <TextField size='small' variant='filled' multiline rows={8} label='Inquiry' onChange={(handleInquiryChange)} />
          </Stack> */}
        </DialogContent>
        {/* <DialogActions>
          <Button size='small' onClick={onClose}>Cancel</Button>
          <Button size='small' onClick={() => {
            createNewInquiry();
            setOpenSnackbar(true);
          }}>Send</Button>
        </DialogActions> */}
      </Dialog>
      {/* <ContactSnackbar isFilledOut={isFilledOut} openSnackbar={openSnackbar} handleCloseSnackbar={handleCloseSnackbar} /> */}
    </>
  );
};

export default ContactDialog;
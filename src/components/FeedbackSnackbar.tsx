import React from "react";

import { Alert, IconButton, Snackbar } from "@mui/material";

import CloseIcon from '@mui/icons-material/Close';

interface FeedbackSnackbarProps {
  //   isFilledOut: boolean;
  openSnackbar: boolean;
  handleCloseSnackbar: (event: React.SyntheticEvent | Event, reason?: string) => void;
}

// const FeedbackSnackbar = ( { isFilledOut, openSnackbar, handleCloseSnackbar }: FeedbackSnackbarProps ) => {
const FeedbackSnackbar = ({ openSnackbar, handleCloseSnackbar }: FeedbackSnackbarProps) => {
  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        onClick={handleCloseSnackbar}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      open={openSnackbar}
      autoHideDuration={6000}
      onClose={handleCloseSnackbar}
      action={action}
    >
      {/* <Alert onClose={handleCloseSnackbar} severity={isFilledOut ? "success" : "error"} sx={{ width: '100%' }}>
        {isFilledOut ? "Successfully sent. We'll reach out to you soon." : "Please fill out all fields in the contact form."}
      </Alert> */}
      <Alert onClose={handleCloseSnackbar} severity="error" sx={{ width: '100%' }}>
        Not yet accepting user feedback.
      </Alert>
    </Snackbar>
  );
};

export default FeedbackSnackbar;
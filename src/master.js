import React from "react";
import { Paper, TextField, Box } from "@material-ui/core";
import {useForm} from 'react-hook-form'

const Master = () => {
    const {register,handleSubmit}=useForm()
  return (
    <Paper>
      <form>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          style={{ width: "27rem", padding: "2rem" }}
        >
          <TextField 
          name='name'
          label="Name" fullWidth />
          <TextField
          name='name'
          label="Random Number" fullWidth />
          <TextField
          name='name'
          label="Email" type="email" />
          <Button type="submit" color="secondary">
            Save
          </Button>
        </Box>
      </form>
    </Paper>
  );
};

export default Master;

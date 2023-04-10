import { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import { useSelector, useDispatch } from "react-redux";
import { errorHelper } from "../../utils/tools";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Auth = () => {
  const [register, setRegister] = useState(false);

  const formik = useFormik({
    initialValues: { email: "", passsword: "" },
    validationSchema: Yup.object({
      email: Yup.string()
        .required("Sorry email is required")
        .email("This is not valid email"),
      password: Yup.string()
        .required("Password is required")
        .min(4, "Password must be at least 4 characters long")
        .max(10, "Password must be less of 10 characters long"),
    }),
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  const handleSubmit = (values) => {
    if (register) {
      console.log(values, "register");
    } else {
      console.log(values, "sign in");
    }
  };

  return (
    <div className="auth_container">
      <h1>Authenticate</h1>
      <Box
        sx={{
          "& .MuiTextField-root": { width: "100%", marginTop: "20px" },
        }}
        component="form"
        onSubmit={formik.handleSubmit}
      >
        <TextField
         name="email"
         label="Enter your email"
         variant='outlined'
         {...formik.getFieldProps('email')}
         {...errorHelper(formik, 'email')}
        />

        <TextField
          name="password"
          label="Enter your password"
          type="password"
          variant='outlined'
          {...formik.getFieldProps('password')}
          {...errorHelper(formik,'password')}
        />

        <div className="mt-2">
            <Button 
               variant="contained" 
               color="primary" 
               type="submit" 
               size="large">
               {register ? 'Register' : 'Login'}
            </Button>
            <Button 
               className="mt-3"
               variant="outlined" 
               color="secondary" 
               size="small"
               onClick={()=>setRegister(!register)}>
               Want to  {!register ? 'Register' : 'Login'}
            </Button>
        </div>
      </Box>
    </div>
  );
};

export default Auth;

import {
  Container,
  FormControl,
  FormHelperText,
  FormLabel,
  Button,
  Typography,
  Input,
} from "@mui/material";

import Box from "@mui/material/Box";
import React, { useEffect, useState } from 'react'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loggedInFailed, logginSuccess } from '../store/slices/userSlice';
import { toast } from 'react-hot-toast';
import { useHelloMutation, useRegisterUserMutation } from '../store/api/userApi';

const Signup = () => {


  const handleCredChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate()
  const user = useSelector((state) => state.users)
  const dispatch = useDispatch()

  const [registerUser] = useRegisterUserMutation();

  const [showConfirmPassErr, setShowConfirmPassErr] = useState(false)
  const [credentials, setCredentials] = useState({ email: "", password: "", confirmPass: "" })
  const [loading, setLoading] = useState(false)

  const handleConfirmPassChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
    setTimeout(() => {
      (credentials.password === credentials.confirmPass) ? setShowConfirmPassErr(false) : setShowConfirmPassErr(true)
    }, 150)
  }

  const showErr = (credentials.password === credentials.confirmPass) ? false : true

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    try {
      setLoading(true);
      const data = await registerUser(credentials).unwrap();
      toast.success("Success", { duration: 900, position: 'top-center' })
      dispatch(logginSuccess(data))
      setTimeout(() => {
        navigate('/')
      }, 1000);

    } catch (error) {
      toast.error("Something went wrong" + error, { duration: 1000 })
      dispatch(loggedInFailed());
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (user.loggedIn) {
      navigate('/')
    }
  }, [])

  return (
    <Container
      //   maxWidth="lg"
      sx={{
        height: "auto",
        display: "flex",
        // justifyContent: "space-evenly",
        alignItems: "center",
        flexDirection: {
          xs: "column",
          sm: "column",
          md: "row",
          lg: "row",
          xl: "row",
        },
        marginTop: "50px",
        width: "auto",
        marginBottom: "50px",
      }}
    >
      <Box
        sx={{
          width: {
            xs: "250px",
            sm: "500px",
            md: "400px",
            lg: "400px",
            xl: "400px",
          },
          marginRight: {
            xs: "0px",
            sm: "0px",
            md: "50px",
            lg: "50px",
            xl: "50px",
          },
        }}
      >
        <img
          alt="signup"
          src="/images/signupSvg.svg"
          width="100%"
          height="auto"
        //   style={{ width: "100%", height: "auto" }}
        />
      </Box>

      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "30px",
        }}
        onSubmit={handleFormSubmit}
      >
        <FormControl>
          <FormLabel
            shrink="true"
            htmlFor="email"
            sx={{
              fontSize: "14px",
              fontWeight: "500",
              lineHeight: "17.5px",
              color: "#57595A",
              width: {
                xs: "auto",
                sm: "auto",
                md: "100%",
                lg: "100%",
                xl: "100%",
              },
              color: "#363939",
            }}
            placeholder="example@gmail.com"
            required
            name="email"
            value={credentials.email}
            onChange={handleCredChange}
          />
        </FormControl>

        <FormControl>
          <FormLabel
            shrink="true"
            htmlFor="password"
            style={{
              fontSize: "14px",
              fontWeight: "500",
              lineHeight: "17.5px",
              color: "#57595A",
            }}
          >
            Password
          </FormLabel>
          <Input
            id="password"
            type="password"
            disableUnderline
            sx={{
              fontSize: "16px",
              marginTop: "3px",
              fontWeight: "400",
              borderRadius: "6px",
              border: "1px solid #D2D3D3",
              padding: "11px 12px",
              lineHeight: "24px",
              width: "auto",
              color: "#363939",
            }}
            placeholder="password"
            required
            name="password"
            value={credentials.password}
            onChange={handleCredChange}
          />
        </FormControl>

        <FormControl>
          <FormLabel
            shrink="true"
            htmlFor="re-password"
            style={{
              fontSize: "14px",
              fontWeight: "500",
              lineHeight: "17.5px",
              color: "#57595A",
            }}
          >
            Re-enter your password
          </FormLabel>
          <Input
            id="re-password"
            type="password"
            disableUnderline
            style={{
              fontSize: "16px",
              marginTop: "3px",
              fontWeight: "400",
              borderRadius: "6px",
              border: "1px solid #D2D3D3",
              padding: "11px 12px",
              lineHeight: "24px",
              width: "auto",
              color: "#363939",
            }}
            placeholder="re-enter password"
            required
            name="confirmPass"
            value={credentials.confirmPass}
            onChange={handleConfirmPassChange}
          />
          {showConfirmPassErr && showErr && (
            <FormHelperText
              sx={{
                color: "#EA2A2A",
                fontWeight: "600",
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                gap: "5px",
                margin: 0,
                padding: "3px 0",
              }}
            >
              <ErrorOutlineIcon
                style={{
                  height: "16px",
                  width: "16px",
                }}
              />
              <Typography
                variant="h4"
                sx={{
                  color: "#EA2A2A",
                  fontSize: "12px",
                  fontWeight: "500",
                  lineHeight: "15px",
                  width: "100%",
                }}
              >
                password doesn't match
              </Typography>
            </FormHelperText>
          )}
        </FormControl>

        <FormControl>
          <FormLabel shrink="true">
            <span
              style={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                gap: "5px",
                color: "#57595A",
                fontSize: "14px",
              }}
            >
              forgot password
              <HelpOutlineIcon
                sx={{
                  height: "16px",
                  width: "16px",
                  color: "#81B5E9",
                }}
              />
            </span>
          </FormLabel>
          <Button
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: "#FFE393",
              ":hover": { backgroundColor: "#ffe8a8" },
              width: "253px",
              height: "48px",
              padding: "0px 16px",
              marginTop: "7px",
              borderRadius: "6px",
            }}
            disableElevation
          >
            <Typography
              variant="h4"
              sx={{
                color: "#363939",
                fontSize: "18px",
                fontWeight: "600",
                lineHeight: "22.5px",
                textAlign: "center",
                cursor: "pointer",
                textTransform: "none",
                width: "100%",
                fontFamily: "Lora",
              }}
            >
              Sign Up
            </Typography>
          </Button>
        </FormControl>
      </form>
    </Container>
  );
};

export default Signup;

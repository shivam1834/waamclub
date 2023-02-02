import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import { styled } from "@mui/material/styles";
import { signup } from '../servies/Authentication'
import { useNavigate } from "react-router-dom";

const theme = createTheme();

export default function SignUp() {
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();


  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // console.log({
    //   name: data.get("name"),
    //   email: data.get("email"),
    //   password: data.get("password")
    // });
    setIsLoading(true);
    await signup({
      name: data.get("name"),
      email: data.get("email"),
      password: data.get("password")
    }).then((res) => {
      console.log(res)
      navigate("/login");
    }).catch(error => {
      console.log(error)
      setErrors(error.response.data);
      console.log(errors.error)
    }).finally(
      setIsLoading(false)
    )
  };

  const CssTextField = styled(TextField)({
    "& label.Mui-focused": {
      color: "#CB2D6F",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#CB2D6F",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#501F3A",
      },
      "&:hover fieldset": {
        borderColor: "#14A098",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#CB2D6F",
      },
    },
  });

  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText("#501F3A"),
    backgroundColor: "#501F3A",
    "&:hover": {
      backgroundColor: "#CB2D6F",
    },
  }));

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "#501F3A" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <CssTextField
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="First Name"
                  autoFocus
                  autoComplete="name"
                  error={Boolean(errors.name)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <CssTextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <CssTextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  error={Boolean(errors.email)}
                />
                {errors.email && <p className="input-error">**{errors.email}</p>}
              </Grid>
              <Grid item xs={12}>
                <CssTextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  error={Boolean(errors.password)}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      value="remember"
                      sx={{
                        color: "#501F3A",
                        "&.Mui-checked": {
                          color: "#501F3A",
                        },
                      }}
                    />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <ColorButton
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={isLoading}
            >
              Sign Up
            </ColorButton>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link
                  href="/login"
                  variant="body2"
                  sx={{
                    color: "#501F3A",
                  }}
                >
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <div>
          <div className="social-login">
            <hr />
            OR
            <hr />
          </div>
          <div className="social-media">
            <div className="fb-icon">
              <FacebookIcon />
            </div>
            <div className="g-icon">
              <GoogleIcon />
            </div>
          </div>
        </div>
      </Container>
    </ThemeProvider>
  );
}

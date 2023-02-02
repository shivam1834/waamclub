import "./page.css";
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
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { login } from '../servies/Authentication'
import RestartAltIcon from '@mui/icons-material/RestartAlt';

const theme = createTheme();

export default function SignIn() {
  const [passwordError, SetPasswordError] = useState(null)
  const navigate = useNavigate();
  const role = [1]
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const user = Object.fromEntries(data.entries());
    setIsLoading(true)

    // Password Validation check
    // if (!(user.password.match(/[A-Z]/) != null && user.password.match(/[a-z]/) != null && user.password.match(/[0-9]/) != null && user.password.match(/[#?!@$%^&*-]/) != null && user.password.length >= 10)) {
    //     return SetPasswordError('Must have at least one uppercase letter, one lowercase letter, one number and one special character & min 10 character')
    // }
    SetPasswordError(null)
    // localStorage.setItem("user", JSON.stringify(user));
    // localStorage.setItem("roles", [role]);

    console.log({
      email: user.email,
      password: user.password,
    });
    await login({
      email: user.email,
      password: user.password
    }).then((res) => {
      console.log(typeof (res.data.user.email))
      if (role[0] === 1) {
        navigate("/");
        console.log('if', res.data.user.email)
      } else if (role[0] === 4) {
        navigate("/vendor/Dashboard");
        console.log('else', role[0])
      }
      else {
        navigate("/Frenchise/Dashboard");
        console.log('else', role[0])
      }
    }).catch(error => {
      console.log(error)
      setErrors(error.response.data);
      console.log(error.response.data)
    }).finally(
      setIsLoading(false)
    )
  };


  const CssTextField = styled(TextField)({
    "& label.Mui-focused": {
      color: "#CB2D6F",
    },
    "& .css-1wc848c-MuiFormHelperText-root.Mui-error": {
      color: "red",
      fontSize: "8px"
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
    <div className="login-page">
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
              Sign in
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <CssTextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              {errors.email && <p className="input-error">**{errors.email}</p>}
              <CssTextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                helperText={passwordError}
                error={Boolean(passwordError)}
              />
              {errors.password && <p className="input-error">**{errors.password}</p>}
              {errors.message && <p className="input-error">**{errors.message}</p>}
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
                label="Remember me"
              />
              <ColorButton
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                disabled={isLoading}
              >
                {isLoading ? <RestartAltIcon className="loading"/> : 'Sign in'}
              </ColorButton>
              <Grid container>
                <Grid item xs>
                  <Link
                    href="#"
                    variant="body2"
                    sx={{
                      color: "#501F3A",
                    }}
                  >
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link
                    href="/signup"
                    variant="body2"
                    sx={{
                      color: "#501F3A",
                    }}
                  >
                    {"Don't have an account? Sign Up"}
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
    </div>
  );
}

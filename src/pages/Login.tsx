import { useState } from "react";
import { LoginProps } from "../types";
import axios from "axios";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const Login = () => {
  const theme = createTheme();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleLogin() {
    try {
      const response = await axios.post("/api/login", {
        username: username,
        password: password,
      });
      //   onLogin();
    } catch (error) {
      setError("ユーザー名かパスワードが間違っています");
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            ログイン
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="ユーザー名"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="パスワード"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
          </Grid>
          <Button
            variant="contained"
            fullWidth
            color="primary"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleLogin}
          >
            Login
          </Button>
          {error && <p>{error}</p>}
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Login;

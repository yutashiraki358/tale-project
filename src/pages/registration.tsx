import axios from "axios";
import { FormValues } from "../types";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const RegistrationForm = () => {
  const theme = createTheme();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    // mode: "onChange",
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<FormValues> = async (data: FormValues) => {
    console.log(data);

    try {
      const response = await axios.post("/api/register", data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

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
            新規会員登録
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Controller
                  name="name"
                  control={control}
                  defaultValue=""
                  rules={{
                    required: "名前を入力してください",
                    minLength: {
                      value: 4,
                      message: "4文字以上入力してください",
                    },
                  }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Name"
                      error={!!errors.name}
                      helperText={errors.name?.message}
                      fullWidth
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name="email"
                  control={control}
                  defaultValue=""
                  rules={{
                    required: "メールアドレスを入力してください",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "正しいメールアドレスを入力してください",
                    },
                  }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Email"
                      error={!!errors.email}
                      helperText={errors.email?.message}
                      fullWidth
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name="password"
                  control={control}
                  defaultValue=""
                  rules={{
                    required: "パスワードを入力してください",
                    minLength: {
                      value: 8,
                      message: "8文字以上入力してください",
                    },
                  }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Password"
                      type="password"
                      error={!!errors.password}
                      helperText={errors.password?.message}
                      fullWidth
                    />
                  )}
                />
              </Grid>
            </Grid>
            <Box mt={2}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                新規会員登録
              </Button>
            </Box>
          </Box>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Googleアカウントで登録
          </Button>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default RegistrationForm;

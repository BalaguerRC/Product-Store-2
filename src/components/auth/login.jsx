import { LoadingButton } from "@mui/lab";
import {
  Box,
  Button,
  Card,
  Grid,
  TextField,
  Typography,
  OutlinedInput,
  Link,
  Divider,
  Paper,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonCustom } from "./style/Buttom";
import LockIcon from "@mui/icons-material/Lock";
import { PaperBox } from "../paperBox";
import Game from "../../assets/Pc1.jpg";

const Login = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(null);
  const [Loading, setLoading] = useState(false);

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
    setError(null);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
    setError(null);
  };

  const navigate = useNavigate();

  const Loged = () => {
    console.log(email, password);
    setLoading(!Loading);
    if (!email && !password) {
      setTimeout(() => {
        setLoading(false);
        setError("Debe llenar todos los campos");
        console.log("test");
      }, 1000);
    } else {
      setTimeout(() => {
        setLoading(false);
        fetch(import.meta.env.VITE_URL + "/Users/login", {
          method: "Post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            //console.log(data.succes)

            if (data.succes === false) {
              setError("Invalid email or password");
            } else {
              localStorage.setItem("Token", data.token);
              localStorage.setItem("DATA", JSON.stringify(data.data));
              setError(null);
              const getToken = localStorage.getItem("Token");
              if (getToken != null) {
                navigate("/");
              }
              //navigate("perfil");
            }
          })
          .catch((err) => {
            console.log(err);
            setError("Error fetch");
          });
      }, 1000);
    }
  };
  return (
    <>
      <div>
        <Grid
          container
          direction={"row-reverse"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Grid item sm={5} sx={{ display: { xs: "none", md: " grid" } }}>
            <Box className="containerApp2 imgContainer"></Box>
          </Grid>
          <Grid item xs={0.4} sx={{ display: { xs: "grid", md: " none" } }}>
            <PaperBox className="containerApp2"></PaperBox>
          </Grid>
          <Grid item xs sm>
            <Box sx={{ p: 5 }}>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setLoading(!Loading);
                  setTimeout(() => {
                    Loged();
                  }, 1000);
                }}
              >
                <Grid container direction={"column"} spacing={2}>
                  <Grid item>
                    <Link underline="hover" href="/">
                      <Typography variant="button" color={"text.secondary"}>
                        {"<-Home"}
                      </Typography>
                    </Link>
                  </Grid>
                  <Grid item sx={{ textAlign: "center", pb: 5 }}>
                    <LockIcon />
                    <Typography variant="h5" gutterBottom>
                      Sign in
                    </Typography>
                    <Typography variant="caption" gutterBottom>
                      to ProductS
                    </Typography>
                  </Grid>
                  <Grid item>
                    <TextField
                      type="email"
                      label="Email"
                      required
                      onChange={onChangeEmail}
                      fullWidth
                    />
                  </Grid>
                  <Grid item>
                    <TextField
                      type="password"
                      label="Password"
                      required
                      onChange={onChangePassword}
                      fullWidth
                    />
                  </Grid>
                  {error ? (
                    <Typography variant="caption" color={"red"}>
                      {error}
                    </Typography>
                  ) : null}
                  <Grid item>
                    <FormControlLabel
                      control={<Checkbox />}
                      label={"Remember me"}
                    />
                  </Grid>
                  <Grid item>
                    {Loading ? (
                      <LoadingButton
                        type="submit"
                        variant="contained"
                        loading
                        fullWidth
                      >
                        Sing In
                      </LoadingButton>
                    ) : (
                      <Button type="submit" variant="contained" fullWidth>
                        Sing In
                      </Button>
                    )}
                  </Grid>
                  <Grid item>
                    <Button variant="outlined" color="secondary" fullWidth>
                      Sing Up
                    </Button>
                  </Grid>
                  <Grid item>
                    <Link>Forgot my password</Link>
                  </Grid>
                </Grid>
              </form>
            </Box>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

{
  /**
  <Card
          variant="outlined"
          sx={{
            borderColor: "9C9C9C",
            borderTopWidth: 5,
            background: "#242933",
            boxShadow: "3px 5px 28px #000000",
          }}
        >
          <Grid
            container
            direction={"column"}
            alignItems="center"
            sx={{
              width: 500,
              maxWidth: "100%",
              p: 5,
            }}
          >
            <Typography variant="button" component={"h3"} fontSize={20}>
              Sign in
            </Typography>
            <Typography variant="caption">
              to ProductS
            </Typography>
            <Grid container>
              <Link
                component={"button"}
                underline="hover"
                onClick={() => navigate("/")}
              >
                <Typography variant="button" color={"text.secondary"}>
                  {"<-Home"}
                </Typography>
              </Link>
            </Grid>
            <TextField
              margin="normal"
              onChange={onChangeEmail}
              required
              id="outlined-required"
              label="Email"
              type="email"
              fullWidth
            />
            <TextField
              onChange={onChangePassword}
              required
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              fullWidth
              margin="normal"
            />
            {error ? (
              <Typography variant="caption" color={"red"}>
                {error}
              </Typography>
            ) : null}
            <Grid container mr={"auto"}>
              <Link href="#" variant="body2" color="text.secondary">
                Olvido su contraseña?
              </Link>
            </Grid>
            <Divider />
            {Loading ? (
              <LoadingButton
                loading
                variant="outlined"
                sx={{ marginTop: 3, width: "100%" }}
              >
                Login
              </LoadingButton>
            ) : (
              <ButtonCustom
                sx={{ marginTop: 3, width: "100%" }}
                variant="contained"
                onClick={Loged}
              >
                Login
              </ButtonCustom>
            )}
          </Grid>
        </Card>
   */
}

{
  /**
  <Box
        justifyContent={"center"}
        alignItems={"center"}
        sx={{ height: "100vh", display: { xs: "none", md: "grid" } }}
      >
        <Card
          variant="outlined"
          sx={{
            borderColor: "9C9C9C",
            borderTopWidth: 5,
            background: "#242933",
            boxShadow: "3px 5px 28px #000000",
            width: 500,
          }}
        >
          <form
            style={{ width: "100%" }}
            onSubmit={(e) => {
              e.preventDefault();
              setLoading(!Loading);
              setTimeout(() => {
                Loged();
              }, 2000);
            }}
          >
            <Grid container direction={"column"} p={4}>
              <Grid item>
                <Link
                  component={"button"}
                  underline="hover"
                  onClick={() => navigate("/")}
                >
                  <Typography variant="button" color={"text.secondary"}>
                    {"<-Home"}
                  </Typography>
                </Link>
              </Grid>
              <Grid item sx={{ textAlign: "center", pb: 5 }}>
                <LockIcon />
                <Typography variant="button" component={"h3"} fontSize={20}>
                  Sign in
                </Typography>
                <Typography variant="caption">to ProductS</Typography>
              </Grid>
              <Grid item>
                <TextField
                  required
                  label="Email"
                  type="email"
                  margin="normal"
                  onChange={onChangeEmail}
                  fullWidth
                />
              </Grid>
              <Grid item>
                <TextField
                  label="Password"
                  type="password"
                  fullWidth
                  margin="normal"
                  required
                  onChange={onChangePassword}
                />
              </Grid>
              <Grid item>
                {error ? (
                  <Typography variant="caption" color={"red"}>
                    {error}
                  </Typography>
                ) : null}
              </Grid>
              <Grid item>
                <FormControlLabel
                  control={<Checkbox />}
                  label={"Remember me"}
                />
              </Grid>
              <Grid item pt={1}>
                {Loading ? (
                  <LoadingButton
                    loading
                    variant="outlined"
                    sx={{ width: "100%" }}
                  >
                    Login
                  </LoadingButton>
                ) : (
                  <ButtonCustom
                    sx={{ width: "100%" }}
                    variant="contained"
                    onClick={Loged}
                    type="submit"
                  >
                    Login
                  </ButtonCustom>
                )}
              </Grid>
              <Grid item pt={1}>
                <Link>Forgot my password</Link>
              </Grid>
            </Grid>
          </form>
        </Card>
      </Box>
   */
}
export default Login;

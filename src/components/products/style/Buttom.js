import { Button, styled } from "@mui/material";

export const ButtonCustom = styled(Button)({
  fontWeight: 550,
  padding: "6px 12px",
  backgroundColor: "#661AE6",
  borderRadius:3,
  color: "white",
  "&:hover": {
    backgroundColor: "#8146eb",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#8146eb",
    borderColor: "#661AE6",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem #661AE6",
  },
});

export const ButtonCustomOutlined = styled(Button)({
  fontWeight: 550,
  padding: "6px 12px",
  backgroundColor: "transparent",
  color: "white",
  "&:hover": {
    backgroundColor: "#661AE6",
    borderColor: "#661AE6",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#0062cc",
    borderColor: "#661AE6",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem #661AE6",
  },
});

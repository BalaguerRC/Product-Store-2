import {
  Box,
  Button,
  CircularProgress,
  Collapse,
  Divider,
  Grid,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import Row from "./row";

const Historia = () => {
  const getData = JSON.parse(localStorage.getItem("DATA"));
  const getToken = localStorage.getItem("Token");
  const [historial, setHistorial] = useState([]);
  const [loading, setLoading] = useState(true);

  let lista = [];
  let lista2 = [];
  let lista3 = [];

  const response = () => {
    fetch(import.meta.env.VITE_URL + "/Compra2/" + getData.id, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + getToken,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setHistorial(data.data);
      })
      .catch((err) => console.log(err));
  };

  const test = () => {
    historial.forEach((element) => {
      if (!lista.includes(element.id_compra)) {
        lista.push(element.id_compra);
        lista2.push(element.date);
      }
    });
  };

  const fetchReport = async (item) => {
    fetch(import.meta.env.VITE_URL + "/Report/" + item, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + getToken,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data);
        lista3.push(data.data);
      })
      .catch((err) => console.log(err));
  };

  const ForEachTest = () => {
    for (let i in lista) {
      console.log("idFor:", lista[i]);
      fetchReport(lista[i]);
    }
  };

  {
    historial != null ? test() : null;
  }
  const time = () => {
    setTimeout(() => {
      setLoading(!loading);
    }, 1000);
  };

  useEffect(() => {
    response();
  }, [historial]);

  /*const [open, setOpen] = useState(true);*/
  return (
    <>
      <Grid container direction={"column"} justifyContent={"space-between"}>
        <Grid item p={3}>
          <Typography variant="button" sx={{ fontSize: 22 }}>
            History
          </Typography>
        </Grid>
        <Grid item>
          <Divider />
        </Grid>
        <Grid item p={2}>
          <Paper sx={{ width: "100%", overflow: "hidden" }}>
            {lista == 0 ? (
              <Typography variant="subtitle1" pl={1}>
                Token Expirado
              </Typography>
            ) : (
              <TableContainer sx={{ maxHeight: 458 }}>
                <Table>
                  <TableHead sx={{ backgroundColor: "background.paper" }}>
                    <TableRow>
                      <TableCell></TableCell>
                      <TableCell>Invoice Number</TableCell>
                      <TableCell>$ Total Price</TableCell>
                      <TableCell>Date</TableCell>
                      <TableCell>Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody sx={{ backgroundColor: "#1b1e24" }}>
                    {lista &&
                      lista.map((item, index) => {
                        return (
                          <Row item={item} date={lista2[index]} key={index} />
                        );
                      })}
                  </TableBody>
                </Table>
              </TableContainer>
            )}
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

{
  /**
  <Grid sx={{ p: 2 }}>
        <Typography variant="button" sx={{ fontSize: 22 }}>
          Historial
        </Typography>
        <Divider></Divider>
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          {lista == 0 ? (
            <Typography variant="subtitle1" pl={1}>
              Token Expirado
            </Typography>
          ) : (
            <TableContainer sx={{ maxHeight: 378 }}>
              <Table>
                <TableHead sx={{ backgroundColor: "background.paper" }}>
                  <TableRow>
                    <TableCell></TableCell>
                    <TableCell># de factura</TableCell>
                    <TableCell>$ Precio Total</TableCell>
                    <TableCell>Fecha y Hora</TableCell>
                    <TableCell>Acciones</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody sx={{ backgroundColor: "#1b1e24" }}>
                  {lista &&
                    lista.map((item, index) => {
                      return (
                        <Row item={item} date={lista2[index]} key={index} />
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </Paper>
      </Grid>
   */
}
export default Historia;

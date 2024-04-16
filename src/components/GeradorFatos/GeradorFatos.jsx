import { useEffect, useState } from "react";
import { doRequest } from "../../APIs/FactsAPI";
import "./GeradorFatos.scss";
import { Button, Divider, Stack } from "@mui/material";
import TextField from "../TextField/TextField";

export default function GeradorFatos() {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    getFatos();
  }, []);

  const getFatos = () => {
    doRequest().then((json) => {
      let fatos = json.data;
      setDados(fatos);
    });
  };

  let counter = 0;

  return (
    <>
      {dados.length > 0 && (
        <div className="gerador-fatos">
          <div id="container-fatos">
            {dados.map((fato) => {
              counter++;
              return (
                <div className="fatos" key={`${fato.id}`}>
                  <TextField text={`#${counter} - ${fato.attributes.body}`} />
                  <Divider
                    className="divider"
                    variant="fullWidth"
                    key={`${fato.id}`}
                  />
                </div>
              );
            })}
            <Button size="large" variant={"contained"} onClick={getFatos}>
              Ver outros fatos
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

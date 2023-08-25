import React, { useEffect, useState } from "react";
import Input from "../../components/Input";
import { theme } from "../../components/Theme";
import Text from "../../components/Text";
import Box from "../../components/Box";
import ReactInputMask from "react-input-mask";
import Button from "../../components/Button";
import Link from "../../components/Link";
import Image from "../../components/Image";
import axios from "axios";
import SelectTipo from "../../components/Select";
import Footer from "../../components/Footer";
export default function Cadastrar() {
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState({
    estado: "",
    cidade: "",
  });

  useEffect(() => {
    if (cep.length === 9) {
      axios
        .get(`https://viacep.com.br/ws/${cep}/json/`)
        .then((response) => {
          const { uf, localidade } = response.data;
          console.log(response.data);
          setEndereco({
            estado: uf,
            cidade: localidade,
          });
        })
        .catch((error) => {
          console.error("Erro ao buscar CEP:", error);
        });
    }
  }, [cep]);
  return (
    <div>
      <Box
        as="main"
        styleSheet={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
      
        }}
      >
        <Box>
          <Image
            styleSheet={{
              width: "500px",
              height: "300px",
              paddingLeft: "10rem",
            }}
            src="/assets/images/logo.svg"
            alt="Logo Find By"
          />
        </Box>
        <Box
          styleSheet={{
            paddingLeft: theme.space.x40,
            paddingTop: theme.space.x10,
          }}
        >
          <Text
            styleSheet={{
              color: theme.colors.primary["900"],
              textVariant: theme.typography.variants.body1,
            }}
          >
            E-mail:
          </Text>
          <Input
            styleSheet={{
              width: theme.space.x96,
              paddingLeft: theme.space.x2,
            }}
            placeholder="Coloque seu e-mail"
          />
        </Box>
        <Box
          styleSheet={{
            paddingLeft: theme.space.x40,
            paddingTop: theme.space.x10,
          }}
        >
          <Text
            styleSheet={{
              color: theme.colors.primary["900"],
              textVariant: theme.typography.variants.body1,
            }}
          >
            Nome:
          </Text>
          <Input
            styleSheet={{
              width: theme.space.x96,
              paddingLeft: theme.space.x2,
            }}
            placeholder="Coloque seu nome"
          />
        </Box>
        <Box
          styleSheet={{
            paddingLeft: theme.space.x40,
            paddingTop: theme.space.x10,
          }}
        >
          <Text
            styleSheet={{
              color: theme.colors.primary["900"],
              textVariant: theme.typography.variants.body1,
            }}
          >
            Senha:
          </Text>
          <Input
            type="password"
            styleSheet={{
              width: theme.space.x96,
              paddingLeft: theme.space.x2,
            }}
            placeholder="Coloque sua senha"
          />
        </Box>
        <Box
          styleSheet={{
            paddingLeft: theme.space.x40,
            paddingTop: theme.space.x10,
          }}
        >
          <Text
            styleSheet={{
              color: theme.colors.primary["900"],
              textVariant: theme.typography.variants.body1,
            }}
          >
            CPF:
          </Text>
          <ReactInputMask mask="999.999.999-99">
            {() => (
              <Input
                placeholder="Coloque seu CPF"
                styleSheet={{
                  width: theme.space.x96,
                  paddingLeft: theme.space.x2,
                }}
              />
            )}
          </ReactInputMask>
        </Box>
        <Box
          styleSheet={{
            paddingLeft: theme.space.x40,
            paddingTop: theme.space.x10,
          }}
        >
          <Text
            styleSheet={{
              color: theme.colors.primary["900"],
              textVariant: theme.typography.variants.body1,
            }}
          >
            CEP:
          </Text>
          <ReactInputMask
            mask="99999-999"
            value={cep}
            onChange={(event) => setCep(event.target.value)}
          >
            {(inputProps) => (
              <Input
                {...inputProps}
                placeholder="Coloque seu CEP"
                styleSheet={{
                  width: theme.space.x96,
                  paddingLeft: theme.space.x2,
                }}
              />
            )}
          </ReactInputMask>
        </Box>
        <Box
          styleSheet={{
            paddingLeft: theme.space.x40,
            paddingTop: theme.space.x10,
          }}
        >
          <Text
            styleSheet={{
              color: theme.colors.primary["900"],
              textVariant: theme.typography.variants.body1,
            }}
          >
            Estado:
          </Text>

          <Input
            value={endereco.estado}
            readOnly
            placeholder="Estado"
            styleSheet={{
              width: theme.space.x96,
              paddingLeft: theme.space.x2,
            }}
          />
        </Box>
        <Box
          styleSheet={{
            paddingLeft: theme.space.x40,
            paddingTop: theme.space.x10,
          }}
        >
          <Text
            styleSheet={{
              color: theme.colors.primary["900"],
              textVariant: theme.typography.variants.body1,
            }}
          >
            Cidade:
          </Text>

          <Input
            value={endereco.cidade}
            readOnly
            placeholder="Cidade"
            styleSheet={{
              width: theme.space.x96,
              paddingLeft: theme.space.x2,
            }}
          />
        </Box>
        <Box
          styleSheet={{
            paddingLeft: theme.space.x40,
            paddingTop: theme.space.x10,
          }}
        >
          <Text
            styleSheet={{
              color: theme.colors.primary["900"],
              textVariant: theme.typography.variants.body1,
            }}
          >
            Tipo:
          </Text>
          <SelectTipo
            placeholder="Selecione uma opção"
            options={["Cliente", "Tradutor"]}
            onChange={(e) => console.log(e.target.value)}
            styleSheet={{
              width: theme.space.x96,
            }}
          />
        </Box>
        <Box
          styleSheet={{
            marginTop: "30px",
            marginLeft: "150px",
            paddingBottom: "15px",
          }}
        >
          <Button
            type="submit"
            styleSheet={{
              width: "200px",
            }}
          >
            <Link
              href="/localizar"
              styleSheet={{
                display: "inline-flex",
                alignItems: {
                  xs: "flex-start",
                  sm: "center",
                },
                flexDirection: {
                  xs: "column",
                  sm: "row",
                },
              }}
            >
              <Text
                styleSheet={{
                  textVariant: theme.typography.variants.body1,
                  fontWeight: "900",
                  borderRadius: theme.space.x64,
                  color: theme.colors.neutral["000"],
                  paddingLeft: "20px",
                }}
              >
                Cadastrar
              </Text>
            </Link>
          </Button>
        </Box>
      </Box>
      <Footer />
    </div>
  );
}

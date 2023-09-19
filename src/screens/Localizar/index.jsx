import Box from "../../components/Box";
import Text from "../../components/Text";
import Image from "../../components/Image";
import Button from "../../components/Button";
import { theme } from "../../components/Theme";
import Heads from "../../components/Head";
import React, { useState } from "react";
import Link from "../../components/Link";
export default function Localizar() {
  const [showTable, setShowTable] = useState(false);
  const [showMessageField, setShowMessageField] = useState(false);
  const [selectedTranslator, setSelectedTranslator] = useState(null);
  const [messageSent, setMessageSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const handleTranslatorClick = (translatorName) => {
    setSelectedTranslator(translatorName);
    setShowMessageField(true);
  };

  const handleSendMessage = () => {
    // Aqui você pode adicionar lógica para realmente enviar a mensagem, se necessário.
    // Por exemplo, uma chamada API.

    setMessageSent(true);
    setTimeout(() => {
      setMessageSent(false);
      setShowMessageField(false);
    }, 2000); // após 2 segundos, a notificação desaparecerá e o campo de mensagem será fechado
  };

  const handleLocalizarClick = () => {
    setIsLoading(true);
    // Simule um carregamento com um delay. Você pode substituir isso por uma chamada real de API ou outra operação assíncrona, se necessário.
    setTimeout(() => {
      setIsLoading(false);
      setShowTable(true);
    }, 2000); // 2 segundos de delay
  };

  return (
    <div>
      <Box>
        <Box
          styleSheet={{
            marginTop: "20px",
          }}
        >
          <Link
            href="/"
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
                transition: "color 0.3s ease", // Transição suave para a cor do hover
                hover: {
                  color: theme.colors.primary["600"], // Cor mais escura para o hover
                  textDecoration: "underline", // Sublinhando o link no hover
                },
                textVariant: theme.typography.variants.body4,
                fontWeight: "900",
                borderRadius: theme.space.x64,
                color: theme.colors.primary["400"],
                backgroundColor: theme.colors.primary["100"],
                paddingLeft: theme.space["x3"],
                paddingRight: theme.space["x3"],
                paddingVertical: theme.space["x3"],
                marginRight: theme.space.x3,
                marginBottom: {
                  xs: theme.space.x2,
                  sm: theme.space.x0,
                },
              }}
            >
              Voltar
            </Text>
          </Link>
        </Box>
      </Box>
      <Box
        as="main"
        styleSheet={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginLeft: "-500px",
        }}
      >
        <Heads>Contato Libra | Localizar</Heads>

        <Image
          styleSheet={{
            width: "800px",
            height: "500px",
            paddingLeft: "25rem",
          }}
          src="/assets/images/lista.png"
          alt="Logo Find By"
        />

        <Box
          styleSheet={{
            paddingLeft: "410px",
          }}
        >
          <Button
            styleSheet={{
              paddingLeft: "10px",
            }}
            onClick={handleLocalizarClick}
          >
            {isLoading ? (
              "Carregando..."
            ) : (
              <Text
                styleSheet={{
                  textVariant: theme.typography.variants.body4,
                  fontWeight: "900",
                  fontSize: "16px",
                  borderRadius: theme.space.x64,
                  color: theme.colors.neutral["000"],
                  paddingLeft: theme.space["x10"],

                  paddingVertical: theme.space["x3"],
                  marginRight: theme.space.x3,
                  marginBottom: {
                    xs: theme.space.x2,
                    sm: theme.space.x0,
                  },
                }}
              >
                Localizar
              </Text>
            )}
          </Button>

          {showTable && (
            <Box styleSheet={{ marginTop: theme.space.x10 }}>
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  backgroundColor: theme.colors.neutral["050"],
                  borderRadius: theme.space.x2,
                  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                }}
              >
                <thead>
                  <tr
                    style={{
                      backgroundColor: theme.colors.primary["400"],
                      color: theme.colors.neutral["000"],
                    }}
                  >
                    <th style={getTableCellStyle()}>Nome</th>
                    <th style={getTableCellStyle()}>Rua</th>
                    <th style={getTableCellStyle()}>CPF</th>
                    <th style={getTableCellStyle()}>Localização</th>
                    <th style={getTableCellStyle()}>Reputação</th>
                  </tr>
                </thead>
                <tbody>
                  <tr onClick={() => handleTranslatorClick("João Silva")}>
                    <td style={getTableCellStyle()}>João Silva</td>
                    <td style={getTableCellStyle()}>Rua das Flores, 123</td>
                    <td style={getTableCellStyle()}>123.456.789-00</td>
                    <td style={getTableCellStyle()}>São Paulo, SP</td>
                    <td style={getTableCellStyle()}>⭐⭐⭐⭐⭐</td>{" "}
                    {/* 5 estrelas */}
                  </tr>
                  <tr onClick={() => handleTranslatorClick("Maria Pereira")}>
                    <td style={getTableCellStyle()}>Maria Pereira</td>
                    <td style={getTableCellStyle()}>Avenida Paulista, 1001</td>
                    <td style={getTableCellStyle()}>234.567.890-11</td>
                    <td style={getTableCellStyle()}>Rio de Janeiro, RJ</td>
                    <td style={getTableCellStyle()}>⭐⭐⭐⭐</td>{" "}
                    {/* 4 estrelas */}
                  </tr>
                  <tr onClick={() => handleTranslatorClick("Gabriela Soares")}>
                    <td style={getTableCellStyle()}>Gabriela Soares</td>
                    <td style={getTableCellStyle()}>Rua do Lago, 999</td>
                    <td style={getTableCellStyle()}>012.345.678-90</td>
                    <td style={getTableCellStyle()}>Goiânia, GO</td>
                    <td style={getTableCellStyle()}>⭐⭐⭐</td>{" "}
                    {/* 3 estrelas */}
                  </tr>
                </tbody>
              </table>
            </Box>
          )}
          {showMessageField && (
            <Box styleSheet={{ marginTop: theme.space.x10 }}>
              <Text>Enviar mensagem para {selectedTranslator}</Text>
              <textarea
                style={{ width: "100%", height: "100px", marginBottom: "35px" }}
                placeholder="Digite sua mensagem aqui..."
              ></textarea>

              <Button onClick={handleSendMessage}>Enviar</Button>
              <br></br>
              <Button
                styleSheet={{
                  width: "100px",
                  marginLeft: "19rem",
                  paddingRight: "20px",
                }}
                onClick={() => setShowMessageField(false)}
              >
                Fechar
              </Button>
            </Box>
          )}
          {messageSent && (
            <Box
              styleSheet={{
                position: "fixed",
                top: "20px",
                right: "20px",
                padding: "10px",
                backgroundColor: "green",
                color: "white",
                borderRadius: "5px",
              }}
            >
              Mensagem enviada com sucesso!
            </Box>
          )}
        </Box>
      </Box>
    </div>
  );
}
function getTableCellStyle() {
  return {
    padding: theme.space.x2,
    border: ` 1px  solid ${theme.colors.neutral[300]}`,
  };
}

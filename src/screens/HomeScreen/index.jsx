import Footer from "../../components/Footer";
import Link from "../../components/Link";
import { theme } from "../../components/Theme";
import Box from "../../components/Box";
import Text from "../../components/Text";
import Image from "../../components/Image";
import Icon from "../../components/Icon";

import Button from "../../components/Button";
import Heads from "../../components/Head";

const LOGO_ALURA_URL = "/assets/images/logo.png";
const SIDE_IMAGE_URL =
  "https://img.freepik.com/vetores-gratis/maos-de-cura-energetica-com-fogos-de-artificio-abstratos_23-2148662444.jpg?w=1380&t=st=1692970317~exp=1692970917~hmac=35b35a186a25fbe82fcd7bd7801e45f9f9bf811a6271321c98ed4fc86af71bb3";

function SideImage() {
  return (
    <Box
      styleSheet={{
        paddingHorizontal: {
          md: theme.space.x8,
        },
        marginHorizontal: {
          sm: "auto",
        },
        maxWidth: {
          sm: theme.space.xcontainer_md,
        },
        top: 0,
      }}
    >
      <Box
        styleSheet={{
          top: 0,
          bottom: 0,
          right: {
            lg: theme.space.x0,
          },
          width: {
            lg: theme.space["x1/2"],
          },
          paddingTop: {
            xs: theme.space.x12,
            sm: theme.space.x16,
          },
          paddingBottom: {
            lg: theme.space.x16,
          },
          position: {
            sm: "relative",
            lg: "absolute",
          },
        }}
      >
        <Box
          styleSheet={{
            height: {
              lg: theme.space["x1/1"],
            },
            maxWidth: {
              sm: theme.space.xcontainer_md,
              lg: "none",
            },
            position: "relative",
            paddingHorizontal: {
              sm: theme.space.x0,
            },
            paddingLeft: {
              lg: theme.space.x12,
            },
            marginRight: {
              lg: `-${theme.space.x40}`,
            },
            marginHorizontal: {
              sm: "auto",
            },
          }}
        >
          <Image
            styleSheet={{
              boxShadow: `0 5px 16px 0px ${theme.colors.neutral[999]}73`,
              borderRadius: {
                md: theme.space.x4,
              },
              maxWidth: {
                lg: "none",
              },
              width: "500px",
              height: "500px",
            }}
            src={SIDE_IMAGE_URL}
            alt="libras"
          />
        </Box>
      </Box>
    </Box>
  );
}

export default function HomeScreen() {
  return (
    <Box>
      <Heads>Contato Libra | Início</Heads>
      <Box
        as="main"
        styleSheet={{
          flex: 1,
          backgroundColor: theme.colors.neutral["050"],
        }}
      >
        <Box
          styleSheet={{
            overflow: "hidden",
            position: {
              lg: "relative",
            },
            paddingTop: {
              xs: theme.space.x6,
              sm: theme.space.x12,
            },
            paddingVertical: {
              md: theme.space.x20,
              lg: theme.space.x24,
            },
          }}
        >
          <Box
            styleSheet={{
              marginHorizontal: "auto",
              paddingHorizontal: {
                xs: theme.space.x4,
                sm: theme.space.x6,
                lg: theme.space.x8,
              },
              maxWidth: {
                sm: theme.space.xcontainer_md,
                lg: theme.space.xcontainer_lg,
              },
              display: {
                lg: "grid",
              },
              gap: {
                lg: theme.space.x24,
              },
              gridTemplateColumns: {
                lg: "repeat(2, minmax(0, 1fr))",
              },
            }}
          >
            <Box>
              <Box>
                <Image
                  styleSheet={{
                    boxShadow: `0 5px 16px 0px ${theme.colors.neutral[999]}73`,
                    borderRadius: {
                      md: theme.space.x4,
                    },
                    maxWidth: {
                      lg: "none",
                    },
                    width: "500px",
                    height: "300px",
                    marginLeft: "150px",
                  }}
                  src={LOGO_ALURA_URL}
                  alt="Logo Find By"
                />
              </Box>
              <Box
                styleSheet={{
                  marginTop: {
                    xs: theme.space.x16,
                    sm: theme.space.x20,
                  },

                  paddingLeft: theme.space.x20,
                }}
              >
                <Box>
                  <Link
                    href="/faq"
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
                        textVariant: theme.typography.variants.body4,
                        fontWeight: "900",
                        hover: {
                          color: theme.colors.primary["600"], // Cor mais escura para o hover
                          textDecoration: "underline", // Sublinhando o link no hover
                        },
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
                      Confira as principais dúvidas
                    </Text>
                  </Link>
                </Box>
                <Box
                  styleSheet={{
                    marginTop: theme.space.x6,
                    maxWidth: theme.space.xcontainer_sm,
                  }}
                >
                  <Text
                    as="h1"
                    styleSheet={{
                      textVariant: theme.typography.variants.heading2,
                      color: theme.colors.neutral["900"],
                    }}
                  >
                    O que é o Contato Libra?
                  </Text>
                  <Text
                    as="p"
                    styleSheet={{
                      textVariant: theme.typography.variants.body1,
                      color: theme.colors.neutral["500"],
                      marginTop: theme.space.x2,
                    }}
                  >
                    Contato libras e uma plataforma para contratação de
                    interpretes em todas as regiões do brasil que permite
                    promover a acessibilidade por meio da oferta de serviços de
                    tradução e interpretação em língua brasileira de sinais. Com
                    a contato libras você pode fazer a contratação de um
                    interprete para reuniões presencialmente ou por vídeo
                    chamada trazendo assim um melhor convívio para a comunidade
                    surda ou ouvinte.
                  </Text>
                </Box>
                <Box
                  styleSheet={{
                    marginTop: theme.space.x6,
                    maxWidth: theme.space.xcontainer_sm,
                  }}
                >
                  <Text
                    as="h1"
                    styleSheet={{
                      textVariant: theme.typography.variants.heading2,
                      color: theme.colors.neutral["900"],
                    }}
                  >
                    A quem se destina?
                  </Text>
                  <Text
                    as="p"
                    styleSheet={{
                      textVariant: theme.typography.variants.body1,
                      color: theme.colors.neutral["500"],
                      marginTop: theme.space.x6,
                    }}
                  >
                    A empresas privadas e públicas, concessionárias, planos de
                    saúde, bancos, comércio físico e on-line, restaurantes,
                    enfim, todas as organizações que desejam atender a pessoa
                    surda no seu próprio idioma, contribuindo para a construção
                    da cidadania, do respeito, da autonomia e da inclusão de
                    milhões de brasileiros.
                  </Text>
                </Box>
                <Box
                  as="form"
                  action="#"
                  styleSheet={{
                    display: {
                      sm: "flex",
                    },
                    marginTop: theme.space.x12,
                    width: {
                      sm: theme.space["x1/1"],
                    },
                    maxWidth: {
                      sm: theme.space.xcontainer_lg,
                    },
                  }}
                >
                  <Box
                    styleSheet={{
                      marginTop: {
                        xs: theme.space.x4,
                        sm: theme.space.x0,
                      },
                      marginLeft: {
                        sm: theme.space.x3,
                      },
                    }}
                  >
                    <Button
                      type="submit"
                      styleSheet={{
                        backgroundColor: theme.colors.primary["800"],
                        paddingLeft: theme.space.x2,
                        paddingRight: theme.space.x2,
                        fontWeight: 300,
                        textVariant: theme.typography.variants.body1,
                      }}
                    >
                      <Link
                        href="/cadastrar"
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
                          }}
                        >
                          Cadastrar como um interprete
                        </Text>
                      </Link>
                    </Button>
                  </Box>
                  <Box
                    styleSheet={{
                      marginTop: {
                        xs: theme.space.x4,
                        sm: theme.space.x0,
                      },
                      marginLeft: {
                        sm: theme.space.x3,
                      },
                    }}
                  >
                    <Button
                      type="submit"
                      styleSheet={{
                        backgroundColor: theme.colors.primary["800"],
                        paddingLeft: theme.space.x2,
                        paddingRight: theme.space.x2,
                        fontWeight: 300,
                        textVariant: theme.typography.variants.body1,
                      }}
                    >
                      <Link
                        href="/cadastrar"
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
                          }}
                        >
                          Contratrar um interprete
                        </Text>
                      </Link>
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box
              styleSheet={{
                marginTop: "650px",
                maxWidth: theme.space.xcontainer_sm,
                marginLeft: "150px",
              }}
            >
              <Text
                as="h1"
                styleSheet={{
                  textVariant: theme.typography.variants.heading2,
                  color: theme.colors.neutral["900"],
                }}
              >
                Como funciona?
              </Text>
              <Text
                as="p"
                styleSheet={{
                  textVariant: theme.typography.variants.body1,
                  color: theme.colors.neutral["500"],
                  marginTop: theme.space.x6,
                  display: "inline-flex",
                }}
              >
                Contato libras e uma plataforma onde pode ser contratado o
                interprete para reuniões, palestra em escolas ou empresas.
                Agendamento de horário livre escolha.
              </Text>
            </Box>
          </Box>

          <SideImage />
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}

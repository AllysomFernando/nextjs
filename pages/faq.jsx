import Heads from "../src/components/Head";
import Link from "../src/components/Link";
import Box from "../src/components/Box";
import Text from "../src/components/Text";
import { theme } from "../src/components/Theme";
export async function getStaticProps() {
  const FAQ_API_URL =
    "https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json";
  const faq = await fetch(FAQ_API_URL)
    .then((respostaDoServidor) => {
      return respostaDoServidor.json();
    })
    .then((res) => {
      return res;
    });
  return {
    props: {
      faq,
    },
  };
}

export default function FAQpage() {
  return (
    <div>
      <Box
        as="main"
        styleSheet={{
          flex: 1,
          marginLeft: {
            xs: theme.space.x3,
          },
        }}
      >
        <Heads>FindBy | FAQ</Heads>

        <Link href="/">Ir para a página Home</Link>
        <Box
          styleSheet={{
            flex: 1,
            marginTop: theme.space.x20,
          }}
        >
          <Text
            styleSheet={{
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
            Perguntas Frequentes
          </Text>
        </Box>
        <Box
          styleSheet={{
            flex: 1,
            marginTop: theme.space.x10,
            backgroundColor: theme.colors.neutral[100],
            width: "800px",
          }}
        >
          <Text
            styleSheet={{
              paddingLeft: "10px",
              textVariant: theme.typography.variants.body4,
              fontWeight: "600",
              fontSize: "20px",
            }}
          >
            Oque e a contato libras Contato libras?
          </Text>
          <br />É uma plataforma para contratação de interpretes em todas as
          regiões do brasil que permite
          <br />
          promover a acessibilidade por meio da oferta de serviços de tradução e
          <br />
          interpretação em língua brasileira de sinais. Com a contato libras
          <br />
          você pode fazer a contratação de um interprete para reuniões
          <br />
          presencialmente ou por vídeo chamada trazendo assim um melhor convívio
          <br />
          para a comunidade surda ou ouvinte.
          <br />
        </Box>
      </Box>
    </div>
  );
}

import Box from "../src/components/Box";
import Text from "../src/components/Text";
import { theme } from "../src/components/Theme";
import Heads from "../src/components/Head";
import Link from "../src/components/Link";
import FAQItem from "../src/components/FAQItem";
export default function FAQpage() {
  return (
    <div>
      <Box
        styleSheet={{
          flex: 1,
          marginLeft: {
            xs: theme.space.x3,
          },
        }}
      >
        <Heads>Contato Libra | FAQ</Heads>
        <Box
          styleSheet={{
            marginTop: "30px",
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
        <Box
          styleSheet={{
            flex: 1,
            marginTop: theme.space.x20,
          }}
        >
          <Text
            styleSheet={{
              textVariant: theme.typography.variants.heading1,
              fontWeight: "900",
              borderRadius: theme.space.x64,
              color: theme.colors.primary["400"],
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
        <FAQItem
          question="Oque e a contato libras Contato libras?"
          answer="É uma plataforma para contratação de interpretes em todas as regiões do brasil que permite promover a acessibilidade por meio da oferta de serviços de tradução e interpretação em língua brasileira de sinais. Com a contato libras você pode fazer a contratação de um interprete para reuniões presencialmente ou por vídeo chamada trazendo assim um melhor convívio para a comunidade surda ou ouvinte."
        />
        <FAQItem
          question="A quem se destina?"
          answer="Empresas privadas e públicas, operadoras de concessões, provedores de planos de saúde, instituições bancárias, estabelecimentos comerciais presenciais e virtuais, restaurantes e todas as demais organizações que buscam atender o público surdo em sua própria língua, fortalecem a cidadania, promovem o respeito, incentivam a autonomia e auxiliam na inclusão de milhões de brasileiros."
        />
        <FAQItem
          question="Como funciona?"
          answer="Contato Libras é uma plataforma onde se pode contratar um intérprete para reuniões, palestras em escolas ou empresas. Oferece agendamento de horário de livre escolha."
        />
        <FAQItem
          question="Como acessar?"
          answer="O Contato Libras está disponível por QR code ou link e pode ser acessado de celular, tablet ou computador com conexão à internet."
        />
      </Box>
    </div>
  );
}

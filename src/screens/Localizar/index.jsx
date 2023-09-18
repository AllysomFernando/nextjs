import Box from "../../components/Box";
import Input from "../../components/Input";
import SelectTipo from "../../components/Select";
import Text from "../../components/Text";
import Image from "../../components/Image";
import Button from "../../components/Button";
import { theme } from "../../components/Theme";
import Heads from "../../components/Head";
export default function Localizar() {
  return (
    <div>
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
        <Heads>
          Contato Libra | Localizar
        </Heads>
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
          >
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
          </Button>
        </Box>
      </Box>
    </div>
  );
}

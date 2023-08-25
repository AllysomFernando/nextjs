import { theme } from "../Theme";
import Box from "../Box";
import Text from "../Text";

export default function Footer() {
  return (
    <Box
      as="footer"
      styleSheet={{
        backgroundColor: theme.colors.neutral[900],
        paddingTop: "10px"
      }}
    >
      <Box
        styleSheet={{
          overflow: "hidden",
          maxWidth: theme.space.xcontainer_xl,
          marginLeft: "auto",
          marginRight: "auto",
          paddingTop: "30px"
        }}
      >
        <Text
          as="p"
          styleSheet={{
            textVariant: theme.typography.variants.body3,
            textAlign: "center",
            color: theme.colors.neutral[400],
          }}
        >
          © {new Date().getFullYear()} AllysomFernando. Todos os direitos
          reservados.
        </Text>
      </Box>
    </Box>
  );
}

import Box from "../Box";
import Text from "../Text";
import { theme } from "../Theme";
export default function FAQItem({ question, answer }) {
  return (
    <Box
      styleSheet={{
        marginTop: theme.space.x10,
        backgroundColor: theme.colors.neutral[100],
        padding: theme.space.x3,
        borderRadius: theme.space.x1,
        boxShadow: "0px 2px 4px rgba(0,0,0,0.1)",
      }}
    >
      <Text
        styleSheet={{
          paddingLeft: theme.space.x1,
          textVariant: theme.typography.variants.body4,
          fontWeight: "600",
          fontSize: "20px",
        }}
      >
        {question}
      </Text>
      <Text
        styleSheet={{
          paddingLeft: theme.space.x1,
          marginTop: theme.space.x2,
          textVariant: theme.typography.variants.body2,
          fontWeight: "normal",
          fontSize: "16px",
        }}
      >
        {answer}
      </Text>
    </Box>
  );
}

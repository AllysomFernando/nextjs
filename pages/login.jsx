import React, { useState } from "react";
import Box from "../src/components/Box";
import Input from "../src/components/Input";
import Button from "../src/components/Button";
import Text from "../src/components/Text";
import { theme } from "../src/components/Theme";
import { useRouter } from 'next/router';  

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();

    // Aqui você pode adicionar lógica para autenticar o usuário,
    // como uma chamada de API ou verificar se os detalhes estão corretos.
    console.log("Username:", username);
    console.log("Password:", password);
    router.push('/localizar');

  };

  return (
    <Box
      as="main"
      styleSheet={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: theme.colors.neutral["050"],
      }}
    >
      <Text
        styleSheet={{
          fontSize: "24px",
          fontWeight: "bold",
          marginBottom: theme.space.x5,
        }}
      >
        Login
      </Text>
      <form onSubmit={handleSubmit} style={{ width: "300px" }}>
        <Box styleSheet={{ marginBottom: theme.space.x4 }}>
          <label style={{ display: "block", marginBottom: theme.space.x2 }}>
            Nome de usuário:
          </label>
          <Input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Box>
        <Box styleSheet={{ marginBottom: theme.space.x4 }}>
          <label style={{ display: "block", marginBottom: theme.space.x2 }}>
            Senha:
          </label>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Box>
        <Button type="submit">entrar</Button>
      </form>
    </Box>
  );
};

export default LoginPage;

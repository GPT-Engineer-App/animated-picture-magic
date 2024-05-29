import { Container, Text, VStack, Image, Box, keyframes } from "@chakra-ui/react";
import { FaRocket } from "react-icons/fa";
import { IconButton } from "@chakra-ui/react";

// Define keyframes for the animation
const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Animated Picture</Text>
        <Box animation={`${spin} infinite 20s linear`}>
          <Image src="https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhbmltYXRlZCUyMHBpY3R1cmV8ZW58MHx8fHwxNzE3MDA2ODMwfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Animated Picture" boxSize="200px" borderRadius="full" />
        </Box>
        <IconButton aria-label="Rocket Icon" icon={<FaRocket />} size="lg" />
      </VStack>
    </Container>
  );
};

export default Index;

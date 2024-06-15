import { Box, Container, Text, VStack } from "@chakra-ui/react";

const Invest = () => {
  return (
    <Box bg="black" color="white" minH="100vh" display="flex" alignItems="center" justifyContent="center">
      <Container maxW="container.md">
        <VStack spacing={8} p={8} borderRadius="md">
          <Text fontSize="2xl" fontWeight="bold">
            Thank You for Investing in the Future of <span style={{ color: "purple" }}>Energy</span>
          </Text>
          <Text fontSize="lg">
            We appreciate your commitment to revolutionizing the energy sector. Join us for a meeting where we will showcase a <span style={{ color: "purple" }}>200-volt, 1.5m³ prototype</span>.
          </Text>
          <iframe
            title="Investment Form"
            src="https://form.jotform.com/your-jotform-id"
            width="100%"
            height="800"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
          >
            Loading…
          </iframe>
        </VStack>
      </Container>
    </Box>
  );
};

export default Invest;
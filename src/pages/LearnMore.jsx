import { Box, Container, Text, VStack } from "@chakra-ui/react";

const LearnMore = () => {
  return (
    <Box bg="black" color="white" minH="100vh" display="flex" alignItems="center" justifyContent="center">
      <Container maxW="container.md">
        <VStack spacing={8} p={8} borderRadius="md">
          <Text fontSize="2xl" fontWeight="bold">
            The Shift to <span style={{ color: "purple" }}>Green Energy</span>
          </Text>
          <Text fontSize="lg">
            With global warming and ozone depletion, the world is evolving from fossil fuels and carbon-emitting fuels to <span style={{ color: "purple" }}>green energy</span>. This creates a high demand for electricity.
          </Text>
          <Text fontSize="2xl" fontWeight="bold">
            Our Revolutionary Power Source
          </Text>
          <Text fontSize="lg">
            Our power source is a free turbine that doesn't need kinetic energy from water, wind, or solar, nor does it use nuclear energy. It is cheap to create and maintain, filling a huge gap in the energy sector.
          </Text>
        </VStack>
      </Container>
    </Box>
  );
};

export default LearnMore;
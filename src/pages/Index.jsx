import { Container, Text, VStack, Button, Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  const [bgImage, setBgImage] = useState("");

  useEffect(() => {
    import("../../public/images/car-charging-station.jpg").then((image) => {
      setBgImage(image.default);
    });
  }, []);

  return (
    <Box
      backgroundImage={`url(${bgImage})`}
      backgroundSize="cover"
      backgroundPosition="center"
      height="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      color="black"
    >
      <Container centerContent maxW="container.md">
        <VStack spacing={4} bg="rgba(255, 255, 255, 0.8)" p={8} borderRadius="md">
          <Text fontSize="4xl" fontWeight="bold">
            Invest in the Future of <span style={{ color: "purple" }}>Unlimited Kinetic Energy Source</span>
          </Text>
          <Text fontSize="xl" textAlign="center">
            Join us in revolutionizing the way we power our vehicles with <span style={{ color: "purple" }}>unlimited kinetic energy source</span>.
          </Text>
          <Button colorScheme="teal" size="lg" onClick={() => navigate("/learn-more")}>
            Learn More
          </Button>
          <Button colorScheme="green" size="lg" onClick={() => navigate("/invest")}>
            Invest
          </Button>
        </VStack>
      </Container>
    </Box>
  );
};

export default Index;
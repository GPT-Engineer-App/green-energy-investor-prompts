import { Box, Container, Text, VStack, Input, Button, FormControl, FormLabel } from "@chakra-ui/react";
import { useState } from "react";

const Invest = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await fetch("https://formsubmit.co/ajax/eduofficiale@gmail.com", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify(formData)
        });

        const result = await response.json();
        if (result.success) {
          alert("Thank you for your submission!");
          setFormData({
            name: "",
            email: "",
            phone: ""
          });
        } else {
          console.error("Submission error:", result);
          alert("There was an error with your submission. Please try again.");
        }
      } catch (error) {
        console.error("Fetch error:", error);
        alert("There was an error with your submission. Please try again.");
      }
    };

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
          <form onSubmit={handleSubmit}>
            <FormControl id="name" isRequired>
              <FormLabel>Name</FormLabel>
              <Input type="text" name="name" value={formData.name} onChange={handleChange} />
            </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel>Email</FormLabel>
              <Input type="email" name="email" value={formData.email} onChange={handleChange} />
            </FormControl>
            <FormControl id="phone" isRequired>
              <FormLabel>Phone</FormLabel>
              <Input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
            </FormControl>
            <Button mt={4} colorScheme="teal" type="submit">
              Submit
            </Button>
          </form>
        </VStack>
      </Container>
    </Box>
  );
};

export default Invest;
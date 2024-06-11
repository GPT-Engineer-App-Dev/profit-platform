import { Box, Container, Flex, Heading, Text, VStack, Image, Divider } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Heading as="h1" size="2xl" mb={6} textAlign="center">
        Financial Times
      </Heading>
      
      <Flex direction={{ base: "column", md: "row" }} mb={6}>
        <Box flex="3" mr={{ md: 4 }}>
          <Heading as="h2" size="lg" mb={4}>
            Headlines
          </Heading>
          <VStack spacing={4} align="stretch">
            <Box p={4} shadow="md" borderWidth="1px">
              <Heading as="h3" size="md">Headline 1</Heading>
              <Text mt={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
            </Box>
            <Box p={4} shadow="md" borderWidth="1px">
              <Heading as="h3" size="md">Headline 2</Heading>
              <Text mt={2}>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
            </Box>
            <Box p={4} shadow="md" borderWidth="1px">
              <Heading as="h3" size="md">Headline 3</Heading>
              <Text mt={2}>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
            </Box>
          </VStack>
        </Box>
        
        <Box flex="1" mt={{ base: 4, md: 0 }}>
          <Heading as="h2" size="lg" mb={4}>
            Sidebar
          </Heading>
          <VStack spacing={4} align="stretch">
            <Box p={4} shadow="md" borderWidth="1px">
              <Heading as="h3" size="md">Advertisement</Heading>
              <Text mt={2}>Ad content goes here.</Text>
            </Box>
            <Box p={4} shadow="md" borderWidth="1px">
              <Heading as="h3" size="md">Additional Content</Heading>
              <Text mt={2}>Additional content goes here.</Text>
            </Box>
          </VStack>
        </Box>
      </Flex>
      
      <Divider my={6} />
      
      <Box>
        <Heading as="h2" size="lg" mb={4}>
          Featured Articles
        </Heading>
        <VStack spacing={4} align="stretch">
          <Box p={4} shadow="md" borderWidth="1px">
            <Flex direction={{ base: "column", md: "row" }}>
              <Image
                boxSize="150px"
                objectFit="cover"
                src="https://via.placeholder.com/150"
                alt="Article Image"
                mr={{ md: 4 }}
                mb={{ base: 4, md: 0 }}
              />
              <Box>
                <Heading as="h3" size="md">Featured Article 1</Heading>
                <Text mt={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
              </Box>
            </Flex>
          </Box>
          <Box p={4} shadow="md" borderWidth="1px">
            <Flex direction={{ base: "column", md: "row" }}>
              <Image
                boxSize="150px"
                objectFit="cover"
                src="https://via.placeholder.com/150"
                alt="Article Image"
                mr={{ md: 4 }}
                mb={{ base: 4, md: 0 }}
              />
              <Box>
                <Heading as="h3" size="md">Featured Article 2</Heading>
                <Text mt={2}>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
              </Box>
            </Flex>
          </Box>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;
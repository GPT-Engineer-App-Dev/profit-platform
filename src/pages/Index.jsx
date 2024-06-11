import { Box, Container, Flex, Heading, Text, VStack, Image, Divider } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Heading as="h1" size="2xl" mb={6} textAlign="center">
        Financial Times
      </Heading>
      <Flex direction={{ base: "column", md: "row" }} gap={6}>
        {/* Main Content */}
        <Box flex="3">
          <VStack spacing={6} align="stretch">
            {/* Headline Section */}
            <Box>
              <Heading as="h2" size="xl" mb={4}>
                Top Headlines
              </Heading>
              <Box bg="gray.100" p={4} borderRadius="md">
                <Heading as="h3" size="md">
                  Breaking News: Market Hits Record Highs
                </Heading>
                <Text mt={2}>
                  The stock market reached an all-time high today, driven by strong earnings reports and economic optimism.
                </Text>
              </Box>
            </Box>
            <Divider />
            {/* Featured Articles Section */}
            <Box>
              <Heading as="h2" size="xl" mb={4}>
                Featured Articles
              </Heading>
              <VStack spacing={4} align="stretch">
                <Box bg="gray.100" p={4} borderRadius="md">
                  <Heading as="h3" size="md">
                    The Future of Technology
                  </Heading>
                  <Text mt={2}>
                    Innovations in AI and machine learning are set to transform industries across the globe.
                  </Text>
                </Box>
                <Box bg="gray.100" p={4} borderRadius="md">
                  <Heading as="h3" size="md">
                    Climate Change and Its Impact
                  </Heading>
                  <Text mt={2}>
                    Climate change continues to be a pressing issue, with significant impacts on the environment and economy.
                  </Text>
                </Box>
              </VStack>
            </Box>
          </VStack>
        </Box>
        {/* Sidebar */}
        <Box flex="1" bg="gray.50" p={4} borderRadius="md">
          <Heading as="h2" size="lg" mb={4}>
            Sidebar
          </Heading>
          <VStack spacing={4} align="stretch">
            <Box bg="gray.100" p={4} borderRadius="md">
              <Heading as="h3" size="md">
                Advertisement
              </Heading>
              <Text mt={2}>
                Your ad here.
              </Text>
            </Box>
            <Box bg="gray.100" p={4} borderRadius="md">
              <Heading as="h3" size="md">
                Additional Content
              </Heading>
              <Text mt={2}>
                More news and updates.
              </Text>
            </Box>
          </VStack>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;
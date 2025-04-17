import { Box, Text } from '@chakra-ui/react';

export const Footer = () => {
  return (
    <Box
      as="footer"
      padding="4"
      position="absolute"
      bottom="0"
      left="0"
      right="0"
    >
      <Box maxWidth="1200px" margin="0 auto" textAlign="center">
        <Text fontSize="sm" mt={1}>
        <Box as="span" fontWeight="bold">Disclaimer:</Box> AI-generated content may not be 100% accurate. Please verify
          accurately.
        </Text>
      </Box>
    </Box>
  );
};

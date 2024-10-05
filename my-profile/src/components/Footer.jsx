import React from 'react';
import { Box } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box as="footer" bg="gray.700" color="white" textAlign="center" p={4} width="100%" >
      <p>&copy; 2024 My Portfolio</p>
    </Box>
  );
};

export default Footer;

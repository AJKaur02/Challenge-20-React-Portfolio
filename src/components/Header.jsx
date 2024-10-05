import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import Navigation from './Navigation';

const Header = () => {
  return (
    <Box as="header" bg="blue.500" color="white" p={4} textAlign="center">
      <Heading as="h1" size="lg">My Portfolio</Heading>
      <Navigation />
    </Box>
  );
};

export default Header;

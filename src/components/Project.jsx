import React from 'react';
import { Box, Heading, Text, Link as ChakraLink } from '@chakra-ui/react';

const Project = ({ title, description, link }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" p={4} mb={4} boxShadow="md">
      <Heading size="md">{title}</Heading>
      <Text mt={2}>{description}</Text>
      <ChakraLink href={link} target="_blank" rel="noopener noreferrer" color="blue.500" mt={2}>
        View Project
      </ChakraLink>
    </Box>
  );
};

export default Project;

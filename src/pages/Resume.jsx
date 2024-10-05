import { Box, Heading, Text, Link, Image } from '@chakra-ui/react';
import resumeExampleImage from '../assets/resume-example.png'; // Adjust the path as necessary

const Resume = () => {
  return (
    <Box p={4} textAlign="center">
      <Heading as="h2" size="lg" mb={4}>Resume</Heading>
      <Text mt={2}>
        Download the resume example <Link href="./assets/resume-example.pdf" download color="blue.500">here</Link>.
      </Text>
      <Box display="flex" justifyContent="center" mt={4}>
        <Image src={resumeExampleImage} alt="Resume Example" />
      </Box>
    </Box>
  );
};

export default Resume;

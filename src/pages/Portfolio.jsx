import React from 'react';
import { Box, Heading, Flex } from '@chakra-ui/react';
import Project from '../components/Project';

const projects = [
  {
    title: 'Project One',
    description: 'Introducing our innovative food ontology and semantic recipe and cocktail finder! With just one click, you can discover a variety of delicious recipes and cocktails. Whether you are looking to spice up your meal and cocktail routine or seeking last-minute inspiration for family meal planning, you have come to the right place. Our random recipe and cocktail generator is designed to help you break free from your cooking rut, providing fresh ideas for dishes and cocktails that you may have never considered before. Explore new flavors and elevate your culinary experience with ease!',
    link: 'https://github.com/tjmcd2010/Supper-and-Sips',
  },
  {
    title: 'Project Two',
    description: 'RESTless Readers is an interactive full-stack web application designed to foster community through book clubs. Users can create accounts and log in to join a vibrant community of book enthusiasts. The platform allows members to create and view posts about specific books, share insights, and engage in meaningful discussions. In addition to exploring book-related content, users can schedule and attend book club meetings, making it easy to connect with fellow readers and dive deeper into their favorite titles. Join RESTless Readers to explore new perspectives, share your passion for literature, and enhance your reading experience in a collaborative environment!',
    link: 'https://github.com/bragonese1/restless-readers',
  },
  {
    title: 'Project Three',
    description: 'Uplearn is an interactive learning platform designed to empower users to browse, enroll in, and complete skill-based courses with ease. With a focus on user-friendly interfaces and robust backend scalability, Uplearn ensures seamless access to a wealth of educational materials, assessments, and collaborative learning tools. Our platform aims to provide flexible, on-demand education tailored to individual learning paces and styles. Whether you are looking to enhance your skills or explore new subjects, Uplearn makes knowledge more accessible and engaging for everyone. Join Uplearn today and take your learning journey to the next level!',
    link: 'https://github.com/aniraannu/Uplearn',
  },
];

const Portfolio = () => {
  return (
    <Box p={4} pb={10}> {/* Adjust padding-bottom for space */}
      <Heading as="h2" size="lg" textAlign="center" mb={6}>Portfolio</Heading>
      <Flex direction="column" align="center">
        {/* Project One */}
        <Flex justify="flex-start" width="100%" mb={2}>
          <Box width={{ base: '90%', md: '35%' }} _hover={{ boxShadow: "lg", transform: "scale(1.05)", transition: "transform 0.2s" }}>
            <Project {...projects[0]} />
          </Box>
        </Flex>

        {/* Project Two */}
        <Flex justify="center" width="100%" mb={2}>
          <Box width={{ base: '90%', md: '50%' }} _hover={{ boxShadow: "lg", transform: "scale(1.05)", transition: "transform 0.2s" }}>
            <Project {...projects[1]} />
          </Box>
        </Flex>

        {/* Project Three */}
        <Flex justify="flex-end" width="100%">
          <Box width={{ base: '90%', md: '35%' }} _hover={{ boxShadow: "lg", transform: "scale(1.05)", transition: "transform 0.2s" }}>
            <Project {...projects[2]} />
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Portfolio;

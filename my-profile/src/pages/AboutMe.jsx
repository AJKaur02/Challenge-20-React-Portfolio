import React from 'react';
import { Box, Heading, Text, Link, HStack, Icon } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaReact, FaNode, FaPython, FaDatabase } from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';

const AboutMe = () => {
  return (
    <Box minHeight="100vh" display="flex" flexDirection="column">
      <Box p={4} flex="1" display="flex" flexDirection="column" alignItems="center">
        <Box
          maxWidth="800px" // Set a max width for the About Me box
          width="100%" // Allow it to be responsive
          bg="gray.100" // Background color for visibility
          borderRadius="lg" // Rounded corners
          boxShadow="md" // Add some shadow for depth
          p={6} // Padding inside the box
        >
          <Heading as="h2" size="2xl" mb={4} textAlign="center">About Me</Heading>
          <Text fontSize="lg" mt={2} textAlign="center">
            Hello! I’m <strong>Amrinderjeet Kaur</strong>, a dedicated <strong>computer science major</strong> with a strong focus on <strong>full-stack development</strong> and <strong>bioengineering</strong>. My passion lies at the intersection of <strong>technology</strong> and <strong>healthcare</strong>, where I aim to create innovative solutions that enhance user experiences and improve lives.
          </Text>
          <Text fontSize="lg" mt={2} textAlign="center">
            With hands-on experience in building a variety of applications—from dynamic portfolio websites to interactive e-learning platforms—I take pride in developing <strong>intuitive interfaces</strong> and <strong>robust back-end systems</strong>.
          </Text>
          <Text fontSize="lg" mt={2} textAlign="center">
            I am currently serving in the <strong>U.S. Army Reserves</strong>, where I continue to develop skills in <strong>leadership</strong>, <strong>teamwork</strong>, and <strong>problem-solving</strong>. This experience shapes my approach to projects, emphasizing <strong>collaboration</strong> and <strong>innovation</strong>.
          </Text>
          <Text fontSize="lg" mt={2} textAlign="center">
            Beyond coding, I enjoy engaging with my community and sharing insights on <strong>emerging technologies</strong>. I believe in the power of collaboration and creativity, and I’m excited to connect with others who share a similar passion for innovation.
          </Text>
        </Box>

        {/* Personal Skillset Section */}
        <Box mt={8} maxWidth="800px" width="100%">
          <Heading as="h3" size="lg" textAlign="center">My Skillset</Heading>
          <HStack spacing={4} mt={4} justifyContent="center">
            <Icon as={FaReact} boxSize={12} className="skill-icon" /> {/* Increased size */}
            <Icon as={FaNode} boxSize={12} className="skill-icon" /> {/* Increased size */}
            <Icon as={FaPython} boxSize={12} className="skill-icon" /> {/* Increased size */}
            <Icon as={FaDatabase} boxSize={12} className="skill-icon" /> {/* Increased size */}
            {/* Add more skills/tools as needed */}
          </HStack>
        </Box>

        {/* FIND ME ON Section */}
        <Box mt={8} maxWidth="800px" width="100%">
          <Heading as="h3" size="lg" textAlign="center">FIND ME ON</Heading>
          <Text fontSize="lg" mt={2} textAlign="center">
            Feel free to <Link as={RouterLink} to="/contact" color="blue.500">connect</Link> with me:
          </Text>
          <HStack spacing={4} mt={2} justifyContent="center">
            <Link href="mailto:example@example.com" isExternal>
              <Icon as={FaEnvelope} boxSize={8} className="social-icon" />
            </Link>
            <Link href="https://github.com/AJKaur02" isExternal>
              <Icon as={FaGithub} boxSize={8} className="social-icon" />
            </Link>
            <Link href="https://www.linkedin.com/in/amrinderjeetkaur/" isExternal>
              <Icon as={FaLinkedin} boxSize={8} className="social-icon" />
            </Link>
            <Link href="https://www.instagram.com/yourusername/" isExternal>
              <Icon as={FaInstagram} boxSize={8} className="social-icon" />
            </Link>
          </HStack>
        </Box>
      </Box>

      {/* CSS Styles */}
      <style jsx>{`
        .skill-icon {
          transition: color 0.3s;
          cursor: pointer;
        }
        
        .skill-icon:hover {
          color: #3182ce; /* Change to your desired hover color */
        }

        .social-icon {
          transition: color 0.3s;
          cursor: pointer;
        }
        
        .social-icon:hover {
          color: #3182ce; /* Change to your desired hover color */
        }
      `}</style>
    </Box>
  );
};

export default AboutMe;

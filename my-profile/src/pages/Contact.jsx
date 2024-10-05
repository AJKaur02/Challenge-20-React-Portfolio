import React, { useState } from 'react';
import { Box, Heading, Link, Button, Input, Textarea, Text, Divider, useDisclosure } from '@chakra-ui/react';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import Confetti from 'react-confetti';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Open the popup
    onOpen();

    // Clear form fields
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <Box display="flex" justifyContent="space-between" p={4} height="100vh" width="100%">
      {/* Left Side: Icons */}
      <Box 
        width="30%" 
        display="flex" 
        flexDirection="column" 
        justifyContent="center" 
        alignItems="flex-end"  // Align closer to the divider
      >
        <Heading 
          as="h3" 
          size="2xl"  // Make the heading larger
          textAlign="center" 
          mb={4} 
          mt={0} 
        >
          Connect with Me
        </Heading>
        
        {/* Icons Section */}
        <Box display="flex" flexDirection="column" alignItems="flex-end">
          <Box display="flex" justifyContent="space-between" width="80%" mb={4}> {/* Reduced width to bring icons closer */}
            <Link href="https://www.linkedin.com/in/amrinderjeetkaur/" isExternal mb={2}>
              <FaLinkedin size={50} style={{ margin: '15px', transition: 'transform 0.3s', color: 'black' }} className="icon" />
            </Link>
            <Link href="https://github.com/AJKaur02" isExternal mb={2}>
              <FaGithub size={50} style={{ margin: '15px', transition: 'transform 0.3s', color: 'black' }} className="icon" />
            </Link>
            <Link href="https://www.instagram.com/kaurxaj" isExternal>
              <FaInstagram size={50} style={{ margin: '15px', transition: 'transform 0.3s', color: 'black' }} className="icon" />
            </Link>
          </Box>
          <Box display="flex" justifyContent="space-between" width="80%"> {/* Reduced width to bring icons closer */}
            <Link href="mailto:example@example.com" isExternal mb={2}>
              <FaEnvelope size={50} style={{ margin: '15px', transition: 'transform 0.3s', color: 'black' }} className="icon" />
            </Link>
            <Link href="tel:123-456-7890" isExternal>
              <FaPhone size={50} style={{ margin: '15px', transition: '0.3s', color: 'black' }} className="icon" />
            </Link>
          </Box>
        </Box>
      </Box>

      {/* Center Divider Line */}
      <Divider orientation="vertical" borderColor="black" height="100%" mx={2} /> {/* Narrow mx */}

      {/* Right Side: Submission Form */}
      <Box 
        width="45%" 
        display="flex" 
        flexDirection="column" 
        justifyContent="center" 
        alignItems="flex-start" // Align closer to the divider
        boxShadow="md" 
        borderRadius="md" 
        bg="white" 
        p={4}
        maxWidth="400px"
      >
        <Heading 
          as="h3" 
          size="2xl"  // Make the heading larger
          mb={4} 
          mt={0} 
        >
          Contact Me
        </Heading>
        
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <Input 
            placeholder="Your Name" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            mb={2}
            required
            size="lg" // Make the input fields larger
          />
          <Input 
            placeholder="Your Email" 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            mb={2}
            required
            size="lg" // Make the input fields larger
          />
          <Textarea 
            placeholder="Your Message" 
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            mb={2}
            required
            size="lg" // Make the textarea larger
          />
          <Divider orientation="horizontal" borderColor="black" my={4} /> 
          <Button type="submit" colorScheme="teal" size="lg">Send Message</Button> {/* Larger button */}
        </form>
      </Box>

      {/* Confetti effect */}
      {isOpen && (
        <>
          <Confetti width={window.innerWidth} height={window.innerHeight} />
          <Box 
            position="fixed" 
            top={0} 
            left={0} 
            width="100%" 
            height="100%" 
            backgroundColor="rgba(0, 0, 0, 0.7)" 
            display="flex" 
            justifyContent="center" 
            alignItems="center" 
            zIndex={9999}
            onClick={onClose} 
          >
            <Box 
              bg="white" 
              p={5} 
              borderRadius="md" 
              textAlign="center"
            >
              <Text fontSize="lg" fontWeight="bold">Thank you for your message! I will be in touch soon!</Text>
            </Box>
          </Box>
        </>
      )}
    </Box>
  );
};

export default Contact;

import React from 'react';
import { Box, Link } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <Box as="nav">
      <Box as="ul" display="flex" justifyContent="center" listStyleType="none" p={0}>
        <Box as="li" mx={4}>
          <NavLink to="/" exact>
            <Link color="white">About Me</Link>
          </NavLink>
        </Box>
        <Box as="li" mx={4}>
          <NavLink to="/portfolio">
            <Link color="white">Portfolio</Link>
          </NavLink>
        </Box>
        <Box as="li" mx={4}>
          <NavLink to="/contact">
            <Link color="white">Contact</Link>
          </NavLink>
        </Box>
        <Box as="li" mx={4}>
          <NavLink to="/resume">
            <Link color="white">Resume</Link>
          </NavLink>
        </Box>
      </Box>
    </Box>
  );
};

export default Navigation;

import React, { useState } from 'react';
import { Box, Heading, Text, Accordion, AccordionItem, AccordionButton, AccordionPanel, CloseButton } from '@chakra-ui/react';
import { motion } from 'framer-motion';

import categories from '../assets/Info';
import { Link } from 'react-router-dom';

const MotionBox = motion(Box);

const Sidebar = (props) => {
  const [activeSubcategory, setActiveSubcategory] = useState(null);

  const handleSubcategoryClick = (subcategory) => {
    if (activeSubcategory === subcategory.id) {
      setActiveSubcategory(null);
    } else {
      setActiveSubcategory(subcategory.id);
    }
  };

  return (
    <MotionBox
    
      position="relative"
      width="300px"
      initial={{ x: -300 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.3 }}
      bg="gray.100"
      p={4}
      borderRadius="md"
      className="opacity-80"
    >
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={4} >
        <Heading as="h1" size="lg" fontSize="3xl" color="gray.800" mb={2}>
          Products
        </Heading>
        <Link to='/products' className="bg-[#9681EB] h-[40px] w-[100px] rounded-2xl items-center flex justify-center font-bold ml-2" >
          
          View more
        </Link>
        <CloseButton onClick={props.close} size="sm" color="gray.600" _hover={{ color: 'gray.800' }} />
      </Box>
      {categories.map((category) => (
        <Box key={category.id} mb={4}>
          <Heading as="h2" size="lg" fontSize="xl" color="gray.700" mb={2}>
            {category.name}
          </Heading>
          <Accordion allowMultiple>
            {category.subcategories.map((subcategory) => (
              <AccordionItem key={subcategory.id}>
                <AccordionButton
                  onClick={() => handleSubcategoryClick(subcategory)}
                  _hover={{ bg: 'gray.200' }}
                  p={2}
                  borderRadius="md"
                >
                  <Box flex="1" textAlign="left">
                    <Heading as="h3" size="md" fontSize="md" color="gray.700">
                      {subcategory.name}
                    </Heading>
                  </Box>
                </AccordionButton>
                <AccordionPanel pb={4} display={activeSubcategory === subcategory.id ? 'block' : 'none'}>
                  <Text color="gray.600">{subcategory.details}</Text>
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </Box>
      ))}
    </MotionBox>
  );
};

export default Sidebar;

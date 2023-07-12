import {
    Drawer,
    DrawerBody,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    DrawerCloseButton,
    useDisclosure,
    Button,
  } from '@chakra-ui/react';
  import Binocular from '../assets/Binocular.jpg'
  import React from 'react'

  import { useState } from 'react';
  
  const ProductsCard = ({ Fullinfo }) => {
    const [size, setSize] = useState('');
    const { isOpen, onOpen, onClose } = useDisclosure();
  
    const handleClick = (newSize) => {
      setSize(newSize);
      onOpen();
    };
  
    const sizes = ['full'];
  
    return (
      <>
        {sizes.map((size) => (
          <Button onClick={() => handleClick(size)} key={size} m={4} height={'60px'} >
            <h1 className='text-[30px] font-extrabold'>

            Click me
            
            </h1>
          
          </Button>
        ))}
  
        <Drawer onClose={onClose} isOpen={isOpen} size={size} >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            {Fullinfo.map((item) => (
              <React.Fragment key={item.category}>
                <DrawerHeader><h1 className='font-bold text-[30px]'>
                {item.category}
                  </h1></DrawerHeader>
                <DrawerBody>
                  <div className="shadow-2xl items-center bg-gray-200">
                  
                    <div className="grid grid-cols-2 ">
                      <h1 className='text-[20px] font-semibold'>Details</h1>
                      <img className='h-[300px] w-[300px] flex justify-end' src={Binocular} alt="/" />
                    </div>
  
                    <div>
                      <div>
                        <h1 className="font-bold text-[20px]">Body</h1>
                        <h1>{item.subcategories[0].body.description}</h1>
                      </div>
                      <div>
                        <h1 className="font-bold text-[20px]">Observation Head</h1>
                        <h1>{item.subcategories[0].observation_head.description}</h1>
                        <h2>Interpupillary Distance: {item.subcategories[0].observation_head.interpupillary_distance}</h2>
                      </div>
                      <div>
                        <h1 className="font-bold text-[20px]">Nose Piece</h1>
                        <h1>{item.subcategories[0].nose_piece.description}</h1>
                      </div>
                      <div>
                        <h1 className="font-bold text-[20px]">Specimen Stage</h1>
                        <h1>{item.subcategories[0].specimen_stage.description}</h1>
                      </div>
                      <div>
                        <h1 className="font-bold text-[20px]">Condenser</h1>
                        <h1>{item.subcategories[0].condenser.description}</h1>
                      </div>
                      <div>
                        <h1 className="font-bold text-[20px]">Focusing System</h1>
                        <h1>{item.subcategories[0].focusing_system.description}</h1>
                      </div>
                      <div>
                        <h1 className="font-bold text-[20px]">Light Source</h1>
                        <h1>{item.subcategories[0].light_source.description}</h1>
                      </div>
                      <div>
                        <h1 className="font-bold text-[20px]">Objectives</h1>
                        <h1>{item.subcategories[0].objectives.description}</h1>
                      </div>
                      <div>
                        <h1 className="font-bold text-[20px]">Eyepiece</h1>
                        <h1>{item.subcategories[0].eyepiece.description}</h1>
                      </div>
                      <div>
                        <h1 className="font-bold text-[20px]">Accessories</h1>
                        {item.subcategories[0].accessories.map((accessory, index) => (
                          <h1 key={index}>{accessory}</h1>
                        ))}
                      </div>
                      <div>
                        <h1 className="font-bold text-[20px]">Packing</h1>
                        <h1>{item.subcategories[0].packing}</h1>
                      </div>
                    </div>
                  </div>
                </DrawerBody>
              </React.Fragment>
            ))}
          </DrawerContent>
        </Drawer>
      </>
    );
  };
  
  export default ProductsCard;
  
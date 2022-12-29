import React from 'react';
import Button from '../components/Button';
import { FcLibrary } from 'react-icons/fc';
import { FcAddDatabase } from 'react-icons/fc';

function ButtonPage() {
  const handleClick = () => {
    console.log('click detected');
  };
  const handleMouseOver = () => {
    console.log('mouse over???');
  };

  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col">
        <Button onClick={handleClick} className="mb-5" primary rounded>
          <FcLibrary /> First click Me
        </Button>
        <Button danger onMouseEnter={handleMouseOver}>
          Second
        </Button>
        <Button success>Sale</Button>
        <Button rounded>
          {' '}
          <FcAddDatabase /> Adds
        </Button>
        <Button secondary rounded>
          {' '}
          Buy
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;

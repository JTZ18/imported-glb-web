import React, { useState } from 'react';
import { Data } from './Data';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { FiPlus, FiMinus } from 'react-icons/fi';

const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100vh;
`;

const Container = styled.div`
  position: absolute;
  top: 20px;
  background: rgba(36, 27, 16, 0.6);
  backdrop-filter: blur(4px);
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
  max-width: 800px;
`;

const Wrap = styled.div`
  color: #cab18a;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  text-align: left;
  cursor: pointer;

  h1 {
    padding: 2rem;
    font-size: 2rem;
    text-align: start;
    font-weight: 700;
  }

  span {
    margin-right: 1.5rem;
    margin-left: 1.5rem;
  }
`;

const Dropdown = styled.div`
  color: #cab18a;
  max-width: 800px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 100px;
  padding-right: 20px;

  p {
    font-size: 1.5rem;
    font-weight: 300;
  }
`;

const Accordion = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = index => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <IconContext.Provider value={{ color: '#cab18a', size: '25px' }}>
      <AccordionSection>
        <Container>
          {Data.map((item, index) => {
            return (
              <>
                <Wrap onClick={() => toggle(index)} key={index}>
                  <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                  <h1>{item.question}</h1>
                </Wrap>
                {clicked === index ? (
                  <Dropdown>
                    {item.answer.map((line,index) => {
                      return (
                        <>
                          <p>{line}</p> <br/>
                        </>
                      )
                    })}
                    {/* <p>{item.answer}</p> */}
                  </Dropdown>
                ) : null}
              </>
            );
          })}
        </Container>
      </AccordionSection>
    </IconContext.Provider>
  );
};

export default Accordion;
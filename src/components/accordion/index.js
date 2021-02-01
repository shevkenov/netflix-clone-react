import React, { useState, createContext, useContext } from "react";

import {Container,Title,Body,Header,Inner,Item,Frame} from "./styles/accordion";

const AccordionContext = createContext();

const Accordion = ({ children, ...restProps }) => {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  );
};

Accordion.Title = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};

Accordion.Frame = ({ children, ...restProps }) => {
  return <Frame {...restProps}>{children}</Frame>;
};

Accordion.Body = function AccordionBody({ children, ...restProps }) {
  const { showToggle } = useContext(AccordionContext);
  return (
    showToggle ? <Body {...restProps} >{children}</Body> : null
  );
};

Accordion.Header = function AccordionHeader({ children, ...restProps }) {
  const { showToggle, setShowToggle } = useContext(AccordionContext);
  return (
    <Header {...restProps} onClick={() => setShowToggle(!showToggle)}>
      {children}
      {showToggle ? (
        <img src="/images/icons/close-slim.png" alt="Close" />
      ) : (
        <img src="/images/icons/add.png" alt="Open" />
      )}
    </Header>
  );
};

Accordion.Item = function AccordionItem({ children, ...restProps }) {
  const [showToggle, setShowToggle] = useState(false);

  return (
    <AccordionContext.Provider value={{ showToggle, setShowToggle }}>
      <Item {...restProps}>{children}</Item>
    </AccordionContext.Provider>
  );
};

export default Accordion;

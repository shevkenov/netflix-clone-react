import React from "react";

import { Container, Input, Button, Title } from "./styles/optForm";

const OptForm = function OptForm({children, ...props}) {
    return <Container {...props}>{children}</Container>
}

OptForm.Title = function OptFormTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

OptForm.Input = function OptFormInput({ ...restProps }) {
  return <Input {...restProps} placeholder="Email address" />;
};

OptForm.Button = function OptFormButton({ children, ...restProps }) {
  return <Button {...restProps}>{children} <img src="/images/icons/chevron-right.png" alt="Submit"/></Button>;
};

export default OptForm;
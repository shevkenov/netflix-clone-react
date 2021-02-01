import React from 'react';

import {
  Title,
  Container,
  Input,
  Error,
  Submit,
  Text,
  TextSmall,
  HelpLink,
  Base
} from "./styles/form";

const Form = function Form({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

Form.Title = function FormTitle({children, ...restProps}) {
    return <Title {...restProps}>{children}</Title>
} 

Form.Error = function FormError({children, ...restProps}) {
    return <Error {...restProps}>{children}</Error>
}

Form.Submit = function FormSubmit({children, ...restProps}) {
    return <Submit {...restProps}>{children}</Submit>;
}

Form.Input = function FormInput({...restProps }) {
  return <Input {...restProps} />;
};

Form.TextSmall = function FormTextSmall({ children, ...restProps }) {
  return <TextSmall {...restProps}>{children}</TextSmall>;
};

Form.Text = function FormText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Form.Link = function FormLink({ children, ...restProps }) {
  return <HelpLink to="" {...restProps}>{children}</HelpLink>;
};

Form.Base = function FormBase({ children, ...restProps }) {
  return (
    <Base {...restProps}>
      {children}
    </Base>
  );
};

export default Form;
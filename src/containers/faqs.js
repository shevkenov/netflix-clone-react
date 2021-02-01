import React from "react";

import { Accordion, OptForm } from "../components/";
import faqs from "../fixtures/faqs.json";

export const FaqsContainer = () => {
  return (
    <Accordion>
      <Accordion.Title>Frequently Asked Questions</Accordion.Title>
      <Accordion.Frame>
        {faqs.map((question) => {
          return (
            <Accordion.Item key={question.id}>
              <Accordion.Header>{question.header}</Accordion.Header>
              <Accordion.Body>{question.body}</Accordion.Body>
            </Accordion.Item>
          );
        })}
      </Accordion.Frame>

      <OptForm>
        <OptForm.Title>
          Ready to watch? Enter your email to create or restart your membership.
        </OptForm.Title>
        <OptForm.Input/>
        <OptForm.Button>Try 30 days free</OptForm.Button>
      </OptForm>
    </Accordion>
  );
};

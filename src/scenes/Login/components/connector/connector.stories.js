import React from "react";
import { storiesOf, addDecorator } from "@storybook/react";
import apolloStorybookDecorator from "apollo-storybook-react";
// import { action } from "@storybook/addon-actions";
import LoginConnector from ".";

const typeDefs = `
input RegisterMutationInput {
  email: String!
}

type RegisterMutationResult {
  code: String!
  success: Boolean!
  message: String!
  securityCode: String!
}

type Query {
  dummy: String
}

type Mutation {
  register(input: RegisterMutationInput!): RegisterMutationResult!
}
`;

const mocks = {
  Mutation: () => ({
    register: () => ({
      code: "ok",
      success: true,
      message: "something",
      securityCode: "23 surprised ocelots"
    })
  })
};

addDecorator(
  apolloStorybookDecorator({
    typeDefs,
    mocks
  })
);

storiesOf("LoginConnector", module).add("default", () => <LoginConnector />);

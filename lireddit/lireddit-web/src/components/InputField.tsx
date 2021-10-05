import React, { InputHTMLAttributes } from "react";
import { FormControl, FormLabel, Input } from "@chakra-ui/core";
import { useField } from "formik";

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
};

export const InputField: React.FC<InputFieldProps> = ({}) => {
  //   const [field, { error }] = useField(props);
  return (
    <FormControl isRequired>
      <FormLabel htmlFor="name">First name</FormLabel>
      <Input id="name" placeholder="First Name" />
    </FormControl>
  );
};

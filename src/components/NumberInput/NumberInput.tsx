import React, { forwardRef } from 'react';
import TextInput from 'TextInput';

type NumberInputProps = {
  className?: string;
  describedBy?: string;
  id: string;
  isDisabled?: boolean;
  isInvalid?: boolean;
  isRequired?: boolean;
  name: string;
};

export const NumberInput = forwardRef(
  (
    {
      className,
      describedBy,
      id,
      isDisabled,
      isInvalid,
      isRequired,
      name
    }: NumberInputProps,
    ref: React.Ref<HTMLInputElement>
  ) => {
    return (
      <TextInput
        className={className}
        describedBy={describedBy}
        id={id}
        inputMode="numeric"
        isDisabled={isDisabled}
        isInvalid={isInvalid}
        isRequired={isRequired}
        name={name}
        pattern="[0-9]*"
        ref={ref}
        type="text"
      />
    );
  }
);

export default NumberInput;

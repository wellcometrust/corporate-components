import React from 'react';
import { format, isValid } from 'date-fns';

type DateTimeProps = {
  dateString: string;
};

export const DateTime = ({ dateString }: DateTimeProps) => {
  const dateObject = new Date(dateString);

  return <>{isValid(dateObject) ? format(dateObject, 'd MMMM y') : null}</>;
};

export default DateTime;

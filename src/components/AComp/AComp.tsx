import React from 'react';

type ACompProps = {
  children?: React.ReactNode;
};

export const AComp = ({ children }: ACompProps) => (
  <div className="acomp">
    <h1>Heading: Super</h1>
    <h2>Heading: Hero</h2>
    <h3>Heading: Display</h3>
    <h4>Heading: Large</h4>
    <h5>Heading: Regular</h5>
    <h6>Heading: Small</h6>
    <div className="acomp__content">{children}</div>
  </div>
);

export default AComp;

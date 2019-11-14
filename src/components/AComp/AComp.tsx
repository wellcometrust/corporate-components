import React from 'react';

type ACompProps = {
  children?: any
}

export const AComp = ({children}: ACompProps) =>(
<div className="acomp"><h2 className="acomp__title">Test Component</h2><div className="acomp__content">{children}</div></div>
)

export default AComp;

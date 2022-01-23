import React from 'react';

import { Container } from './styles';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  modelName: string
  overlayNode: React.ReactNode
}

const ModelSection: React.FC<Props> = ({ modelName, overlayNode, children, ...props}) => {
  return (
    <Container {...props}>
      <h1>{children}</h1>
    </Container>
  );
};

export default ModelSection;

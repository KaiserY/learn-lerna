import * as React from 'react';
import { hot } from 'react-hot-loader';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

export interface IHelloProps {
  compiler: string;
  framework: string;
}

export class Hello extends React.Component<IHelloProps, {}> {
  render() {
    return (
      <div>
        <Wrapper>
          <Title>
            Hello from {this.props.compiler} and {this.props.framework}!
          </Title>
        </Wrapper>
      </div>
    );
  }
}

export default hot(module)(Hello);

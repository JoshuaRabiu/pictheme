export const editorText: string = 
`// Typescript-React (.tsx) Syntax

import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface GreeterProps {
  name?: string;
  msgNo?: number;
}

const Greeter: React.SFC<GreeterProps> = (props: GreeterProps) => (
  <div>
    Hello {props.name}, you have {props.msgNo} new messages. 
  </div>
)

ReactDOM.render(
  <Greeter name="User" msgNo={23} />,
  document.getElementById('root') as HTMLElement
);`

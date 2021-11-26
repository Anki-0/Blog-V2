import styled from 'styled-components';
import React from 'react';

interface props {
  code: string;
}

const Button = styled.button`
  background-color: transparent;
  border: 1px solid;
  border-radius: 3px;
  /* color: var(--black); */
  font-weight: 400;
  outline: 0;
  padding: calc(0.25em + 0.25ex) calc(0.5em + 0.5ex);
  transition: 0.2s;
  transition-property: color, background-color, border-color, box-shadow;
  backdrop-filter: saturate(200%) blur(1ex);
  inset-block-end: 0;
  inset-inline-end: 0;
  margin: calc(0.618em + 0.618ex);
  position: absolute;
  color: #fff;

  &:hover {
    border-color: #fcb32c;
    color: #fcb32c;
  }
`;

export default function CopyButton({ code }: props): JSX.Element {
  const [isCopied, setIsCopied] = React.useState(false);

  const copyToClipboardHandler = (str: string): void => {
    if (navigator.clipboard) {
      // Most modern browsers support the Navigator API
      navigator.clipboard.writeText(str).then(
        function () {
          console.log('Copying to clipboard was successful!');
        },
        function (err) {
          console.error('Could not copy text: ', err);
        }
      );
    }
    //  else if (window.clipboardData) {
    //   // Internet Explorer
    //   window.clipboardData.setData('Text', str);
    // }
  };
  return (
    <Button
      onClick={() => {
        copyToClipboardHandler(code);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 1000);
      }}
    >
      {isCopied ? '🎉 Copied!' : 'Copy'}
    </Button>
  );
}

// export default copyToClipboard;

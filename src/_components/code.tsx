import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import CopyButton from './CopyButton';
type props = {
  children: {
    props: {
      children: string;
      className: string;
      mdxType: string;
      metastring: string;
      originalType: string;
      parentName: string;
      path: string;
    };
  };
};

export const Code = (props: props): JSX.Element => {
  // console.log(props.children.props);

  const className = props.children.props.className || '';
  const code = props.children.props.children.trim();
  const language: any = className.replace(/language-/, '');
  const meta = props.children.props?.metastring?.replace(/path=/, '') || '';

  // const file = props.children.props.file;
  return (
    <Highlight {...defaultProps} code={code} language={language} theme={undefined}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        // console.log(tokens),
        <div className='code-frame'>
          {!language && !meta ? (
            ''
          ) : (
            <div className='frame-tab'>
              <span className='frame-tab-language'>{`${language.toUpperCase()}`}</span>
              {!meta ? (
                ''
              ) : (
                <span className='frame-tab-metaString'>{`${meta.replace(/['"]+/g, '')}`}</span>
              )}
            </div>
          )}
          <CopyButton code={code} />
          <pre className={className} style={style}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        </div>
      )}
    </Highlight>
  );
};
// wrapper: ({ children }) => <>{children}</>

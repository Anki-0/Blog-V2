import React from 'react';
import styled from 'styled-components';
const LoaderC = styled.div`
  &,
  &:before,
  &:after {
    border-radius: 50%;
    width: 2.5em;
    height: 2.5em;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation: load7 1.8s infinite ease-in-out;
    animation: load7 1.1s infinite ease-in-out;
  }
  & {
    color: #a5a5a5;
    font-size: 4px;
    margin: auto;
    position: relative;
    text-indent: -9999em;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
  }
  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 0;
  }
  &:before {
    left: -3.5em;
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }
  &:after {
    left: 3.5em;
  }
  @-webkit-keyframes load7 {
    0%,
    80%,
    100% {
      box-shadow: 0 2.5em 0 -1.3em;
    }
    40% {
      box-shadow: 0 2.5em 0 0;
    }
  }
  @keyframes load7 {
    0%,
    80%,
    100% {
      box-shadow: 0 2.5em 0 -1.3em;
    }
    40% {
      box-shadow: 0 2.5em 0 0;
    }
  }
`;

export default function Loader(): JSX.Element {
  return <LoaderC>Loading...</LoaderC>;
}

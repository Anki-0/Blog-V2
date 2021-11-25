import { css } from 'styled-components';

export const prismDarkTheme = css`
  :root {
    --white: #fff;
    --black: #1b1f24;
    --gray-0: #f6f8fa;
    --gray-1: #eaeef2;
    --gray-2: #d0d7de;
    --gray-3: #afb8c1;
    --gray-4: #8c959f;
    --gray-5: #6e7781;
    --gray-6: #57606a;
    --gray-7: #424a53;
    --gray-8: #32383f;
    --gray-9: #24292f;
    --blue-0: #ddf4ff;
    --blue-5: #0969da;
    --blue-9: #002155;
    --green-0: #dafbe1;
    --green-5: #1a7f37;
    --green-9: #002d11;
    --yellow-0: #fff8c5;
    --yellow-5: #9a6700;
    --yellow-9: #3b2300;
    --orange-0: #fff1e5;
    --orange-5: #bc4c00;
    --orange-9: #471700;
    --red-0: #ffebe9;
    --red-5: #cf222e;
    --red-9: #4c0014;
    --purple-0: #fbefff;
    --purple-5: #8250df;
    --purple-9: #2e1461;
    --pink-0: #ffeff7;
    --pink-5: #bf3989;
    --pink-9: #4d0336;
    --coral-0: #fff0eb;
    --coral-5: #c4432b;
    --coral-9: #510901;
    --mdx-yellow: hsl(39deg 97% 58%);
    --hl: var(--blue-5);
    --fg: var(--black);
    --bg: var(--white);
  }

  kbd,
  pre,
  code {
    /* font-family: var(--mono); */
    font-feature-settings: normal;
    line-height: calc(1em + (1 / 0.8 * 1ex));
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  strong,
  th {
    font-weight: 700;
    letter-spacing: 0.0125em;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  label,
  p,
  pre,
  ol,
  ul,
  hr,
  table,
  blockquote,
  .block,
  .frame {
    margin-block: calc(1em + 1ex);
  }

  a[name],
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    display: block;
    scroll-margin-block-start: 6rem;
  }

  h1,
  h2 {
    font-size: 2.5em;
    line-height: calc(1em + (1 / 2.5 * 1ex));
    margin-block: calc(1 / 2.5 * (1em + 1ex));
  }

  h3 {
    font-size: 2em;
    line-height: calc(1em + (1 / 1.5 * 1ex));
    margin-block: calc(1 / 1.5 * (1em + 1ex));
  }

  h4 {
    font-size: 1.25em;
    line-height: calc(1em + (1 / 1.25 * 1ex));
    margin-block: calc(1 / 1.25 * (1em + 1ex));
  }

  h5,
  h6 {
    font-size: 1em;
    line-height: calc(1em + 1ex);
    margin-block: calc(1em + 1ex);
  }

  h6 {
    color: #57606a;
  }

  sup {
    vertical-align: top;
  }

  main {
    margin-block-start: calc(4 * (1em + 1ex));
  }

  dd,
  .content {
    padding-inline: calc(1em + 1ex);
  }

  label {
    display: block;
  }

  summary {
    cursor: pointer;
  }

  img[align='right'] {
    padding-inline-start: calc(1em + 1ex);
  }

  img[align='left'] {
    padding-inline-end: calc(1em + 1ex);
  }
  pre {
    word-wrap: normal;
    overflow: auto;
    font-size: inherit;
  }
  pre code {
    display: block;
    overflow-x: auto;
    padding: calc(1em + 1ex) !important;
    white-space: pre;
    word-break: normal;
    word-wrap: normal;

    --squircle-radius: 10px;
    border-radius: 10px;
  }

  blockquote pre,
  li pre {
    margin-inline: 0;
  }

  hr {
    background-color: var(--gray-1);
    border: 0;
    border-radius: 3px;
    height: calc(0.25 * (1em + 1ex));
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
    display: block;
    overflow: auto;
    width: 100%;
    font-variant-numeric: lining-nums;
  }

  tr {
    border-block-start: 1px solid var(--gray-3);
  }

  tr:nth-child(even) {
    background-color: hsl(210deg 17% 82% / 20%); /* gray-1 */
  }

  td,
  th {
    border: 1px solid var(--gray-3);
    padding-block: calc(0.33 * (1 / 0.8 * 1ex));
    padding-inline: calc(0.66 * (1 / 0.8 * 1ex));
  }

  blockquote {
    color: var(--gray-6);
    margin-inline-start: 0;
    padding-inline-start: calc(1em + 1ex);
    position: relative;
  }

  blockquote::before {
    content: '';
    display: block;
    width: calc(0.25 * (1em + 1ex));
    height: 100%;
    background-color: var(--gray-1);
    border-radius: 3px;
    position: absolute;
    inset-inline-start: 0;
  }

  ol,
  ul {
    padding-inline-start: 0;
  }

  ul {
    list-style-type: circle;
  }

  ol {
    list-style-type: decimal;
  }

  ul ul,
  ol ul,
  ul ol,
  ol ol {
    margin-block: 0;
  }

  ul ul {
    list-style-type: disc;
  }

  ul ul ul {
    list-style-type: square;
  }

  ol ol {
    list-style-type: lower-roman;
  }

  ol ol ol {
    list-style-type: lower-alpha;
  }

  li {
    font-size: 1.6rem;
    word-wrap: break-all;
    margin-block: calc(0.25 * (1em + 1ex));
    margin-inline-start: calc(1em + 1ex);
  }

  dt {
    font-style: italic;
    margin-block-end: 0;
  }

  dt + dt {
    margin-block-start: 0;
  }

  dd {
    margin-block-start: 0;
  }

  a {
    color: var(--hl);
    transition: 200ms;
    transition-property: color;
  }

  a.alt {
    color: var(--purple-5);
  }

  .navigation a {
    display: block;
    color: inherit;
    text-decoration: none;
  }

  a[aria-current],
  a:hover,
  a:focus {
    color: inherit;
    text-decoration: none;
  }

  nav a[aria-current],
  nav a:hover,
  nav a:focus {
    color: var(--hl);
    text-decoration: underline;
  }

  button,
  a.cta {
    outline: 0;
    padding: calc(0.25 * (1em + 1ex)) calc(0.5 * (1em + 1ex));
    border-radius: 3px;
    border: 1px solid currentColor;
    color: var(--black);
    transition: 200ms;
    transition-property: color, background-color, border-color, box-shadow;
    font-weight: 400;
    background-color: transparent;
  }

  a.cta:hover,
  a.cta:focus,
  a.cta:active,
  button:hover,
  button:focus,
  button:active {
    color: var(--hl);
  }

  a.cta:active,
  button:active,
  a.cta.active,
  button.active {
    background-color: var(--hl);
    border-color: var(--hl);
    color: var(--white);
  }

  a.cta:active,
  a.cta.active,
  a.cta:focus,
  button.active,
  button:active,
  button:focus {
    box-shadow: 0 0 0 0.2em rgb(191 135 0 / 30%); /* --hl */
  }

  a.cta.success,
  button.success {
    background-color: var(--green-5);
    border-color: var(--green-5);
    box-shadow: 0 0 0 0.2em rgb(26 127 55 / 30%); /* --green-5 */
    color: var(--white);
  }

  .anchor {
    display: inline-block;
    width: calc(1em + 1ex);
    margin-inline-start: calc(-0.75 * (1em + 1ex));
    margin-inline-end: calc(-0.25 * (1em + 1ex));
    font-size: 1rem;
  }

  .toc {
    display: flex;
    align-self: flex-start;
    position: sticky;
    top: 8rem;
    max-height: calc(100vh - 6rem);
    /* overflow-y: scroll; */
    background: rgba(255, 255, 255, 0.04);
    /* position: absolute; */
    /* top: 7rem; */
    /* right: -35rem; */
    /* font-size: 1.6rem; */
    padding: 2rem;
  }

  .hljs {
    color: #abb2bf;
    background: #282c34;
  }

  .hljs-comment,
  .hljs-quote {
    color: #5c6370;
    font-style: italic;
  }

  .hljs-doctag,
  .hljs-keyword,
  .hljs-formula {
    color: #c678dd;
  }

  .hljs-section,
  .hljs-name,
  .hljs-selector-tag,
  .hljs-deletion,
  .hljs-subst {
    color: #e06c75;
  }

  .hljs-literal {
    color: #56b6c2;
  }

  .hljs-string,
  .hljs-regexp,
  .hljs-addition,
  .hljs-attribute,
  .hljs-meta .hljs-string {
    color: #98c379;
  }

  .hljs-attr,
  .hljs-variable,
  .hljs-template-variable,
  .hljs-type,
  .hljs-selector-class,
  .hljs-selector-attr,
  .hljs-selector-pseudo,
  .hljs-number {
    color: #d19a66;
  }

  .hljs-symbol,
  .hljs-bullet,
  .hljs-link,
  .hljs-meta,
  .hljs-selector-id,
  .hljs-title {
    color: #61aeee;
  }

  .hljs-built_in,
  .hljs-title.class_,
  .hljs-class .hljs-title {
    color: #e6c07b;
  }

  .hljs-emphasis {
    font-style: italic;
  }

  .hljs-strong {
    font-weight: bold;
  }

  .hljs-link {
    text-decoration: underline;
  }
`;

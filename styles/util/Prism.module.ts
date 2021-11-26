import { css } from 'styled-components';

export const prismDarkTheme = css`
  kbd,
  pre,
  code {
    font-feature-settings: normal;
    line-height: calc(1em + (1 / 0.8 * 1ex));
  }

  pre {
    margin-top: 0 !important;
    word-wrap: normal;
    overflow: auto;
    font-size: inherit;
    /* box-shadow: 4px 4px 10px 0px #8b8b8b; */
    display: block;
    overflow-x: auto;
    padding: calc(1em + 1ex) !important;
    white-space: pre;
    word-break: normal;
    word-wrap: normal;
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
  blockquote {
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
    line-height: calc(1em + 0.4ex);
    margin-block: calc(0.4em + 0.4ex);
  }

  h3 {
    font-size: 2em;
    line-height: calc(1em + 0.66667ex);
    margin-block: calc(0.66667em + 0.66667ex);
  }

  h4 {
    font-size: 1.25em;
    line-height: calc(1em + 0.8ex);
    margin-block: calc(0.8em + 0.8ex);
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
  img[align='right'] {
    padding-inline-start: calc(1em + 1ex);
  }

  img[align='left'] {
    padding-inline-end: calc(1em + 1ex);
  }
  hr {
    background-color: #eaeef2;
    border: 0;
    border-radius: 3px;
    height: calc(0.25 * (1em + 1ex));
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
    background-color: #57606a;
    border-radius: 3px;
    position: absolute;
    inset-inline-start: 0;
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
    border-block-start: 1px solid #afb8c1;
  }

  tr:nth-child(even) {
    background-color: hsl(210deg 17% 82% / 20%); /* gray-1 */
  }

  td,
  th {
    border: 1px solid #afb8c1;
    padding-block: calc(0.33 * (1 / 0.8 * 1ex));
    padding-inline: calc(0.66 * (1 / 0.8 * 1ex));
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
  a {
    color: #0969da;
    transition: 200ms;
    transition-property: color;
  }

  a.alt {
    color: #8250df;
  }

  sup {
    vertical-align: top;
  }

  main {
    margin-block-start: calc(4 * (1em + 1ex));
  }

  label {
    display: block;
  }

  summary {
    cursor: pointer;
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

  .code-frame {
    position: relative;
    background-color: #0d1117;
    border-radius: 10px;
    position: relative;
    color: #fff;
    margin-block: calc(1em + 1ex);
  }

  div[type='important'] {
    color: #f0f6fc;
    background-color: #4c0014;
    inset: 0;
    --squircle-radius: 10px;
    border: 1px solid transparent;
    border-radius: 10px;
    font-size: 15px;
    line-height: calc(1em + 1.25ex);
    margin-block: calc(1.25em + 1.25ex);
    padding-inline: calc(1.25em + 1.25ex);
    position: relative;
    z-index: 0;
    border: 1px solid red;
    padding: 5rem;
  }
  .frame {
    &-tab {
      position: relative;
      list-style-type: none;
      margin: 0;
      padding: calc(0.25em + 0.25ex);
      padding-block-end: 0;
      align-items: stretch;
      flex: 1;
      flex-direction: row;
      flex-grow: 1;
      -webkit-mask-image: linear-gradient(
        90deg,
        hsla(0, 0%, 100%, 0.3),
        #000 calc(0.5em + 0.5ex),
        #000 calc(100% - 0.5em - 0.5ex),
        hsla(0, 0%, 100%, 0.3)
      );
      overflow-x: auto;
      overflow-y: hidden;
    }
    &-tab-language,
    &-tab-metaString {
      border-top-left-radius: 2px;
      border-top-right-radius: 2px;
      /* font-family: var(--mono); */
      line-height: calc(1em + 1.25ex);
      margin: calc(0.3125em + 0.3125ex);
      /* margin-block-end: 0; */
      padding-block: calc(0.3125em + 0.3125ex);
      padding-inline: calc(0.625em + 0.625ex);
      white-space: nowrap;
      background-color: #0067f7 !important;
      float: right;
    }

    &-tab-metaString {
      float: left;
      bottom: 0;
      position: absolute;
      /* -webkit-margin-after: 0; */
      border-top-left-radius: 2px;
      border-top-right-radius: 2px;
      /* font-family: var(--mono); */
      font-size: smaller;
      line-height: calc(1em + 1.25ex);
      margin: calc(0.3125em + 0.3125ex);
      margin-block-end: 0;
      padding-block: calc(0.3125em + 0.3125ex);
      padding-inline: calc(0.625em + 0.625ex);
      white-space: nowrap;
      background-color: #21262d !important;
    }
  }

  /**
 * prism.js default theme for JavaScript, CSS and HTML
 * Based on dabblet (http://dabblet.com)
 * @author Lea Verou
 */
  code[class*='language-'],
  pre[class*='language-'] {
    color: #abb2bf;
    font-size: 1.5rem;
    background: none;
    font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;
    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;
    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
  }

  pre[class*='language-']::-moz-selection,
  pre[class*='language-'] ::-moz-selection,
  code[class*='language-']::-moz-selection,
  code[class*='language-'] ::-moz-selection {
    text-shadow: none;
    background: #383e49;
  }

  pre[class*='language-']::selection,
  pre[class*='language-'] ::selection,
  code[class*='language-']::selection,
  code[class*='language-'] ::selection {
    text-shadow: none;
    background: #9aa2b1;
  }

  @media print {
    code[class*='language-'],
    pre[class*='language-'] {
      text-shadow: none;
    }
  }
  /* Code blocks */
  pre[class*='language-'] {
    padding: 1em;
    margin: 0.5em 0;
    overflow: auto;
  }

  :not(pre) > code[class*='language-'],
  pre[class*='language-'] {
    background: #21262d;
  }

  /* Inline code */
  :not(pre) > code[class*='language-'] {
    padding: 0.1em;
    border-radius: 0.3em;
    white-space: normal;
  }

  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: #5c6370;
  }

  .token.punctuation {
    color: #abb2bf;
  }

  .token.selector,
  .token.tag {
    color: #e06c75;
  }

  .token.property,
  .token.boolean,
  .token.number,
  .token.constant,
  .token.symbol,
  .token.attr-name,
  .token.deleted {
    color: #d19a66;
  }

  .token.string,
  .token.char,
  .token.attr-value,
  .token.builtin,
  .token.inserted {
    color: #98c379;
  }

  .token.operator,
  .token.entity,
  .token.url,
  .language-css .token.string,
  .style .token.string {
    color: #56b6c2;
  }

  .token.atrule,
  .token.keyword {
    color: #c678dd;
  }

  .token.function {
    color: #61afef;
  }

  .token.regex,
  .token.important,
  .token.variable {
    color: #c678dd;
  }

  .token.important,
  .token.bold {
    font-weight: bold;
  }

  .token.italic {
    font-style: italic;
  }

  .token.entity {
    cursor: help;
  }

  pre.line-numbers {
    position: relative;
    padding-left: 3.8em;
    counter-reset: linenumber;
  }

  pre.line-numbers > code {
    position: relative;
  }

  .line-numbers .line-numbers-rows {
    position: absolute;
    pointer-events: none;
    top: 0;
    font-size: 100%;
    left: -3.8em;
    width: 3em; /* works for line-numbers below 1000 lines */
    letter-spacing: -1px;
    border-right: 0;

    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .line-numbers-rows > span {
    pointer-events: none;
    display: block;
    counter-increment: linenumber;
  }

  .line-numbers-rows > span:before {
    content: counter(linenumber);
    color: #5c6370;
    display: block;
    padding-right: 0.8em;
    text-align: right;
  }
`;

import { Code } from './code';

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

const components = {
  pre: (props: props): any => <Code {...props} />
};

export default components;

declare module '*.css';
declare module '*.less';
declare module '*.png';
declare module '*.svg' {
  export function ReactComponent(
    props: React.SVGProps<SVGSVGElement>,
  ): React.ReactElement;
  const url: string;
  export default url;
}

interface FilterConfig {
  key: string;
  label: string;
  options?: {
    [key: string]: any;
  };
  span?: number;
  widget: React.ReactNode;
}

interface ActionType {
  type: string;
  value?: any;
}

interface StateType {
  loginModalStatus: boolean;
}

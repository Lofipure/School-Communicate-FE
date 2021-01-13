import { Method } from 'axios';

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

interface APIProps {
  url: string | ((params: any) => string);
  method: Method;
}

interface UserInfo {
  email: string;
  name: string;
  telephone: string;
  college: number;
  major: number;
  grade: number;
  location: string;
  studentID: string;
}

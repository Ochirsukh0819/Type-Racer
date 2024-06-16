export interface User {
  uid: string;
  email: string;
  token: string;
  userName?: string;
  tokenExpiration: 0;
}

export interface RegisterInput {
  userName: string;
  email: string;
  password: string;
}
export interface LoginInput {
  email: string;
  password: string;
}

export interface InputType {
  labelName?: string;
  type: string;
  inputState: any;
  inputSetState: React.Dispatch<React.SetStateAction<any>>;
}

export interface ButtonType {
  buttonType?: "submit" | "reset" | "button" | undefined;
  buttonName: string;
  loading?: boolean;
}

export interface InformationType {
  imageName: any;
  title: string;
  text: string;
}

export interface ChartType {
  chartData: any;
}
export interface StatisticType {
  time: number;
  words: number;
}

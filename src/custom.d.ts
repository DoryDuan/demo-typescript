import * as React from "react";

export interface LoginStore extends Store {
  password: string;
  [name: string]: any;
}

declare type LoginRenderProps = (
  values: LoginStore,
  form: FormInstance
) => JSX.Element | React.ReactNode;

export interface LoginCallbacks extends Callbacks {
  onFinish?: (values: LoginStore) => void;
}

export interface LoginFormProps extends FormProps {
  onFinish?: LoginCallbacks["onFinish"];
  children?: LoginRenderProps | React.ReactNode;
}

declare const Form: React.ForwardRefRenderFunction<
  FormInstance,
  LoginFormProps
>;

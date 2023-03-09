import { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { store } from "../store/features/store";

const Wrapper = ({ children }: PropsWithChildren): JSX.Element => {
  return <Provider store={store}>{children}</Provider>;
};

export default Wrapper;

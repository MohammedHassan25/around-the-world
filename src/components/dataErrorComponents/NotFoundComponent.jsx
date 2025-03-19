import { Header } from "../headers/Header";

export const NotFoundComponent = (props) => {
  return (
    <>
      {props.isErrorPage ? <Header /> : null}
      <div className={props.className}>
        {props.svg}
        <h1 className="pb-2 text-[40px] font-medium dark:text-gray-100">
          {props.h1}
        </h1>
        <p className="dark:text-gray-300">{props.error}</p>
        <p className="dark:text-gray-300">{props.hint}</p>
      </div>
    </>
  );
};

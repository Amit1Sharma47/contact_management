import React from "react";
interface IMyProps {
  title: string;
  quant: string;
}
const Cards = (props: IMyProps) => {
  const { title, quant } = props;

  return (
    <div className="block w-1/5 h-15 rounded-lg bg-white p-2 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 m-1">
      <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
        {title}
      </h5>
      <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
        {quant}
      </p>
    </div>
  );
};

export default Cards;

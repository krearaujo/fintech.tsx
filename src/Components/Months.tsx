import MonthBtn from "./MonthBtn";

const Months = () => {
  return (
    <div className="flex">
      <MonthBtn n={0} />
      <MonthBtn n={-1} />
      <MonthBtn n={-2} />
    </div>
  );
};

export default Months;

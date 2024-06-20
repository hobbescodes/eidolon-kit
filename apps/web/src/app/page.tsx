import { CurrentNumber, Increment, SetNumber } from "components/contracts";

const HomePage = () => (
  <div className="flex flex-col h-full items-center justify-center gap-8">
    <CurrentNumber />
    <div className="flex flex-col items-center gap-4">
      <Increment className="w-full" />
      <div className="relative flex py-5 items-center w-full">
        <div className="flex-grow border-t border-gray-400" />
        <span className="flex-shrink mx-4 text-accent-text">OR</span>
        <div className="flex-grow border-t border-gray-400" />
      </div>
      <SetNumber />
    </div>
  </div>
);

export default HomePage;

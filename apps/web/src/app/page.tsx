import { CurrentNumber, Increment } from "components/contracts";

const HomePage = () => (
  <div className="flex flex-col h-full items-center justify-center gap-8">
    <CurrentNumber />
    <Increment />
  </div>
);

export default HomePage;

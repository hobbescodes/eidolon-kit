import { ConnectButton } from "@rainbow-me/rainbowkit";

import { Button } from "@eidolonkit/ui";

const HomePage = () => {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center">
        <ConnectButton />
        <Button>Click Me</Button>
      </main>
    </div>
  );
};

export default HomePage;

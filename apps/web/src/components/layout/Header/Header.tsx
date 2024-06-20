import { ConnectButton } from "@eidolonkit/rainbow/kit";

const Header = () => (
  <header className="flex py-6 px-4 items-center justify-between">
    <h1 className="text-lg sm:text-xl font-semibold">🔮 EidolonKit</h1>
    <ConnectButton />
  </header>
);

export default Header;

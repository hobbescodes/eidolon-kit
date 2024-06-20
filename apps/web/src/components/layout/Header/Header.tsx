import { ConnectButton } from "@rainbow-me/rainbowkit";

const Header = () => (
  <header className="flex py-6 px-4 items-center justify-between">
    <div className="flex items-center min-h-10">
      <h1 className="text-lg sm:text-xl font-semibold">🔮 EidolonKit</h1>
    </div>
    <ConnectButton />
  </header>
);

export default Header;

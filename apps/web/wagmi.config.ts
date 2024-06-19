import { http, cookieStorage, createConfig, createStorage } from "wagmi";
import { anvil } from "wagmi/chains";

const wagmiConfig = createConfig({
  chains: [anvil],
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
  transports: {
    // TODO: add t3 env config for web app and use it here
    [anvil.id]: http("http://127.0.0.1:8545"),
  },
});

export default wagmiConfig;

/** @knipignore */
import { ponder } from "@/generated";

ponder.on("Counter.setNumber()", async ({ event, context }) => {
  const {
    db: { Counter },
    network: { chainId },
  } = context;

  const updatedNumber = event.args[0];

  await Counter.upsert({
    id: chainId.toString(),
    create: {
      value: updatedNumber,
    },
    update: {
      value: updatedNumber,
    },
  });
});

ponder.on("Counter.increment()", async ({ context }) => {
  const {
    db: { Counter },
    network: { chainId },
  } = context;

  await Counter.upsert({
    id: chainId.toString(),
    // NB: if `increment` is the first trigger, that means that `number` is still initialized to 0, so we can safely use `1n`
    create: {
      value: 1n,
    },
    update: ({ current }) => ({
      value: current.value + 1n,
    }),
  });
});

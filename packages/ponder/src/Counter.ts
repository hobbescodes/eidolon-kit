/** @knipignore */
import { ponder } from "@/generated";

ponder.on("Counter:NumberUpdated", async ({ event, context }) => {
  const {
    db: { Counter },
    network: { chainId },
  } = context;

  const {
    args: { updatedNumber },
  } = event;

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

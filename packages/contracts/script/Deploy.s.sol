// SPDX-License-Identifier: MIT
pragma solidity ^0.8.23;

import { console2 } from "@forge-std-1.8.2/src/console2.sol";
import { Script } from "@forge-std-1.8.2/src/Script.sol";

import { Counter } from "../src/Counter.sol";

contract DeployScript is Script {
    function run() external {
        vm.startBroadcast();
        console2.log("Deploying Counter.sol...");

        Counter counter = new Counter();
        counter.setNumber(42);

        console2.log("Counter deployed to:", address(counter));
        vm.stopBroadcast();
    }
}

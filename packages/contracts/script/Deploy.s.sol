// SPDX-License-Identifier: MIT
pragma solidity ^0.8.23;

import { Script } from "@forge-std-1.8.2/src/Script.sol";

import { Counter } from "../src/Counter.sol";

contract DeployScript is Script {
    function run() external {
        vm.startBroadcast();

        Counter counter = new Counter();
        counter.setNumber(42);

        vm.stopBroadcast();
    }
}

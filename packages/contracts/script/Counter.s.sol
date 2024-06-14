// SPDX-License-Identifier: MIT
pragma solidity ^0.8.23;

import { Script } from "@forge-std-1.8.2/src/Script.sol";

contract CounterScript is Script {
    function setUp() public { }

    function run() public {
        vm.broadcast();
    }
}

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.23;

contract Counter {
    uint256 public number;

    event NumberUpdated(uint256 updatedNumber);

    function setNumber(uint256 newNumber) public {
        number = newNumber;

        emit NumberUpdated(newNumber);
    }

    function increment() public {
        number++;

        emit NumberUpdated(number);
    }
}

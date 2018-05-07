pragma solidity ^0.4.21;

import "truffle/Assert.sol";
import { SafeMathLib } from "../../../libraries/SafeMathLib.sol";


contract SafeMathLibTest {

  function testMult() public {

    uint256 expected = 2;
    uint256 result = SafeMathLib.mult(1, 2);

    Assert.equal(expected, result, "Result was not expected");
  }

  function testAdd() public {

    uint256 expected = 3;
    uint256 result = SafeMathLib.add(1, 2);

    Assert.equal(expected, result, "Result was not expected");
  }

  function testSub() public {

    uint256 expected = 1;
    uint256 result = SafeMathLib.sub(2, 1);

    Assert.equal(expected, result, "Result was not expected");
  }
}

pragma solidity ^0.4.21;

import "truffle/Assert.sol";
import { StringLib } from "../../../libraries/StringLib.sol";


contract StringLibTest {

  function testConcatStrings() public {

    string memory expected = "abc1234";
    string memory result = StringLib.concat("abc", "1234");

    Assert.isNotEmpty(result, "Result is empty");
    Assert.equal(expected, result, "Result was not expected");
  }

}

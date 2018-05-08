pragma solidity ^0.4.23;

import "truffle/Assert.sol";
import "../../../libraries/StringLib.sol";


contract StringLibTest {

  function testConcatStrings() public {

    string memory expected = "abc1234";
    string memory result = StringLib.concat("abc", "1234");

    Assert.isNotEmpty(result, "Result is empty");
    Assert.equal(expected, result, "Result was not expected");
  }

  function testBytes32ToString() public {

    string memory expected = "Hello";
    string memory result = StringLib.toString(0x48656c6c6f);

    Assert.isNotEmpty(result, "Result is empty");
    Assert.equal(expected, result, "Result was not expected");
  }

}

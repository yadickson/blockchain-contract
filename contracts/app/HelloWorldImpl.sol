pragma solidity ^0.4.21;

import "../libs/StringLib.sol";
import "../interface/HelloWorld.sol";


contract HelloWorldImpl is HelloWorld {

  using StringLib for string;
  string constant MESSAGE = "Hello World";
  string constant SEPARATOR = ": ";

  constructor() public {

  }

  function render() public pure returns(string) {
    return MESSAGE;
  }

  function greeting(string _who) public view returns(string) {
    return MESSAGE.concat(SEPARATOR).concat(_who);
  }

}

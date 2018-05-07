pragma solidity ^0.4.21;

import "../libraries/StringLib.sol";


contract HelloWorld {

  using StringLib for string;
  string constant MESSAGE = "Hello World";
  string constant SEPARATOR = ": ";

  constructor() public {

  }

  function render() public pure returns(string) {
    return MESSAGE;
  }

  function greeting(string _who) public pure returns(string) {
    string memory result = MESSAGE.concat(SEPARATOR);
    return result.concat(_who);
  }

}

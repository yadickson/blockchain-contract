pragma solidity ^0.4.23;

import "./HelloWorld.sol";


contract HelloWorldImpl is HelloWorld {

  string constant MESSAGE = "Hello World";

  constructor() public {

  }

  function render() public view returns(string) {
    return MESSAGE;
  }

}

pragma solidity ^0.4.17;


contract Owned {

  address private owner;

  constructor() public {
    owner = msg.sender;
  }

  modifier onlyOwner {
    require(msg.sender == owner);
    _;
  }

}

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

  function getOwner() public view returns(address) {
    return owner;
  }

}

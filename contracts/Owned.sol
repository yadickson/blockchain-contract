pragma solidity ^0.4.21;


contract Owned {

  address private owner;
  uint256 private mount;

  constructor() public {
    owner = msg.sender;
    mount = 0;
    emit PrintAddress(owner);
  }

  modifier onlyOwner {
    require(msg.sender == owner);
    _;
  }

  function addMount(uint256 add) public {
    require(mount + add >= mount);
    mount = mount + add;
  }

  function getMount() public onlyOwner view returns(uint256) {
    return mount;
  }

  function getOwner() public view returns(address) {
    return owner;
  }

  event PrintAddress(address add);
}

pragma solidity ^0.4.21;

import "../../libraries/SafeMathLib.sol";
import "../interface/Owner.sol";


contract OwnerImpl is Owner {

  using SafeMathLib for uint256;

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
    mount = mount.add(add);
  }

  function getMount() public onlyOwner view returns(uint256) {
    return mount;
  }

  function getOwner() public view returns(address) {
    return owner;
  }

  event PrintAddress(address add);
}

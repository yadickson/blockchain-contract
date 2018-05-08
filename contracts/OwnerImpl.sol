pragma solidity ^0.4.23;

import "./Owner.sol";
import "../libraries/SafeMathLib.sol";


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

  function addMount(uint256 _add) public onlyOwner {
    mount = mount.add(_add);
  }

  function getMount() public view returns(uint256) {
    return mount;
  }

  function getOwner() public view returns(address) {
    return owner;
  }

  event PrintAddress(address _add);
}

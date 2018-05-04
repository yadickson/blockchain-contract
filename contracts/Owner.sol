pragma solidity ^0.4.21;


interface Owner {

  function addMount(uint256 add) external;

  function getMount() external view returns(uint256);

  function getOwner() external view returns(address);

}

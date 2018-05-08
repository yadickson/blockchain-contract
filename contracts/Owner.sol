pragma solidity ^0.4.23;


interface Owner {

  function addMount(uint256 _add) external;

  function getMount() external view returns(uint256);

  function getOwner() external view returns(address);

}

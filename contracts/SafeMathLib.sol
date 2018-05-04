pragma solidity ^0.4.21;


library SafeMathLib {

  function mult(uint256 a, uint256 b) public pure returns (uint256) {
    uint256 c = a * b;
    require(a == 0 || c / a == b);
    return c;
  }

  function sub(uint256 a, uint256 b) public pure returns (uint256) {
    require(b <= a);
    return a - b;
  }

  function add(uint256 a, uint256 b) public pure returns (uint256) {
    uint256 c = a + b;
    require(c>=a && c>=b);
    return c;
  }

}

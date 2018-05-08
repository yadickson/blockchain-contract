pragma solidity ^0.4.23;


library SafeMathLib {

  function mult(uint256 self, uint256 value) public pure returns(uint256) {
    uint256 result = self * value;
    require(self == 0 || result / self == value);
    return result;
  }

  function sub(uint256 self, uint256 value) public pure returns(uint256) {
    require(value <= self);
    return self - value;
  }

  function add(uint256 self, uint256 value) public pure returns(uint256) {
    uint256 result = self + value;
    require(result >= self && result >= value);
    return result;
  }

}

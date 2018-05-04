pragma solidity ^0.4.21;


library SafeMathLib {

  function mult(uint256 _base, uint256 _value) public pure returns (uint256) {
    uint256 _result = _base * _value;
    require(_base == 0 || _result / _base == _value);
    return _result;
  }

  function sub(uint256 _base, uint256 _value) public pure returns (uint256) {
    require(_value <= _base);
    return _base - _value;
  }

  function add(uint256 _base, uint256 _value) public pure returns (uint256) {
    uint256 _result = _base + _value;
    require(_result>=_base && _result>=_value);
    return _result;
  }

}

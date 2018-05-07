pragma solidity ^0.4.21;


library StringLib {

  function concat(string self, string value) public pure returns (string) {
    bytes memory selfBytes = bytes(self);
    bytes memory valueBytes = bytes(value);

    string memory _tmpValue = new string(selfBytes.length + valueBytes.length);
    bytes memory _newValue = bytes(_tmpValue);

    uint i;
    uint j;

    for ( i = 0; i < selfBytes.length; i++ ) {
      _newValue[j++] = selfBytes[i];
    }

    for ( i = 0; i < valueBytes.length; i++ ) {
      _newValue[j++] = valueBytes[i];
    }

    return string(_newValue);
  }

}

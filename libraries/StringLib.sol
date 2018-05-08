pragma solidity ^0.4.23;


library StringLib {

  function concat(string self, string value) public pure returns(string) {
    bytes memory selfBytes = bytes(self);
    bytes memory valueBytes = bytes(value);

    string memory _tmpValue = new string(selfBytes.length + valueBytes.length);
    bytes memory _newValue = bytes(_tmpValue);

    uint i;
    uint j;

    for (i = 0; i < selfBytes.length; i++) {
      _newValue[j++] = selfBytes[i];
    }

    for (i = 0; i < valueBytes.length; i++) {
      _newValue[j++] = valueBytes[i];
    }

    return string(_newValue);
  }

  function toString(bytes32 x) public pure returns(string) {
    bytes memory bytesString = new bytes(32);
    uint charCount = 0;

    for (uint j = 0; j < 32; j++) {
      byte char = byte(bytes32(uint(x) * 2 ** (8 * j)));
      if (char != 0) {
        bytesString[charCount] = char;
        charCount++;
      }
    }

    bytes memory bytesStringTrimmed = new bytes(charCount);

    for (j = 0; j < charCount; j++) {
      bytesStringTrimmed[j] = bytesString[j];
    }

    return string(bytesStringTrimmed);
  }
}

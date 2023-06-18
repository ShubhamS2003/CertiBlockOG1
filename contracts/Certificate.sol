// SPDX-License-Identifier: Unidentified
pragma solidity ^0.8.17;

contract Certificate{
    struct studDetail{
        string name;
        uint256 id;
        uint timestamp;
    }

    // studDetail[] details;

        mapping(uint256 => studDetail) public certify;

    function issueCertificate (string memory _name, uint256 _id) public {
        certify[_id] = studDetail(_name, _id, block.timestamp);
    } 

    

    function checkCertificate (uint256 id) public view returns(studDetail memory) {
                return certify[id];
        }
}
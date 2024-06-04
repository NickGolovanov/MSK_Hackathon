// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0

pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract CarNFT is ERC721, ERC721Enumerable, ERC721URIStorage, Ownable {
    uint256 private _nextTokenId;
    uint256 public combineFee = 0.01 ether;
    mapping(uint256 => Car) public carProperties;
    
    struct Car {
        uint256 speed;
        uint256 handling;
        uint256 durability;
    }

    constructor(address initialOwner)
        ERC721("Car", "MTK")
        Ownable(initialOwner)
    {}

    function safeMint(address to, string memory uri, uint256 speed,
            uint256 handling,
            uint256 durability
    )
            public
            onlyOwner
        {
            uint256 tokenId = _nextTokenId++;
            carProperties[tokenId] = Car(speed, handling, durability);
            _safeMint(to, tokenId);
            _setTokenURI(tokenId, uri);
        }

    // The following functions are overrides required by Solidity.

    function _update(address to, uint256 tokenId, address auth)
        internal
        override(ERC721, ERC721Enumerable)
        returns (address)
    {
        return super._update(to, tokenId, auth);
    }

    function _increaseBalance(address account, uint128 value)
        internal
        override(ERC721, ERC721Enumerable)
    {
        super._increaseBalance(account, value);
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721Enumerable, ERC721URIStorage)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }

    function combine(uint256 tokenId1, uint256 tokenId2,string memory uri) external payable {
        require(ownerOf(tokenId1) == msg.sender, "You must own the first NFT");
        require(ownerOf(tokenId2) == msg.sender, "You must own the second NFT");
        require(msg.value >= combineFee, "Insufficient payment for combining");

        Car memory car1 = carProperties[tokenId1];
        Car memory car2 = carProperties[tokenId2];

        uint256 newSpeed = (car1.speed + car2.speed) / 2;
        uint256 newHandling = (car1.handling + car2.handling) / 2;
        uint256 newDurability = (car1.durability + car2.durability) / 2;

        _burn(tokenId1);
        _burn(tokenId2);

        safeMint(msg.sender, uri, newSpeed, newHandling, newDurability);
    }

    function withdraw() external onlyOwner {
        payable(owner()).transfer(address(this).balance);
    }

    function setCombineFee(uint256 _fee) external onlyOwner {
        combineFee = _fee;
    }
}
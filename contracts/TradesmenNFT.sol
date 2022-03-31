//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";


contract TradesmenNFT is ERC721, Ownable {

    using Strings for uint256;

    string public baseURI;
    uint256 public mintPrice;
    uint256 public totalSupply; 
    uint256 public maxSupply;
    uint256 public maxMintAmount; 
    bool public isPiblicMintEnabled;
    // mapping(address => bool) owners;
    // mapping(address => uint256) public walletMints;

    constructor() payable ERC721("TradesmenNFT", "TMN")  {
        mintPrice = 0.01 ether;
        totalSupply = 0;
        maxSupply = 10000;
        maxMintAmount = maxSupply - totalSupply;
    }



    // public
    function mint(address _to, uint256 _mintAmount) public payable {
        
        require(isPiblicMintEnabled, "Public minting not enabled");
        require(_mintAmount > 0, "mint amount must be greater than 0");
        require(_mintAmount <= maxMintAmount, "Mint amount exceeds current available supply");
        require(totalSupply + _mintAmount <= maxSupply, "max supply reached");



        if (msg.sender != owner()) {
            //general public
            require(msg.value == mintPrice * _mintAmount, "Not enough ether to mint");
        }

        for (uint256 i = 1; i <= _mintAmount; i++) {
            _safeMint(_to, totalSupply + i);
            totalSupply++;
        }
    }



    function tokenURI(uint256 _tokenId)
        public
        view
        virtual
        override
        returns (string memory)
    {
        require(
            _exists(_tokenId),
            "making URI query for nonexistent token"
        );

        return
            bytes(baseURI).length > 0
                ? string(
                    abi.encodePacked(
                        baseURI,
                        _tokenId.toString(),
                        ".json"
                    )
                )
                : "";
    }

    //only owner

    function setMintPrice(uint256 _newMintPrice) public onlyOwner {
        mintPrice = _newMintPrice;
    }

    function setmaxMintAmount(uint256 _newmaxMintAmount) public onlyOwner {
        maxMintAmount = _newmaxMintAmount;
    }

    function setBaseURI(string memory _newBaseURI) external onlyOwner {
        baseURI = _newBaseURI;
    }


    function setPublicMint(bool _state) external onlyOwner {
        isPiblicMintEnabled = _state;
    }

    function withdrawAll() public payable onlyOwner {
        payable(msg.sender).transfer(address(this).balance);
    }

    function withdrawAmount(uint weiAmount) public payable onlyOwner {
        require(weiAmount <= address(this).balance, "Insufficient balance.");
        payable(msg.sender).transfer(weiAmount);
    }

    function checkBalance() public view onlyOwner returns (uint) {
        return address(this).balance;
    }
}
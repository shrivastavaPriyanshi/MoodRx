// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.8.2 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract RewardToken is ERC20 {
    address public admin;

    constructor() ERC20("MentalHealthToken", "MHT") {
        admin = msg.sender;
        _mint(msg.sender, 1000000 * 10 ** decimals());
    }

    function mint(address to, uint256 amount) external {
        
        require(msg.sender == admin, "Only admin can mint");
        _mint(to, amount);
    }
}

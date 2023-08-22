const Ticket = artifacts.require("Ticket");

module.exports = function (deployer) {
  // Here, I've set the ticket price (in wei) and maximum tickets available
  const ticketPrice = web3.utils.toWei("0.1", "ether");
  const maxTickets = 100;

  deployer.deploy(Ticket, ticketPrice, maxTickets);
};

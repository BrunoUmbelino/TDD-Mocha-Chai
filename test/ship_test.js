var expect = require("chai").expect;

describe("checkForShip", () => {
  var checkForShip = require("../game_logic/ship_methods.js").checkForShip;

  it("should correctly report no ship at a given a players coordinate", () => {
    player = {
      ships: [{ location: [[0, 0]] }],
    };
    expect(checkForShip(player, [9, 9])).to.be.false;
  });

  it("should correctly report no ship located at the given coordinates", () => {
    player = {
      ships: [{ location: [[0, 0]] }],
    };
    expect(checkForShip(player, [0, 0])).to.deep.equal(player.ships[0]);
  });

  it("should handle ships located at more than one coordinate", () => {
    player = {
      ships: [
        {
          location: [
            [0, 0],
            [0, 1],
          ],
        },
      ],
    };
    expect(checkForShip(player, [0, 1])).to.deep.equal(player.ships[0]);
    expect(checkForShip(player, [0, 0])).to.deep.equal(player.ships[0]);
    expect(checkForShip(player, [9, 9])).to.be.false;
  });

  it("should handle checking multiple ships", () => {
    player = {
      ships: [
        {
          location: [
            [0, 0],
            [0, 1],
          ],
        },
        {
          location: [
            [1, 0],
            [1, 1],
          ],
        },
        {
          location: [
            [2, 0],
            [2, 1],
            [2, 2],
            [2, 3],
          ],
        },
      ],
    };
    expect(checkForShip(player, [0, 0])).to.deep.equal(player.ships[0]);
    expect(checkForShip(player, [0, 1])).to.deep.equal(player.ships[0]);
    expect(checkForShip(player, [1, 0])).to.deep.equal(player.ships[1]);
    expect(checkForShip(player, [1, 1])).to.deep.equal(player.ships[1]);
    expect(checkForShip(player, [2, 3])).to.deep.equal(player.ships[2]);
    expect(checkForShip(player, [9, 9])).to.be.false;
  });
});

describe("damageShip", () => {
  var damageShip = require("../game_logic/ship_methods").damageShip;

  it("should register damage on a given ship at a given location", () => {
    var ship = {
      location: [[0, 0]],
      damage: [],
    };
    damageShip(ship, [0, 0]);
    expect(ship.damage).to.not.be.empty;
    expect(ship.damage[0]).to.deep.equal([0, 0]);
  });
});

describe("fire", () => {
  var fire = require("../game_logic/ship_methods").fire;

  it("should record damage on the givin players ship at a given coordinate", () => {
    var player = {
      ships: [
        {
          location: [[0, 0]],
          damage: [],
        },
      ],
    };
    fire(player, [0, 0]);
    expect(player.ships[0].damage[0]).to.deep.equal([0, 0]);
  });

  it("should NOT record damage if there in no ship at my coordinates", () => {
    var player = {
      ships: [
        {
          location: [[0, 0]],
          damage: [],
        },
      ],
    };
    fire(player, [0, 0]);
    expect(player.ships[0].damage[0]).to.deep.equal([0, 0]);
  });
});

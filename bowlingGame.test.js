const bowlingGame = require('./bowlingGame')

describe('bowlingGame', () => {
  describe('.addPlayer', () => {
    it('returns an empty array of players', () => {
      const player = new bowlingGame();
      expect(player.addPlayer()).toEqual([])
    })

    it('adds a player name to the array with name params', () => {
      const player = new bowlingGame();
      player.addPlayer("Robi")
      expect(player.addPlayer("Robi")).toEqual([{name: "Robi"}])
    })
  })
})
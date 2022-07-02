const bowlingGame = require('./bowlingGame')

describe('bowlingGame', () => {
  describe('.addPlayer', () => {
    it('returns an empty array of players', () => {
      const player = new bowlingGame();
      expect(player.addPlayer()).toEqual([])
    })
  })
})
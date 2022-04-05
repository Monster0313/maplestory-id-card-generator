export const state = () => ({
  world: '',
  name: '',
  level: 10,
  startDate: new Date(),
  character: '阿戴爾',
  union: 10,
  guild: '',
  arc: 0,
  aut: 0,
  monsterCollection: 0,
  profile: ''
})

export const mutations = {
  SET_CARD (state, { key, value }) {
    state[key] = value
  }
}

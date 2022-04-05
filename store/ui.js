export const state = () => ({
  isCharacterPopup: false
})

export const mutations = {
  SET_UI (state, { key, value }) {
    state[key] = value
  }
}

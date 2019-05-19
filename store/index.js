import pageShortcuts from '~/assets/pageShortcuts'

export default {
  state: {
    pageShortcuts: pageShortcuts,
  },
  getters: {
    pageShortcuts: (state) => state.pageShortcuts,
  }
}
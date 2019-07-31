import pageShortcuts from '~/assets/pageShortcuts'

export default {
  strict: false,
  state: {
    pageShortcuts: pageShortcuts,
    currentPage: {},
    nextPage: {},
    prevPage: {}
  },
  getters: {
    pageShortcuts: state => state.pageShortcuts,
    currentPage: state => state.currentPage,
    nextPage: state => state.nextPage,
    prevPage: state => state.prevPage,
  },
  mutations: {
    setPageData: (state, currentPage) => {
      let distributedPages = state.pageShortcuts.filter(el => el.tags[0] != 'draft')
      let idx = distributedPages.findIndex(el => el.created_at === currentPage.created_at)

      let prevPage = distributedPages[idx-1]
      let nextPage = distributedPages[idx+1]

      state.currentPage = currentPage
      state.prevPage = prevPage ? prevPage : {}
      state.nextPage = nextPage ? nextPage : {}
    }
  }
}
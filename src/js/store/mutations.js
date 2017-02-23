export default {
  login (state, { nickname }) {
    window.localStorage.setItem('vue-test', nickname)
  }
}
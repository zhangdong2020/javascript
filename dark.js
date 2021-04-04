alert('darkdarkdarkdarkdarkdarkdark')

window.onload = function () {
  try {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      alert('dark')
    }
  } catch (err) {
  }
}

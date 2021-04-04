try {
  if(window.matchMedia('(prefers-color-scheme: dark)').matches){
    alert('dark')
  }
} catch (err) {
  console.log(err)
}

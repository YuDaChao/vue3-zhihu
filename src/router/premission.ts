import router from './router'

router.beforeEach((to, form, next) => {
  console.log(to)
  next()
})

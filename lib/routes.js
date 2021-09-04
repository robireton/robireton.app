import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
  const menu = []
  res.render('home', { page_title: '', base_url: req.proxyBase, menu: menu })
})

export default router

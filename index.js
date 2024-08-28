import { Router } from "./router.js"
const router = new Router ()
router.add("/home" , "/pages/home.html")
router.add("/OUniverso" , "/pages/OUniverso.html")
router.add("/Exploracao" , "pages/Exploracao.html")

router.handle ()

window.onpopstate = () => router.handle()
window.route = () => router.route()

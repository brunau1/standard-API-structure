import { Router } from 'express'
import testeRoutes from '../routes/testeRoutes'

class Routes {
    router : Router

    constructor(){
        this.router = Router()
        this.defineTesteRoutes()
    }

    defineTesteRoutes(){
        this.router.use('/', testeRoutes)
    }
}
export default new Routes().router
import HomePage from "../pages/homePage/HomePage";
import SignInPage from "../pages/signInPage/SignInPage";
import SignUpPage from "../pages/signUpPage/SignUpPage";
import {pathRouter} from "./pathRouter";
import NotFoundPage from "../pages/notFoundPage/NotFoundPage";
import Blog from "../pages/blog/Blog";
import Contact from "../pages/contact/Contact";

export const publicRouter = [
    {
        path: pathRouter.home,
        component: HomePage
    }, {
        path: pathRouter.signIn,
        component: SignInPage,
        value: true
    }, {
        path: pathRouter.signUp,
        component: SignUpPage,
        value: true
    }, {
        path: pathRouter.notFound,
        component: NotFoundPage
    }, {
        path: pathRouter.blog,
        component: Blog
    }, {
        path: pathRouter.contact,
        component: Contact
    }]

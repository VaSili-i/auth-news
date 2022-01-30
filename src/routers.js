import { MAIN, NEWS } from "./utils/consts";
import Main from "./pages/Main";
import News from "./pages/News";

export const routers = [
    { path: MAIN, Element: Main },
    { path: NEWS, Element: News },
]
import {Routes, Route, Navigate} from "react-router-dom";
import {MainLayout} from "./layouts";
import {AboutPage, HomePage, NotFoundPage, PostsPage, PostDetails, UsersPage, UserDetails} from "./pages";
import {UserPosts} from "./components";

function App() {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'home'}/>}/>
                <Route path={'home'} element={<HomePage/>}/>

                <Route path={'users'} element={<UsersPage/>}>
                    <Route path={':id'} element={<UserDetails/>}>
                        <Route path={':posts'} element={<UserPosts/>}/>
                    </Route>
                </Route>

                <Route path={'posts'} element={<PostsPage/>}>
                    <Route path={':id'} element={<PostDetails/>}/>
                </Route>


                <Route path={'about'} element={<AboutPage/>}/>
                <Route path={'*'} element={<NotFoundPage/>}/>
            </Route>
        </Routes>

    )
        ;
}


export default App;

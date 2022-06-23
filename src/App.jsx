import Register from './components/Register';
import Login from './components/Login';
import Home from './pages/Home';
import Layout from './components/Layout';
import Editor from './components/Editor';
import Admin from './components/Admin';
import Missing from './components/Missing';
import Unauthorized from './components/Unauthorized';
import Lounge from './components/Lounge';
import LinkPage from './components/LinkPage';
import RequireAuth from './components/RequireAuth';
import MyAccount from './pages/MyAccount';
import { Route, Routes } from 'react-router-dom';
import Test1 from './components/Test1';
import Test2 from './components/Test2';
import { UserDataProvider } from './context/userData';

const ROLES = {
    'User': 2001,
    'Editor': 1984,
    'Admin': 5051
}

function App() {

    return (
        <UserDataProvider>
            <Routes>
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />

                <Route path="/" element={<Layout />}>
                    {/* public routes */}
                    <Route path="linkpage" element={<LinkPage />} />
                    <Route path="unauthorized" element={<Unauthorized />} />
                    <Route path="/" element={<Home />} />
                    {/* we want to protect these routes */}
                    <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
                        <Route path="myAccount" element={<MyAccount />}>
                            <Route path="" element={<Test1 />} />
                            <Route path="test1" element={<Test1 test={'rodolfo'} />} />
                            <Route path="test2" element={<Test2 test={'rodolfo'} />} />
                        </Route>
                    </Route>
                    <Route element={<RequireAuth allowedRoles={[ROLES.Editor]} />}>
                        <Route path="editor" element={<Editor />} />
                    </Route>
                    <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
                        <Route path="admin" element={<Admin />} />
                    </Route>
                    <Route element={<RequireAuth allowedRoles={[ROLES.Editor, ROLES.Admin]} />}>
                        <Route path="lounge" element={<Lounge />} />
                    </Route>

                    {/* catch all */}
                    <Route path="*" element={<Missing />} />
                </Route>
            </Routes>
        </UserDataProvider>
    );
}

export default App;
import {Route, Routes} from "react-router-dom";
import {publicRouter} from "./routers/Router";
import {Fragment} from "react";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import PageHeader from "./layout/defaultPage/PageHeader";
import AuthProvider from "./context/AuthContext";
import PageNoHeader from "./layout/defaultPage/PageNoHeader";


function App() {
    let Page;
    let DefaultPage;
    return (
        <Fragment>
            <AuthProvider>
                <Routes>
                    {publicRouter.map((item) => (
                        Page = item.component,
                            item.value ? DefaultPage = PageNoHeader : DefaultPage = PageHeader,
                            <Route
                                key={item.path}
                                path={item.path}
                                element={<DefaultPage><Page/></DefaultPage>}
                            ></Route>
                    ))}
                </Routes>
            </AuthProvider>
            <ToastContainer
                style={{height: "100px", fontSize: "14px"}}
                limit={1}
                autoClose={3000}
            ></ToastContainer>
        </Fragment>
    );
}

export default App;

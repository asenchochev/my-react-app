import { Routes, Route } from 'react-router-dom'

import { AuthProvider } from './contexts/authContext';

import Home from "./components/homePageComponent/Home"
import CreateEstate from "./components/CreateEstatePageComponent/CreateEstate";
import Navigation from "./components/navigationComponent/Navigation";
import Footer from "./components/footerComponent/Footer";
import Details from "./components/detailsPageComponent/Details";
import Catalog from "./components/catalogPageComponent/Catalog";
import Register from "./components/RegisterPageComponent/Register"
import Login from "./components/loginPageComponent/Loing"
import EditEstate from './components/editEstatePageComponent/EditEstate';
import Search from './components/serachPageComponent/Search';
import AuthGuard from './components/guards/AuthGuard';
import GuestGuard from './components/guards/GuestGuard';
import NotFound from './components/404PageComponent/NotFound';
import MyPosts from './components/myPoststPageComponent/MyPosts';

export default function App() {
    return (
        <div className="container-xxl bg-white p-0">
            <AuthProvider>
                <Navigation />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/catalog' element={<Catalog />} />
                    <Route path='/:estateId-details' element={<Details />} />
                    <Route element={<AuthGuard />}>
                        <Route path='/create-estate' element={<CreateEstate />} />
                        <Route path='/search' element={<Search />} />
                        <Route path='/:estateId-edit' element={<EditEstate />} />
                        <Route path='/my-posts' element={<MyPosts />} />
                    </Route>
                    <Route element={<GuestGuard />}>
                        <Route path='/register' element={<Register />} />
                        <Route path='/login' element={<Login />} />
                    </Route>
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </AuthProvider>
            <Footer />
            <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
                <i className="bi bi-arrow-up" />
            </a>
        </div>
    )
}
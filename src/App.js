import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {Landing, Settings,Home, Register, ProtectedRoute, Error} from "./pages/index"
import {Profile, SharedLayout, Clipshots, Watch, Redoos, ClipshotSinglePage, WatchSinglePage, RedoosSinglePage, CreatePost, SavedList} from './pages/dashboard/index'


import { useAppContext } from './context/appContext.js'

function App() {
  const {userRegistered} = useAppContext()
  return (
    <>
      <BrowserRouter>
 
          <Routes>         

            <Route path="/" element={
              <ProtectedRoute> 
                <SharedLayout /> 
              </ProtectedRoute>} >
              <Route index element={<Home />} />
              <Route path="profile" element={<Profile />} />
              <Route path="create" element={<CreatePost />} />
              <Route path="settings" element={<Settings />} />
              <Route path="redoos" element={<Redoos />} />
              <Route path="watch" element={<Watch />} />
              <Route path="clipshots" element={<Clipshots />} />
              <Route path="saved-list" element={<SavedList />} />

              
              <Route path="watch/:id" element={<WatchSinglePage />} />
              <Route path="clipshot/:id" element={<ClipshotSinglePage />} />
              <Route path="redoo/:id" element={<RedoosSinglePage />} />



              </Route>
              {!userRegistered && <Route path="/landing" element={<Landing />} />}
            <Route path="/register" element={<Register/>} />
            <Route path="*" element={<Error/>} />
          </Routes>
      </BrowserRouter>
    </>    
  );
}

export default App;

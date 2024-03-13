import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Get_all_item from './Get_all';
import Get_by_id from './Get_id'; 
import Add_Edit from './Insert_update';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <>
    <BrowserRouter>
      <Routes>
        <Route path='/rest' element={<Get_all_item/>}/>
        <Route path='/rest/:id' element={<Get_by_id/>}/>
        <Route path="/rest/add" element={<Add_Edit />} />
        <Route path="/rest/:id/edit" element={<Add_Edit />} />
      </Routes>
    </BrowserRouter>
 </>
);



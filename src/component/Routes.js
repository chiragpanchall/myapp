import {Routes, Route} from 'react-router-dom'
import { CreateData } from './AddData';
import {TableData} from './index'
import { ErrorPage } from './ErrorPage';


// creatig routes
export const AppRoutes = () => {
    
 return (
    <Routes>
    <Route path='/' element={<TableData />}></Route>
    <Route path='/create' element={<CreateData />}></Route>
    <Route path='*' element={<ErrorPage />}></Route>       
 </Routes>
 )
}
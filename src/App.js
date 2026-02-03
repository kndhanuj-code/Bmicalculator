import logo from './logo.svg';
import './App.css';
import Task1 from './Components/Props/Task1';
import Product from './Components/Props/Product';
import Childone from './Components/Props/Childone';
import Ustate from './Components/hooks/usestate/Ustate';
import Form from './Components/hooks/usestate/Form';
import Ustatetwo from './Components/hooks/usestate/Ustatetwo';
import Facebook from './Components/hooks/usestate/Facebook';

import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Navv from './Components/Navv';
import Joke from './Components/Joke';
import Game from './Components/Game';
import Validation from './Components/Validation';
import Fbvalidationform from './Components/Fbvalidationform';
import Storage from './Components/Storage';
import Amount from './Components/Amount';
import Pagechecker from './Components/Pagechecker';
import Otpform from './Components/Otpform';
import Verifyotp from './Components/Verifyotp';
import UseEff from './Components/UseEff';
import Time from './Components/Time';
import QuizApp from './Components/QuizApp';
import Usecont from './Components/Usecont';
import Usecon from './Components/Usecon';
import Add from './Components/Add';
import Todo from './Components/hooks/usestate/useReducerr/Todo';
import RecipeManager from './Components/hooks/usestate/useReducerr/RecipeManager';
import Datatable from './Components/Crud/Datatable';
import Ecart from './Components/Crud/Ecart';
import Stdrecord from './Components/Crud/Stdrecord';
import StudentMarks from './Components/Crud/StudendMarks';
import Get from './Components/Crud/Get';
import Delete from './Components/Crud/Delete';
import Create from './Components/Crud/Create';
import Focus from './Components/hooks/useRefhook/Focus';
import Input from './Components/hooks/useRefhook/Input';
import Button from './Components/hooks/useRefhook/Button';
import Section from './Components/hooks/useRefhook/Section';
import Postcrudd from './Components/Crud/Postcrudd';
import Getcrudd from './Components/Crud/Getcrudd';
import Updatecrudd from './Components/Crud/Updatecrudd';
import Createcd from './Components/Productcrud/Createcd';
import Getcd from './Components/Productcrud/Getcd';
import Producttask from './Components/Producttask';
import Makemytrip from './Components/Makemytrip';
import Getproduct from './Components/Productcrud/Getproduct';

import Register from './Components/Interview task/Register';
import Home from './Components/Interview task/Home';
import About from './Components/Interview task/About';
import Createuser from './Components/firebase/Createuser';
import Loginpage from './Components/firebase/Loginpage';
import CreateUser from './Components/Crud/CreateUser';
import Bmicalculator from './Components/Interview task/Bmicalculator';






function App() {
  return (
    <div className="App">
      {/* <Add/> */}
      {/* <Usecont/> */}
      
      {/* <Task1/> */}
      {/* <Product/> */}
      {/* <Childone/> */}
      {/* <Ustate/> */}
      {/* <Joke/> */}
      {/* <Game/> */}
      {/* <Form/> */}
      {/* <Ustatetwo/> */}
      {/* <Facebook/> */}
      {/* <Validation/> */}
      {/* <Fbvalidationform/>*/}
      {/* <Amount/> */}
      {/* <Pagechecker/> */}
       {/* <Storage/>  */}
       {/* <Otpform/> */}
       {/* <UseEff/> */}
       {/* <Time/>
       <QuizApp/> */}
        {/* <Verifyotp/> */}
       
       <BrowserRouter>
      
       <div >
       <div >
       <Navv />
       </div>
       <div style={{marginTop:'100px'}}>
         <Routes>
       
          <Route path='' element={<Facebook/>}/>
          <Route path='/Product' element={<Product/>}/> 
          <Route path='/task1' element={<Task1/>}/>
          <Route path="/page" element={<Pagechecker />} />
         <Route path="/amount" element={<Amount />} />
         <Route path="/Otp" element={<Otpform />} />
         <Route path="/Verify" element={<Verifyotp />} />
         <Route path="/Reduce" element={<Todo/>}/>
         <Route path="/recipe" element={<RecipeManager/>}/>
         <Route path="/quiz" element={<QuizApp/>}/>
         <Route path="/data" element={<Datatable/>}/>
          <Route path="/cart" element={<Ecart/>}/>
           <Route path="/Studentrecord" element={<Stdrecord/>}/>
          
          <Route path='/store/storage'  element={<storage />} />
           <Route path="/marks/:id" element={<StudentMarks/>}/> 
          <Route path="/get" element={<Get/>} />
          <Route path="/delete" element={<Delete/>} />
          <Route path="/create" element={<Create/>} />
          <Route path="/focus" element={<Focus/>} />
          <Route path="/input" element={<Input/>} />
           <Route path="/Btn" element={<Button/>} />
           <Route path="/sec" element={<Section/>} />
            <Route path="/crpost" element={<Postcrudd/>} />
             <Route path="/crget" element={<Getcrudd/>} />
             
              <Route path="/crupdate" element={<Updatecrudd/>} />
              <Route path="/createcd" element={<Createcd/>} />
              <Route path="/getcd" element={<Getcd/>} />
              <Route path="/Protask" element={<Producttask/>} />
              <Route path="/chat" element={<Makemytrip/>} />
              <Route path="/Get slice" element={<Getproduct/>} />
              <Route path="/" element={<Home/>} />
               <Route path="/about" element={<About/>} />
              <Route path="/Form valid" element={<Register/>} />
              <Route path="/user" element={<Createuser/>} />
              <Route path="/login" element={<Loginpage/>} />
                <Route path="/node" element={<CreateUser/>} />
                <Route path="/bmi" element={<Bmicalculator/>} />
              
              
          
          
         
    


       


         </Routes>
 </div>
 </div>
       </BrowserRouter> 
     
    </div>
  );
}

export default App;

import Transaction from "./components/Transaction";
import FormComponent from "./components/FormComponent";
import './App.css'
import { useState,useEffect } from "react";
import DataContext from "./data/DataContext";
import ReportComponent from "./components/ReportComponent";
import { BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

//const Description =()=><p>บันทึกข้อมูลบัญชีในแต่ละวัน</p>


function App() {
  const design = {color:'red',textAlign:"center",fontSize:"1.5rem"}
  const initState = [
    {id: 1,title:"ค่าเช่าบ้าน",amount:-2000},
    {id: 2,title:"เงินเดือน",amount:12000},
    {id: 3,title:"ค่าเดินทาง",amount:-500},
    {id: 4,title:"ขายของ",amount:2000},
  ]
  const [items,setItem] = useState(initState)

  const [reportincome,setReportincome] = useState(0)
  const [reportexpense,setReportexpense] = useState(0)
  const onAddNewItem = (newItem)=>{
      setItem((prevItem)=>{
        return [newItem,...prevItem]
      })
  }
  useEffect(()=>{
      const amounts = items.map(items =>items.amount)
      const income = amounts.filter(e=>e>0).reduce((total,e)=>total+=e,0)
      const expense = amounts.filter(e=>e<0).reduce((total,e)=>total+=e,0)*-1
      setReportincome(income.toFixed(2))
      setReportexpense(expense.toFixed(2))
  },[items,reportincome,reportexpense])

  /*const [showReport,setShowReport] = useState(false)
  const reducer = (state,action)=>{
      switch (action.type){
        case "SHOW" :
          return setShowReport(true)
        case "HIDE" :
          return setShowReport(false)
      }
  }
  <h1>{result}</h1>
  <button onClick={()=>dispatch({type:"SHOW"})}>แสดง</button>
  <button onClick={()=>dispatch({type:"HIDE"})}>ซ่อน</button>
  const [result,dispatch] = useReducer(reducer,showReport)*/

  return (
        <DataContext.Provider value={{income : reportincome,expense: reportexpense}}>
          <div className="container">
            <h1 style={design}>โปรแกรมบัญชีรายรับ-รายจ่าย</h1>
            <Router>
              <div>
                <ul className="horizontal-munu">
                  <li>
                    <Link to="/">ข้อมูลบัญชี</Link>
                  </li>
                  <li>
                    <Link to="/insert">บัญทึกข้อมูล</Link>
                  </li>
                </ul>
                <Switch>
                  <Route path="/" exact>
                    <ReportComponent/>
                  </Route>
                  <Route path="/insert">
                    <FormComponent onAddItem={onAddNewItem}/>
                    <Transaction items = {items}/>
                  </Route>
                </Switch>
              </div>
            </Router>
          </div>
        </DataContext.Provider>
  );
}

export default App;

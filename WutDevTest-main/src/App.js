import './App.css';
import ContactTable from "./components/ContactTable";
import ContactForm from "./components/ContactForm";
import ContactController from './controllers/ContactController';
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import axios from 'axios';

const api=axios.create({
  baseURL : 'http://localhost:3000'
})

class App extends React.Component {

  state = {
    msg: ""
  };

  constructor (props) {
    this.getMsg();
    this.contactController = new ContactController();
    this.contacts = this.contactController.getAll();
  };

  
  getMsg = async()=>{
    try{
    //let data= await api.getAll('/').then(res =>{console.log(res.data)})
    let data= await axios({method: 'get',
  URL: 'http://localhost:3000'})
  this.setState({ msg: res.data})
  }catch(err){
    console.log(err)
  }
}

  
  createMsg = async() =>{
    let res=await api
                .post('/',{title:"Test",id:4,author:'test'})
                .catch(err=> console.log(err))
    console.log(res)
    this.getMsg();
  }

  deleteMsg = async(id) =>{
    let res=await api.delete('/${id}')
    this.getMsg();
    }

  updateMsg = async(id,val) =>{
      let res=await api.patch('/${id}' ,{title: val})
      this.getMsg();
      }

  componentDidMount(){
    fetch('%PUBLIC_URL%/manifest.json')
    .then(res =>res.json())
    .then(json =>{
        this.setState({
          isLoaded : true,
        })
    })
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.createMsg}>Msg</button>
        <button onClick={this.deleteMsg(msg.id)}>X</button>
        this.state.msg.map(msg ={'>'} <h2 key={msg.id}>{msg.title}</h2>)
        <ContactTable contacts={this.contacts}/>
        <ContactForm openText='Add' edit={false}/>
      </div>
    );
  }
}

export default App;

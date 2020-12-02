import 'tachyons'
import {useEffect,useState}  from 'react'
import {useMutation} from '@apollo/react-hooks';
import {UPDATE_BOOKS} from '../Api/queries';
import { navigate } from '@reach/router';
import hello from '../Assets/bookss.png'
import bklogo from '../Assets/booklogo.png'


export default function Home(){
     const [msgBox, setmsgBox] = useState(true);
     const [title, setTitle] = useState('');
     const [authr,setAuthr] = useState('');
     const [ISBN,setISBN] = useState('');
     const [errBox, setErrBox] = useState('');
     const [errMsg,seterrMsg] = useState('');
    //  const { loading, error, data } = useQuery(EXCHANGE_RATES);
     const [updatethebooks,{currentstatus}] = useMutation(UPDATE_BOOKS);
    

    console.log("currentstatus",currentstatus);
    const getBooksInfo = async (title,author,ISBN) => {
      // console.log("parseInt(title)",parseInt(title));
      // console.log("typeof(title)",typeof(parseInt(title)));
      if(isNaN(title)===true){
        console.log("Alphanumeric")
      }else{
        console.log("pure number")
      }
      await updatethebooks({variables:{bookname:title,author:author,ISBN:ISBN}});
    };
    var d = (new Date()).toString().split(' ').splice(1,3).join(' ');
    const errmsg = (a) => {
      if(a==true){
        return true;
      }
        return false;
    }

  

// function errResolver(msg) {
//    if (msg === a) {
//     seterrMsg("Please fill all the details");
//       setTimeout(() => {
//         setErrBox(false)
//       },2000)
//     }
//   }

     return (
      <div>
      {/* <div style= {{backgroundImage:`url(${hello})`, backgroundPosition: '',backgroundSize: 'cover',backgroundRepeat: 'no-repeat'}}> */}
      <div className="flex  justify-between items-center bg-dark-gray pa3">
      <div className="white f3-ns align-center-ns mv2-ns w-30 ml5">Book Donation Site</div>
      <div className="flex justify-center items-center w-70">
      <div className="white f3 mr6 pointer hover-bg-white-20" onClick={()=> {navigate(`/booksqueries`)}}>Queries</div>
      <div className="white f3 pointer hover-bg-white-20">More</div>
      </div>
      </div>
      <div className="flex  justify-center items-center bg-gold relative">
      {/* <img className="mv3" src={hello}/> */}
      <div className="bg-mid-gray o-90 pa5 w-90 mv4">
      <div className="white f2">Welcome to Books Donation online Site</div>
      <div className="flex  justify-between items-center pt2 absolute">
      <div className="white f2 mr3">By SushmaC</div>
      <div className="white f2 mr3">JavaScript</div>
      <div className="white f2">{d}</div>
      </div>
      </div>
      </div>
      <div className="flex flex-column">
      <div className="flex justify-center items-center mv2">
      <div className="f3">Enter the Book name : </div>
     {/* <input id="name" className="border-input  ba b--black-05" placeholder="bookname" type="text"></input> */}
     <input  className="pa2 w5 ba b--gray-10" placeholder="Bookname" onChange={event => setTitle(event.target.value)} />
     </div>
      <div className="flex justify-center items-center mv2">
      <div className="f3">Enter the Author name:</div>
      {/* <input id="name" className="border-input  ba b--black-05" placeholder="bookname" type="text" value=""></input> */}
      <input  className="border-input  ba b--gray-10 pa2 w5" placeholder="Authorname" onChange={event => setAuthr(event.target.value)} />
      </div>
      <div className="flex justify-center items-center mv2">
      <div className="f3">Enter the ISBN:</div>
      {/* <input id="name" className="border-input  ba b--black-05" placeholder="bookname" type="text" value=""></input> */}
      <input  className="border-input  ba b--gray-10 pa2 w5" placeholder="ISBN" onChange={event => setISBN(event.target.value)} />
      </div>
      </div>
      <div className="flex justify-center items-center mv4">
     {/* {(title.length==0)||(authr.length==0)||(ISBN.length==0)}?  */}
     {/* <button className="pa2 w4" onClick={() =>}>Submit</button> */}
     {/* <button className="pa2 w4">Submit</button> */}
     {errBox &&
    <div className="flex">
        <div className="bg-gold f6 white fw1 flex justify-center  items-center pa2 w-100 pr4"><div className="ba br-50 pa2 w2 h2 white flex justify-center items-center relative"><div className="absolute">!</div></div><span style={{ marginLeft: 12 }}></span>Hey</div>
    </div>
    } 
    {/* ? */}
    {/* {items===true? <div className="" onClick={()=> setItems(false)}>True</div>:<div className="" onClick={()=> setItems(true)}>false</div>} */}
     <button className="pa2 w4 bg-light-blue" onClick={() => setErrBox(false),getBooksInfo(title,authr,ISBN)}>Submit</button>
     {/* {msgBox===true? <div>Successfully added</div>:} */}
      </div>
      <footer className="bg-mid-gray o-90 ph7-l w-100 dn db-l pv4 fixed l0 b0" style={{ left: 0,bottom: 0}}>
      <div className="flex justify-between items-center">
        <div className="white">Give a new Life to your used books</div>
        <div className="flex">
        <img className="w2 h2" src={bklogo}/> 
        <div className="white mt2 ml2">Books Donation</div>
        </div>
        </div>
      </footer>
      </div>
    )
  }
  
  
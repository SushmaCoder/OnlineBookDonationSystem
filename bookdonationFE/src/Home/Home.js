import 'tachyons'
import { useEffect, useState } from 'react'
import { useMutation } from '@apollo/react-hooks';
import { UPDATE_BOOKS } from '../Api/queries';
import { navigate } from '@reach/router';
// import hello from '../Assets/bookss.png'
import bklogo from '../Assets/booklogo.png'


export default function Home() {
  const [msg, setMsg] = useState("");
  const [title, setTitle] = useState('');
  const [authr, setAuthr] = useState('');
  const [ISBN, setISBN] = useState('');
  const [check, setCheck] = useState(true);
  const [err, setErr] = useState(false);
  const [errMsg, seterrMsg] = useState('');
  //  const { loading, error, data } = useQuery(EXCHANGE_RATES);
  const [updatethebooks, { currentstatus }] = useMutation(UPDATE_BOOKS);


  console.log("currentstatus", currentstatus);
  function setDefaultValue() {
    console.log("i am called")
    setTitle('')
    setAuthr('')
    setISBN('')
    console.log(title)
  }
  const getBooksInfo = async (title, author, ISBN) => {
    // console.log("parseInt(title)",parseInt(title));
    // console.log("typeof(title)",typeof(parseInt(title)));
    // if(isNaN(title)===true){
    //   console.log("Alphanumeric")
    // }else{
    //   console.log("pure number")
    // }
    if (title != "" && author != "" && ISBN != "") {
      document.getElementById("bk").value = "";
      document.getElementById("Au").value = "";
      document.getElementById("isbn").value = "";
      await updatethebooks({ variables: { bookname: title, author: author, ISBN: ISBN } });
      setDefaultValue();
    }
  };
  const timeout = async () => {
    setTimeout(() => {
      setErr(false);
    }, 2600);
  }
  const working = async () => {
    setTimeout(() => {
      setMsg("");
    }, 800);
  }
  var d = (new Date()).toString().split(' ').splice(1, 3).join(' ');
  // const errmsg = (a) => {
  //   if(a==true){
  //     return true;
  //   }
  //     return false;
  // }



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
          <div className="white f3 mr6 pointer hover-bg-white-20" onClick={() => { navigate(`/booksqueries`) }}>Queries</div>
          <div className="white f3 pointer hover-bg-white-20">More</div>
        </div>
      </div>
      <div className="flex  justify-center items-center bg-gold relative">
        {/* <img className="mv3" src={hello}/> */}
        <div className="bg-mid-gray o-90 pa5 w-90 mv4">
          <div className="flex  justify-center items-center white f2 ">Welcome to Books Donation online Site</div>
          {/* <div className="flex  justify-between items-center pt2 absolute">
      <div className="white f2 mr3">By SushmaC</div>
      <div className="white f2 mr3">JavaScript</div>
      <div className="white f2">{d}</div>
      </div> */}
        </div>
      </div>
      <div className="flex flex-column">
        <div className="flex justify-center items-center mv2 mr2">
          <div className="f3 pr2">Enter the Book name : </div>
          {/* <input id="name" className="border-input  ba b--black-05" placeholder="bookname" type="text"></input> */}
          <input className="pa2 w5  b--gray-10" placeholder="Bookname" id="bk" onChange={event => setTitle(event.target.value)} />
        </div>
        <div className="flex justify-center items-center mv2 ml2">
          <div className="f3 pr2">Enter the Author name : </div>
          {/* <input id="name" className="border-input  ba b--black-05" placeholder="bookname" type="text" value=""></input> */}
          <input className="border-input   b--gray-10 pa2 w5" placeholder="Authorname" id="Au" onChange={event => setAuthr(event.target.value)} />
        </div>
        <div className="flex justify-center items-center mv2">
          <div className="f3 pr2">Enter the book's ISBN : </div>
          {/* <input id="name" className="border-input  ba b--black-05" placeholder="bookname" type="text" value=""></input> */}
          <input className="border-input b--gray-10 pa2 w5" placeholder="ISBN" id="isbn" onChange={event => setISBN(event.target.value)} />
        </div>
      </div>
      <div className="flex justify-center items-center mv4">
        {check === true && title && authr && ISBN ? <button className="pa2 w4 bg-light-blue" onClick={() => {
          setCheck(false);
          setErr(false);
          getBooksInfo(title, authr, ISBN);
          setMsg("Succesfully inserted");
          working();
        }}>Submit</button>
          : check === false && title && authr && ISBN ? <button className="pa2 w4 bg-light-blue" onClick={() => {
            setCheck(false);
            setErr(false);
            setMsg("Succesfully inserted");
            working();
            getBooksInfo(title, authr, ISBN);
          }}>Submit</button> :
            <button className="pa2 w4 bg-light-gray" onClick={() => { setErr(true); timeout(); }}>Submit</button>}
      </div>
      {err && msg == "" && <div className="flex justify-center items-center mv4"><div className="pa2 w5 bg-yellow mt2 tc">please fill all the details</div></div>}
      {msg != "" && <div className="flex justify-center items-center mv4"><div className="pa2 w5 bg-yellow mt2 tc">{msg}</div></div>}
      <footer className="bg-mid-gray o-90 ph7-l w-100 dn db-l pv4 fixed l0 b0" style={{ left: 0, bottom: 0 }}>
        <div className="flex justify-between items-center">
          <div className="white">Give a new Life to your used books</div>
          <div className="flex">
            <img className="w2 h2" src={bklogo} />
            <div className="white mt2 ml2">Books Donation</div>
          </div>
        </div>
      </footer>
    </div>
  )
}


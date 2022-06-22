import React,{useState} from 'react';
import Land from './Land';
import Goodbye from './Goodbye';

export default function Whatto() {
    const [issub,setIssub] = useState(false);
    const [rating,setRating] = useState(0);

    const handlesubmit = () =>{
        setIssub(true);
    }

    const  handleclick = (x) =>{
      setRating(parseInt(x.target.name));
    }


  if(issub){return (
    <Goodbye rating={rating}/>
  )}
  else{
    return (
      <Land handlesubmit={handlesubmit}  handleclick={handleclick} rating={rating} />
    )
  }
}

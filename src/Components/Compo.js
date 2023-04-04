import{useState} from 'react';

function Compo() {
    const [name, setName] = useState('');
    const [data, setData] = useState([]);

    const handleChange=(e)=>{
        setName({[e.target.name]:e.target.value});
        // console.log(name);
    }
    const handleSubmit=()=>{
        const dataObj={
            name: name,
        }
        const arr=this.state.data;
        arr.push(dataObj);
        console.log(dataObj);
        this.setData({[this.state.data]:arr})
        console.log(this.state.name);
        console.log(this.state.data);

    }
    return ( 
    <>
    <input type='text' placeholder="Enter Your Name" name="name" onChange={handleChange}></input>
    
    <button onClick={handleSubmit}>Submit</button>
    </>
    )
}
export default Compo
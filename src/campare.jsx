import { useState } from "react";
import "./campare.css";

function Compare({ blog }) {

const [value,setValue] = useState("");
const [value1,setValue1] = useState("");

const [product1,setProduct1] = useState(null);
const [product2,setProduct2] = useState(null);

const div1 = {
    display:"flex",
    flexDirection:"row",
    justifyContent:"center",
    padding:"2px",
    gap:"200px"
};

const findProduct = (name)=>{
    return blog.find((item)=>item.name.toLowerCase()===name.toLowerCase());
};

const handleSubmit = (e)=>{
    e.preventDefault();

    const p1 = findProduct(value);
    const p2 = findProduct(value1);

    setProduct1(p1);
    setProduct2(p2);
};

return(
<div className="body">

<div style={{...div1,backgroundColor:"#799eeeff",width:"100%"}}>

<form onSubmit={handleSubmit}>

<div style={div1}>

<input
type="text"
placeholder="search..."
value={value}
onChange={(e)=>setValue(e.target.value)}
style={{height:"30px",width:"300px",border:"solid black",borderRadius:"4px"}}
/>

<p style={{color:"black",fontSize:"20px"}}>compare with</p>

<input
type="text"
placeholder="search..."
value={value1}
onChange={(e)=>setValue1(e.target.value)}
style={{height:"30px",width:"300px",border:"solid black",borderRadius:"4px"}}
/>

</div>

<div style={{display:"flex",justifyContent:"center",padding:"20px"}}>
<button type="submit"
style={{width:"200px",backgroundColor:"green",borderRadius:"4px",border:"none"}}>
Compare
</button>
</div>

</form>
</div>

<div style={div1}>
<p>image</p>
<img src={product1?.link} alt="" width={400}/>
<img src={product2?.link||"no product"} alt="" width={400}/>
</div>

<div style={div1}>
<p>Brand Name</p>
<h3 style={{width:"400px"}}>{product1?.brand}</h3>
<h3 style={{width:"400px"}}>{product2?.brand}</h3>
</div>

<div style={div1}>
<p>title</p>
<h5 style={{width:"400px"}}>{product1?.title}</h5>
<h5 style={{width:"400px"}}>{product2?.title}</h5>
</div>

<div style={div1}>
<p>Description</p>
<p style={{width:"400px"}}>{product1?.description}</p>
<p style={{width:"400px"}}>{product2?.description}</p>
</div>

</div>
);
}

export default Compare;
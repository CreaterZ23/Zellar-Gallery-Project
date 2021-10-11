import React,{useState} from "react"


function ArtBuyer ({buyerData}){
    const[isLoggedIn, setIsLoggedIn]=useState(false)
    const[formData, setFormData]=useState({
        buyer_name:"",
        password:""
    })

    function handleChange(e){
        setFormData({
            ...formData,[e.target.name]:e.target.value
        })
    }
    function handleSubmit(e){
        e.preventDefault();
        handleBuyerPost(formData)
    }

    function handleBuyerPost(formData){
        fetch('http:localhost:9292/buyer',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(formData)
        }).then(resp=>resp.json())
        
    }

    
    return(
        <div className="buyerForm">
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                name="buyer_name"
                placeholder="Buyer name"
                value={formData.buyer_name}
                onChange={handleChange}
                />
                <input
                type="text"
                name="password"
                placeholder="password"
                value={formData.password}
                onChange={handleChange}
                />
                <button type="submit">Buyer Login</button>
            </form>

        </div>
    )
}

export default ArtBuyer
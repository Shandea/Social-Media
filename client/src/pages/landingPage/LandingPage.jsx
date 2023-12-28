import LandingPageSignup from "../landingPageSignup/landingPageSignup"
import LandingPageLogin from "../landingPageLogin/landingPageLogin"

import { useState } from "react"

const LandingPage = (props) => {

let [register, setRegister] = useState(false)
const handleRegister = ()=>{
  return setRegister(true)
}

  return (
    <div className="landingPage-container">
      <div className="container-left" >
        <h1>Company Name</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae, sed! Doloremque quos accusamus maiores sint illum, ea corrupti voluptatem. Dolorem omnis at similique voluptas a eveniet, iste reprehenderit consectetur molestias?</p>
      </div>

{
  register ? <LandingPageSignup/> : <LandingPageLogin handleRegister={handleRegister}/>
}
    </div>
  )
}

export default LandingPage
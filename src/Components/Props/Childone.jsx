import React from 'react'
import Childtwo from './Childtwo'

const Childone = () => {
    let imagee="https://m.media-amazon.com/images/I/61gAnE1L1wL._AC_UF1000,1000_QL80_.jpg"
    let  agee=23
    let nam="Dhanuj"
    
    let user =[{
  name: "Dhanuj",
  age: 28,
  email: "dhanuj@example.com",
  location: "Coimbatore, India",
  isActive: true,
  profileImage: "https://example.com/images/dhanuj.jpg"
}];
  return (
    <div>
      <Childtwo onee={imagee} twoo={user} threee={agee} fourr={nam} />
    </div>
  )
}

export default Childone

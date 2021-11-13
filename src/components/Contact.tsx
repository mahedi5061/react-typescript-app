import React from "react";

interface IProps {
  name: string;
  email?: string;
  handleRemove:(email: string) => void;
}

const Contact = ({ name, email = "N/A",handleRemove }: IProps):JSX.Element =>{
  return (
    <div>
      <p><strong>My Name</strong> is {name}</p>
      <p><strong>My Email</strong>: {email}</p>
      <button onClick={()=>handleRemove(email)}>Remove</button>
    </div>
    
  );
};

//This typescript functional components another way FC means functional component..
// export const ContactDemo: React.FC<IProps> = ({ name, email = "N/A" }):JSX.Element => {
//   return (
//     <div>
//       <p>My Name is {name}</p>
//       <p>My Email: {email}</p>
//     </div>
//   );
// };

export default Contact;
function handleRemove(email: string): void {
  throw new Error("Function not implemented.");
}


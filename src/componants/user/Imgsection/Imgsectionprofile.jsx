import img from "../../../assets/user.png";

export default function Imgsectionprofile({ username }) {
  return (
    <div className="container text-center purple">
      <div style={{padding:"50px 10px 10px"}}>
      <img className="rounded-circle bg-light " src={img} alt="User Profile" />
      </div>
      <h3>{username}</h3>
      <p>Welcome to your profile!</p>
    
    </div>
  );
}

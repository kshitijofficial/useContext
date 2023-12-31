import "./UserCard.css"
const UserCard = ({ user }) => {
  return (
    <div className="user-card">
        <h3>User Card</h3>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        <p>Age: {user.age}</p>
  </div>
  );
};

export default UserCard;

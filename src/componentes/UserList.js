import UserCard from "./UserCard";

const UserList = ({user}) => {
    const{photo, firstName, lastName, birthdate, description, currentCompany }= user;
    const user1 = {photo,firstName,lastName,birthdate,description,currentCompany};
    console.log(user);
    return(
        <div>
           <UserCard user={user}/>
        </div>
    );

}
export default UserList;
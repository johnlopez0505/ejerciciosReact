import UserCard from "./UserCard";

const UserList = ({users}) => {
    //const{photo, firstName, lastName, birthdate, description, currentCompany }= users;
    console.log(users);
    return(
        <div>
           <UserCard user={users.forEach((user)=>user)}/>
        </div>
    );

}
export default UserList;
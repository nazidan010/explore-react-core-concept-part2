export default function Friend({friend}){
    const {name,username,phone,email}=friend;
    return(
        <div className="boxs">
            <h4>Name: {name} </h4>
            <p>User Name: {username}</p>
            <p>Phone Number: {phone}</p>
            <p>Email: {email} </p>
        </div>
    )
}
function User(props) {
    console.log(props.user.name);
    return ( <div  className="overlay">
            <div className="User">
            <button className="removeButton" onClick={props.onCloseUser}>
                    <img width={21} height={21} src="/img/remove.png" alt="Remove" />
            </button>
           
               

            
            <h2>User</h2>
            
                <span>Name:</span>
            <b>{props.user.name}</b>
                
                <span>Email:</span>
            <b>{props.user.email}</b>
                <span>Number:</span>
            <b>{props.user.phoneNum}</b>
                
               

               

                
        </div>
        </div>);
}
export default User;
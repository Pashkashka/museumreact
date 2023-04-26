function User(props) {
    return ( <div  className="overlay">
            <div className="User">
            <button className="removeButton" onClick={props.onCloseUser}>
                    <img width={21} height={21} src="/img/remove.png" alt="Remove" />
            </button>
           
               

            
            <h2>User</h2>
            
                <span>Name:</span>
                <b>Pavel</b>
                <span>Lastname:</span>
                <b>Ovsyannikov</b>
                <span>Email:</span>
                <b>pasha.ov2003@yandex.ru</b>
                <span>Number:</span>
                <b>89267338911</b>
                
               

               

                
        </div>
        </div>);
}
export default User;
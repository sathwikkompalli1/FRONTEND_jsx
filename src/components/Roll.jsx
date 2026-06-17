import "../index.css"

function Roll({user}){
    return (
        <>
        <div className="card">
        <h1> Student Name: {user.name}</h1>
        <h1> Student Dept: {user.dept}</h1>
         <h1> Student Blood Type: {user.bloodGroup}</h1>
        <h1> Address: {user.address}</h1>
        </div>
        </>
    );
}

export default Roll;
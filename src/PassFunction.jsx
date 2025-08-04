
function PassFunction({displayName, name}){
    return (
        <div>
            <button onClick={()=>displayName(name)}>Display Name</button>
        </div>
    )
}

export default PassFunction;
interface User {
    data: string,
    value:{value : number}
}
function Test(props: User) {
    return (
        <>

            {props.data && <p>{props.data}</p>}
            {props.value && <p>{props.value.value}</p>}
        </>
    )
}   
export default Test
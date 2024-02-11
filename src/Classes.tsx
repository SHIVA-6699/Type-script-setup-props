class User{
    bag:string
    pen:number  
    constructor(bag:string,pen:number){
        this.bag=bag;
        this.pen=pen;
    }
}
function Oops(){

    const obj=new User("Leather",3)
    return (
        <>
        {obj.bag && <p>{obj.bag}</p>}
        </>
    )
}
export default Oops
type User1={
    bag:string,
    pen:number,
    fun1(params:string):void
}
function User(this: User1, bag:string,pen:number):string{
    
    this.bag=bag;
    this.pen=pen;
    this.fun1=function (params:string) {
        console.log(params)
    }
    return "S"
}
function Function_Classe(){
    const obj = new (User as any)("Leather",4);
    return(
        <>
            {obj.bag && <p>{obj.pen}</p>}
        </>
    )
}



export default Function_Classe
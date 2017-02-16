export class RequestList{
    constructor(
    public user:string,
    public success:boolean,
    public result:ResultArray[]){}
}
export class ResultArray{
    constructor(
    public data:DataArray[],
    public id:string,
    public status:string,
    public type:string,
    public user:string){}
}
export class DataArray{
    constructor(
    public Memory:string,
    public cpuCore:string,
    public diskSize:string,
    public vmName:string){}
}
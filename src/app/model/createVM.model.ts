import {NameProps} from './NameProps.model';
export class createVMModel{
    constructor(
    public Name:string,
    public OS: string,
    public diskSize: string,
    public cpuCore:number,
    public Memory:number
    ){}
}
import {NameProps} from './NameProps.model';
export class createVMModel{
    constructor(
    public vmName:string,
    public OS: string,
    public diskSize: string,
    public cpuCore:number,
    public Memory:number,
    public type:string
    ){}
}
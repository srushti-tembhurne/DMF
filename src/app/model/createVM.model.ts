import {NameProps} from './NameProps.model';
export class createVMModel{
    constructor(public vmName:string,
    public  cluster: NameProps,
    public template: NameProps,
    public memory: string){}
}
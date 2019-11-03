import ICalculatorResult from "../interfaces/ICalculatorResult";

class OBResult implements ICalculatorResult{
    terminationNotice : number;
    terminationDate : Date;

    constructor(terminationNotice : number, terminationDate : Date){
        this.terminationNotice = terminationNotice;
        this.terminationDate = terminationDate;
    }
}

export default OBResult;
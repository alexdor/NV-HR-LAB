import ICalculatorInput from "../interfaces/ICalculatorInput";

class OBInput implements ICalculatorInput{
    employmentDate: Date;
    terminationDate: Date;
    extension: number;

    constructor(employmentDate: Date, terminationDate: Date, extension: number){
        this.employmentDate = employmentDate;
        this.terminationDate = terminationDate;
        this.extension = extension;
    }
}

export default OBInput;
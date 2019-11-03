import ICalculator from '../interfaces/ICalculator';
import OBResult from './OBResult';
import OBInput from './OBInput';

class OBCalculator implements ICalculator<OBInput, OBResult>{
    calculate(input: OBInput): OBResult {
        var monthsEmployed = (input.terminationDate.getFullYear() - input.employmentDate.getFullYear()) * 12 + (input.terminationDate.getMonth() - input.employmentDate.getMonth());
        let terminationNotice : number = 0;


        if(monthsEmployed < 6){
            terminationNotice = 1;
        } else if(monthsEmployed >= 6 && monthsEmployed < (12*2)+9){
            terminationNotice = 3;
        } else if(monthsEmployed >= (12*2)+9 && monthsEmployed < (12*5)+8){
            terminationNotice = 4;
        } else if(monthsEmployed >= (12*5)+8 && monthsEmployed < (12*8)+7){
            terminationNotice = 5;
        } else if(monthsEmployed >= (12*8)+7){
            terminationNotice = 6;
        }
        
        terminationNotice += input.extension;

        let tempDate = new Date(input.terminationDate);
        tempDate.setMonth(tempDate.getMonth() + terminationNotice);
        let terminationDate = new Date(tempDate.getFullYear(), tempDate.getMonth()+1, 0);

        return new OBResult(terminationNotice, terminationDate);
    }
    
}

export default new OBCalculator();

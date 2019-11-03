import ICalculatorInput from './ICalculatorInput';

interface ICalculator<ICalculatorInput, ICalculatorResult> {
    calculate(input:ICalculatorInput) : ICalculatorResult
}

export default ICalculator
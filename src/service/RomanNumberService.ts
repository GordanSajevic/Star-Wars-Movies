export interface IRomanNumberService {
    getRomanNumber(number: number): string;
}

const MEDIA_TYPE = "format=json"

const RomanNumberService = (): IRomanNumberService => {
    return {
        getRomanNumber(number: number){
            const numerals = [
                ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'],
            ];
        
            const digits = Math.round(number).toString().split('');
            let position = (digits.length - 1);
        
            return digits.reduce((roman, digit) => {
                if (digit !== '0') {
                    roman += numerals[position][parseInt(digit) - 1];
                }
            
                position -= 1;
            
                return roman;
            }, '');
        }
    }
};

export default RomanNumberService;
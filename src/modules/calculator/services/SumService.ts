import { SumDTO } from "../dto/SumDTO";

export class SumService {
  execute({ number1, number2, number3 }: SumDTO) {
    const result = number1 + number2 + number3;

    return result;
  }
}

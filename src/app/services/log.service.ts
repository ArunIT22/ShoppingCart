
export class LogService {

  LogMessage(name: string, status: string, today: Date) {
    console.log(`A Product has been added \nProduct Name:${name}, on :${today} and the availablity is ${status}`);
  }
}

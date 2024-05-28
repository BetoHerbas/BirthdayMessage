import { SmtpGreeting } from "./SmtpGreeting";
export class BirthdayService {
  constructor(employeesRepository) {
    this.employeesRepository = employeesRepository;
  }

  sendGreetings(ourDate, smtpUrl, smtpPort, transport) {
    let employees = this.employeesRepository.getEmployeesByBirthDate(ourDate);
    let greeating = new SmtpGreeting();
    employees.forEach((employee) => {
      greeating.sendGreetingToEmployee(employee, smtpUrl, smtpPort, transport);
    });
  }
}

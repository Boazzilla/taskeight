// Observer class
class Observer {
    notify(phoneNumber) {
      // Override this method in the derived classes
    }
  }
  
  // Telephone class
  class Telephone {
    constructor() {
      this.phoneNumbers = [];
      this.observers = [];
    }
  
    // Method to add a new phone number
    addPhoneNumber(phoneNumber) {
      this.phoneNumbers.push(phoneNumber);
    }
  
    // Method to remove a phone number
    removePhoneNumber(phoneNumber) {
      const index = this.phoneNumbers.indexOf(phoneNumber);
      if (index > -1) {
        this.phoneNumbers.splice(index, 1);
      }
    }
  
    // Method to dial a phone number
    dialPhoneNumber(phoneNumber) {
      if (this.phoneNumbers.includes(phoneNumber)) {
        // Notify all observers
        this.observers.forEach((observer) => observer.notify(phoneNumber));
      } else {
        console.log("Invalid phone number. Please add the phone number before dialing.");
      }
    }
  
    // Method to add an observer
    addObserver(observer) {
      this.observers.push(observer);
    }
  
    // Method to remove an observer
    removeObserver(observer) {
      const index = this.observers.indexOf(observer);
      if (index > -1) {
        this.observers.splice(index, 1);
      }
    }
  }
  
  // Observer class for printing the phone number
  class PrintPhoneNumberObserver extends Observer {
    notify(phoneNumber) {
      console.log(phoneNumber);
    }
  }
  
  // Observer class for printing "Now Dialing" message
  class PrintDialingObserver extends Observer {
    notify(phoneNumber) {
      console.log("Now Dialing ${phoneNumber}");
    }
  }
  
  // Example usage
  const telephone = new Telephone();
  
  const printPhoneNumberObserver = new PrintPhoneNumberObserver();
  const printDialingObserver = new PrintDialingObserver();
  
  console.log(telephone.addObserver(printPhoneNumberObserver));
  console.log(telephone.addObserver(printDialingObserver));
  
  console.log(telephone.addPhoneNumber("2347023232"));
  console.log(telephone.dialPhoneNumber("2347023232"));
  console.log(telephone.dialPhoneNumber("1234567890")); // Invalid phone number
  
  console.log(telephone.removeObserver(printDialingObserver));
  
  console.log(telephone.dialPhoneNumber("2347023232")); // "Now Dialing" message won't be printed
  
  console.log(telephone.removePhoneNumber("2347023232"));
  
  console.log(telephone.dialPhoneNumber("2347023232")); // Invalid phone number
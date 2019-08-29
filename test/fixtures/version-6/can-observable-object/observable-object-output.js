class Foo extends ObservableObject {
  static get props() {
    return {
      name: 'string',
      completed: {
        type: 'boolean',
        default: false
      }
    };
  }
}

class VM extends ObservableObject {
  static get props() {
    return {
      firstName: 'string',
      lastName: 'string',
      age: 'number',

      addAge (age) {
        this.age = age;
      },

      get fullName () {
        return `${firstName} ${lastName}`
      }
    };
  }
}
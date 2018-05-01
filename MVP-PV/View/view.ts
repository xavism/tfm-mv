import { prompt, list, checkbox, input, separator } from 'typed-prompts'
import { EventBus } from "../XCutting/EventBus";
 
interface Answers {
    todo: string;
    fullName:string;
}

export interface IView {
    WriteUser(user: string);
    WriteUsers(users: string[]);
    Main();
}

export class View implements IView{
    private readonly _bus: EventBus;

    constructor(private bus : EventBus) {
        this._bus = bus;
    }


    public WriteUser(user: string) {
        console.log('User Added: ' + user)
        this.Main();
    }

    public WriteUsers(users: string[]) {
        users.forEach(user => console.log(user));
        this.Main();
    }

    public Main() {
        this.Execute();
    }
    // Decision Tree
    private Execute() {
        prompt<Answers>([
          list('todo','What you want to do?', [
            'Add User',
            'Get Users',
            'Exit'
          ])
        ])
        .then((answers) => {
          switch(answers.todo){
            case 'Add User':
                prompt<Answers>([
                    input('fullName', 'Add your full name')
                ])
                .then((userInput)=> {
                    this._bus.emit('AddUser', userInput.fullName);
                    debugger;
                })
                break;
            case 'Get Users':
                this._bus.emit('GetUsers');
          }
        })
    }
}

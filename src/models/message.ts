class Message { // Vi har byggt en klass / modell 
    text: string;
    user: string;
 
    constructor(text: string, user: string) {
            this.text = text;
            this.user = user;
    }
 
    getSalary() : number {
        return 10000;
    }
}
 
function getAllMessages():Array<Message>{
    let result: Array<Message> = [
        new Message("Tjena moss", "Kalle"),
        new Message("Tjena moss2", "Kalle2"),
        new Message("Tjena moss3", "Kalle3")
    ]
 
    return result;
}
 
export{ // Exportera klasser och funktioner! --> ett object
    Message ,
    getAllMessages
}

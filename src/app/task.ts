export class Task {
    Id: string | '';
    Task: string | '';
    Description: string | '';
    TimeDone: Date;
    IsDone: Boolean | false;

    constructor(_Id: string = '', _Task: string = '', _Description: string = '', _TimeDone: Date = new Date(), _IsDone: Boolean = false) {
        this.Id = _Id;
        this.Task = _Task;
        this.Description = _Description;
        this.TimeDone = _TimeDone;
        this.IsDone = _IsDone;
    }

    public IsIdEmpty(): Boolean {
        return this.Id != null && this.Id !== '';
    }

    public ClearData() {
        this.Task = '';
        this.Description = '';
        this.IsDone = false;
    }
}

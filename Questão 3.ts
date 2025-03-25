class Task{
    public descri: string;
    public _stat: number //1 - pendente, 2- fazendo 3- Concluida

    constructor(public descri:string,public _stat:number){
        this.descri=descri;
        this._stat=_stat;
    }
     //descobri que o nome da propriedade e da função tem que ser diferente pra funciona isso que estupido.
     set stat(valor:number){
        if (valor > 0 && valor < 4){
            this._stat=valor
        }
     }
}

class TaskManager{
    tarefas: Task[] = [];
//cria um gestor que tem as listas de tarefas dentro
    addTask(tarefa:Task):void{
        this.tarefas.push(tarefa)
    }
  //metodo de le a lista dentr da classe
    listTasks(): void{
        return console.log(this.tarefas)
    }
}
const taskmng = new TaskManager();
taskmng.addTask(new Task("lava casa",1));
taskmng.addTask(new Task("come janta",2))
taskmng.listTasks();

//MEU DEUS DO CEU DEU CERTO E JA É 8 HORAS FUDEU MUITO

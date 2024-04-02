export class Tag{
    static readonly ANGULAR = new Tag('Angular', 'red');
    static readonly JAVACRIPT = new Tag('Javascript', 'yellow');
    static readonly NODE = new Tag('NodeJS', 'green');
    static readonly JAVA = new Tag('Java', 'orange');
    static readonly MYSQL = new Tag('MySQL', 'pink');
    static readonly MONGODB = new Tag('MongoDB', 'blue');
    

    private constructor(private readonly key:string, public readonly color:string){

    }

    toString(){
        return this.key;
    }
}
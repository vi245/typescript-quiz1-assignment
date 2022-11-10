
interface Todo{
    name:string;
    description:string;
    done:boolean;
}
var todos: Todo[];
function add(name: string, description: string):number 
{
    return todos.push({name: name,description: description,done: false});
}
function remove(index: number):Todo[] 
{
    return todos.splice(index, 1);
}
function list():void 
{
    todos.forEach(function(todo, index)
     {console.log(index + " -" + todo.name);
    }
    );
}
function update(index: number, name: string, description: string):Todo 
{
    todos[index].name = name;
    todos[index].description = description;
    return todos[index];
}
#### Typescript quiz1 assignment

#### What are the basic data types in TypeScript?

There are followinf data types in typescript:

- number
- string
- boolean
- undefined
- null
  These all are primitive data types or built-in data types

```TypeScript
   let a: number=5;
   let str: string="hello";
   let isBoolean: boolean=true;
   var b: undefined;
```

#### What is Generic data type.

Generic is used to create a component which can work with a variety of data type rather than a single one.
It allows a way to create reusable components.
TypeScript uses generics with the type variable <T> that denotes types.

```TypeScript
 function getDetails<T>(arg: T): T {
   return arg;
}
let output1 = getDetails<string>("JOhn");
let output2 = getDetails<number>( 25 );
```

#### What is type inferring in TS.

The TypeScript compiler infers the type information when there is no explicit information available in the form of type annotations.

##### TypeScript compiler infers the type information when:

- Variables and members are initialized
- Setting default values for parameters
- Determined function return types

There are two ways to define variable in typescript:

- Explicit
- Implicit

```TypeScript
// explicit - compliler knows the type of varible before execution of the code
 let a: number=10;
 // implicit - compliler infers the type of variable as a number
let a=10;
let b=a;
console.log(typeof b);//number
b="hello"//error
```

#### What are the possible ways to define typing for functions.

```TypeScript
  function add(a,b){  //compiler implicitly recognizes the return type based on arguments type
    return a+b;
  }
  add(4,5);
  //explicit inferring

  function add(a: number, b: number):number
  {
    return a+b;
  }
  add(4,"hello");//error
  add(4,5);

  interface Student{
    name:string;
    rollno:number;
  }
  function getDetails(name: string,rollno: number,address?: string):Student{ //optional parameter
        return {name:name,rollno:rollno};
  }
  getDetails("John",12);

```

#### How to define Generic type for Classes.

```TypeScript
  class Student<T,U>{
       private Id:T;
       private Name:U;
       setValue(id:T,Name:U):void{
        this.Id=id;
        this.Name=Name;
       }
       display():void{
        console.log(`${this.Name} = ${this.Id}`)
       }
  }
  let st= new Student<number,string>();
  st.setValue(100,"John");
  st.display();
  let st= new Student<string,string>();
  st.setValue("100","John");
  st.display();

```

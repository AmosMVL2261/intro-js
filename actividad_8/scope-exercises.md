# JS Scoping exercises

1. What’s the result of executing this code and why.
  ```js
  function test() {
     console.log(a);
     console.log(foo());
     
     var a = 1;
     function foo() {
        return 2;
     }
  }
  
  test();
  ```

> function not definied, 2, una funcion debe ser declarada antes de usarse o lanzara error
> undefined, 2


2. What is result?
  ```js
  var a = 1; 
  
  function someFunction(number) {
    function otherFunction(input) {
      return a;
    }
    
    a = 5;
    
    return otherFunction;
  }
  
  var firstResult = someFunction(9);
  var result = firstResult(2);
  ```
> 5, por que a no esta declarada con let, asi que no importa que mandes o en que momento, por la pocision de su asignacion con 5 que esta despues de recibir el numero, el resultado devuelto siempre sera 5  y no el numero enviado
> 5


3. What is the result of the following code? Explain your answer.
  ```js
  var a = 1
  function foo() {
    var a = 2;

    function bar() {
      console.log( a );
    }

    return bar;
  }
  var baz = foo();
  baz();
  ``` 
> 2, ya que aunque la funcion es llamada sin parentesis (return bar)o es asignada a una variable (baz), la asignacion de a=2 es respetada al ser declarada la variable con var y no con let
> 2


4. What will you see in the console for the following example?
  ```js
  var a = 1; 
  function b() { 
      a = 10; 
      return; 
      function a() {} 
  } 
  b(); 
  ```

> nada, porque la funcion no hace nada mas que una asignación que no tiene un proposito y un return vacio, asi que al ejecutarla no va a regresar nada. Tambien como tiene un return antes de la funcion a() no la ejecuta
> undefinied

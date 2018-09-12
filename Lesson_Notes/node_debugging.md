#Node.js

###Debugging in Node

If we have a file `debugging.js` with the following content:

```
let person = {
    name: 'Josceline',
}

person.age = 30;

person.name = 'Bob';

console.log(person);
```
#####Starting node debug:
we can debug the from the terminal using the `node inspect` command, like this:

```
node inspect playground/debugging.js
```
#####Next Command:
We when run this command no code has actually been run yet, so we can step through the code to find the information we need. We can do this using the `n` or _next_ commmand which will more us on to the next statement ie line 1. NB: The `>` shows the line we are focused on but this line will not yet have been run.

```
debug> n
break in playground/debugging.js:5
  3 }
  4
> 5 person.age = 30;
  6
  7 person.name = 'Bob';
```
So in the example we are are focused on line 5 but person.age has not yet been set to 30.

#####Continue Command:
Once we are done step through the file we can run the rest of the code using the `c` or _continue_ command.

```
debug> c
```
#####repl (read evaluate print loop):

Inside node's debug there is a tool called repl. It is simailar to the chrome console in that it allows you to look at and manipulate varibables, functions etc. To get to this tool we type `repl` into node's debug. NB: The state of our varibales etc will depend on where we were in the code when we ran `repl`.

```
debug> n
break in playground/debugging.js:7
  5 person.age = 30;
  6
> 7 person.name = 'Bob';
  8
  9 console.log(person);
debug> repl
Press Ctrl + C to leave debug repl
> person
{ name: 'Josceline', age: 30 }
> person.age
30
> person.age + 10
40
>
```
In this example `person.age` has been set to 30 but `person.name = 'Bob'` has not yet been run, so when you check the person varibable in `repl` you get  `{ name: 'Josceline', age: 30 }` not `{ name: 'Bob', age: 30 }`.

#####debugger:

In a more conplex file it is not always convienent to step through the file using `n`. In this case we can add the `debugger;` statement to the point in the file where we would like to inspect. Then if we run `c` in node's debug it will run everything up to the `debugger` statement.

```
let person = {
    name: 'Josceline',
}

person.age = 30;

debugger;

person.name = 'Bob';

console.log(person);
```
In this example everything up to and including `person.age = 30` will be run.

###Debugging in Chrome

As well as debugging in the terminal we can also debug in Chrome. To do this we run:

```
node --inspect-brk playground/debugging.js
```

Then we go to `chrome://inspect/` in Chrome. Here you should see the file you are inspecting listed. Click the link [Open dedicated DevTools for Node]. This should open a console window. Here you can use the console as you would use `repl` and step through the code using the pause/play button on the GUI.

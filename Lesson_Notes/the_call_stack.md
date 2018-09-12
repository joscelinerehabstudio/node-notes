#Node.js

###Async Node 

#####Understanding the Call Stack:
For this simple example

```
const nodeWrapper = () => {
	const add = (a, b) => {
		const total = a + b
		return total;
	}
	const result = add(1, 2);
	
	console.log(result);
}
``` 
the call stack would be as follows:

1. nodeWrapper()
2. define const add as add function 
3. define const result
4. call add function 
5. define const total 
6. return const total 
7. console.log(result) 

What if the app also includes calls to the node API? For example by using a setTimout function.

```
const nodeWrapper = () => {
	console.log('Starting app');
	
	setTimeout(() => {
	    console.log('zero second callback');
	}, 0);
	
	console.log('FIN');
}
```
Now the call stack will look like this:

1. nodeWrapper()
2. console.log('starting app')
3. send `setTimeout` request to the  Node API. When it returns send it to the back of the callback queue ie behind nodeWrapper();
4. console.log('FIN')
5. nodeWrapper is now finished so the call returned from the request to the node api can be run and console.log('zero second callback') is called


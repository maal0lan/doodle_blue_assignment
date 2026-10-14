## HOW JS WORKS

 - Event Stack - Synchronous Statement(var) ---> Micro Statement(promises, resolves,async) ---> Macro Statements(set time out() , set time interval)

EXAMPLE CODE : 

```javascript
console.log("1.sync started")
 
 set Timeout(()=> {
	 console.log ("4. macrostatment");
	 },0);

Promise .resolve ().then(()=>{
	console.log("3.sync end")
	});

console.log("1.sync end")
```
 
 - Line by line tha execute agum like stack shi
 
---

## FUNCTIONs
- `arrow function ()=> {funtion_shit}`  
- obj pota return statemet podanum
- `reduce()` boils a list down to one value ---> adds all shit bro into one value

## WHICH METHORDS RETURN NEW ARRAY
- map
- filter
- slice
- concat
- reduce
- find
- join
- some
## WHICH METHODS CHANGES ORIGINAL ARRAY
- push
- pop
- shift
- unshift
- splice
- sort
- reverse
---
# BUILD A PIPELINE - *CHAINING*

```java
const wanted_list =[{name:"jeffery_epstin" ,crime:27,mark:80},{name:"tun_tun_tun_sahoor" ,crime:-12,mark:90},{name:"Pablo_Escobar" ,crime:99},{name:"Tony_Stark",crime:0},{name:"Gomathy_shankar" ,crime:0},{name:"Devandra" ,crime:2}]
const pure_soul =  wanted_list.filter((c1)=>c1.crime ==0).map(c1=>c1.name)
const nala_pasanga = wanted_list.filter((c1)=>c1.crime <2).map(c1=>c1.name)
const nolla_pasanga = wanted_list.filter((c1)=>c1.crime >1).map(c1=>c1.name)


console.log("pure_soul are",pure_soul)
console.log("nala_pasanga are ",nala_pasanga)
console.log("nolla_pasanga are",nolla_pasanga)
```

## PLAYING WITH OBJECTS
- dot
- bracket 
- update
- add
- delete
- is
- method

## OBJECT METHODS AND KEY VALUES AND PAIR

### HOW TO USE KEYS AND VALUE

- `object.keys` returns key's value
- `object.values` return the value's of the key
- `object.entries` displays in like list format of all the key and value pairs

```javascript
 const marks = { maths:90 ,physics:70,chemistry: 99}
 summa.values(marks).reduce((t,m)=> t+m ,0);
```

```output
> 247
```

### OBJECT METHODS - COPY, LOCK AND CONVERT

- assign - `obj.assign({} , user , { age : 21 } )`
- freeze - `obj.freeze( user ) ; user.age = 30 ;`
- fromEntries - `obj.fromEntries([ [ "a" , 1 ] ])`
- stringify - `JSON.stringify( user )` used for changing tokens to string
- parse - `JSON.parse('{"x:1}' )` ch

### INSANE OPERATORs

- ternary `condition ? true : false`
- short circuit `condition && condition && .... && true_value`
- optional chaining - suppose in object ku value illa na error kamikadhu but it will show smthing `user . address ?. "city"`
- nullish coalescing - `city ?? "unknown"`

### shallow copy 
const b =a
### deep copy
const b =(...a)

### ASYNC / AWAIT

```
async function loadUser(){
	try{
		const res = await fetch(
		"https://"
		);
		const users = await res.json();
		console.log(users[0].name);
	}
	catch(error){
	console.log("better luck next time : ",error);
	}
}
loadUsers();
```

- async
- await
- try/catch
- res.json()


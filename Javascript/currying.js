// sum(1)(2)(3)(4)(5)();

// it is called function currying means a function that returns another function untill it reaches the last function 

function sum(a){
    return function(b){
        if(b){
            return sum(a+b);
        }
        return a;
    }
}

console.log(sum(1)(2)(3)(4)(5)()); // 15
console.log(sum(10)(20)(30)()); // 60
console.log(sum(5)(10)(15)(20)()); // 50
 
// time complexity o(n)
// space complexity o(n) due to call stack. how it is o(n) ?
// because each function call is pushed to the call stack and there are n function calls




/*

// Searchable User List. Maintain the userlist in json file
// In UI, add Input box. Whenever keystroke happens, just search in the userList
// eg user list: [{investor: 'anandha Valli', age: 28}, {investor: 'anu', age: 28} ]

function App() {
  const useList = [
    { invester: 'anandha Valli', age: 28 },
    { invester: 'anu', age: 28 },
  ];
  const [value, setValue] = useState('');
  const [list, setList] = useState([]);

  const handleSearch = (val) => {
    const newList = useList.filter((item) => item.invester.includes(val));
    console.log(newList);
    setList(newList);
  };

  return (
    <div>
      <h1>Hello</h1>
      <input type="text" onChange={(e) => handleSearch(e.target.value)} />
      <ul>
        <li>{list.map((item) => item.invester)}</li>
      </ul>
    </div>
  );
}

export default App;
*/
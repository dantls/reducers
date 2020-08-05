const usuarios = [
  {
    id:'001',
    nome: 'Danilo',
    idade: '25',
    sexo: 'M',
    uf:'SP',
  },
  {
    id:'002',
    nome: 'Franciele',
    idade: '28',
    sexo: 'F',
    uf:'MS',
  },
  {
    id:'003',
    nome: 'Victor',
    idade: '22',
    sexo: 'M',
    uf:'RJ',
  },
  {
    id:'004',
    nome: 'Luiz',
    idade: '50',
    sexo: 'M',
    uf:'RJ',
  },
]

const normalizedUsers = usuarios.reduce((acc , item)=>{
  acc[item.id] = item;
  return acc;
}, {});

const usersReduce = usuarios.reduce((acc , user)=>{
  if(!acc[user.sexo]){
    acc[user.sexo] = [];
  }
  acc[user.sexo].push(user) ;
  return acc;
},{});

function groupByKey(arr, key) {
  return arr.reduce((acc,item)=>{
    if(!acc[item[key]]){
      acc[item[key]] = [];
    }
    acc[item[key]].push(item);
    return acc;
  },{})
}

console.log(usersReduce);
console.log(groupByKey(usuarios,'sexo'));


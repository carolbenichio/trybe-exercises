const optimizeTime = (array) => {
  const [current, ...rest] = array;
  if (!rest) return [];
  const sum = rest.map((film) => ({...film, sumFilm: current.time + film.time}));
  const [select = {pos: 'f'}] = sum.filter(({ sumFilm }) => sumFilm <= 3).sort((a, b) => b.sumFilm - a.sumFilm);
  
  return rest.filter(({ pos }) => pos !== select.pos);
}

function acharMinimoDeDias(duracoes) {
    let list = [...duracoes].sort((a, b) => a - b).map((film, index) => ({ time: film, pos: index}));
    let days = 0;
  
    while(list.length > 0) {
        list = optimizeTime(list);
        days += 1;
    }

    return days;
}

console.log(acharMinimoDeDias([1.01, 1.991, 1.32, 1.4, 1.37, 2.89, 2.05, 1.11, 2.23, 2.6, 1.33, 1.42 ,1.31 ,1.89 ,2.33 ,1.94 ,1.47]));
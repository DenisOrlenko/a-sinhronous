import '../css/common.css';

/*
 - Создание
 - Unix-время
 - Методы
 - Разница времени
 - Date.now()
*/
//
// const date1 = Date.now();
// console.log('date1', date1);

// setTimeout(() => {
//   const date2 = Date.now();
//   console.log('setTimeout  date2', date2)

//   console.log(date2 - date1);
// }, 3000);
//
//
//
//

// Задача
// 1
// const timer = {
//   start() {
//     const startTime = Date.now();

//     setInterval(() => {
//       const currentTime = Date.now()
//       console.log(startTime - currentTime)
//     }, 5000)
//   },
// };
// timer.start()
// 2
// Добавляю функцию getTimeComponents() => для подсчета часов, мин, сек
// const timer = {
//   start() {
//     const startTime = Date.now();

//     setInterval(() => {
//       const currentTime = Date.now();
//       const deltaTime = currentTime - startTime;
//       const timeComponents = getTimeComponents(deltaTime)
//       console.log('setInterval  timeComponents', timeComponents)
//     }, 3000);
//   },
// };
// timer.start();

// function getTimeComponents(time) {
//   const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
//   const secs = Math.floor((time % (1000 * 60)) / 1000);

//   return { hours, mins, secs };
// }
//
// 3
// Добавляю ф-ю addLeadingZero(value), которая форматирует:
// Принимает число, приводит к строке и добавляет в начало 0 если число меньше 2-х знаков
//
// function addLeadingZero(value) {
//   return String(value).padStart(2, '0');
// }

// const timer = {
//   start() {
//     const startTime = Date.now();

//     setInterval(() => {
//       const currentTime = Date.now();
//       const deltaTime = currentTime - startTime;
//       const timeComponents = convertMs(deltaTime)
//       console.log('setInterval  timeComponents', timeComponents)
//     }, 3000);
//   },
// };
// timer.start();

// function convertMs(ms) {
//   // Number of milliseconds per unit of time
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   // Remaining days
//   const days = addLeadingZero(Math.floor(ms / day));
//   // Remaining hours
//   const hours = addLeadingZero(Math.floor((ms % day) / hour));
//   // Remaining minutes
//   const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
//   // Remaining seconds
//   const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

//   return { days, hours, minutes, seconds };
// }
// или
// function getTimeComponents(time) {
//   const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
//   const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//   const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

//   return { hours, mins, secs };
// }
//
// 4
// Декструктуризирую обьект {days, hours, mins, secs} и вывожу в консоль интерполируя ${}
// const timer = {
//     start() {
//       // по возрастанию - startTime
//       // const startTime = Date.now();
//       // обратный отсчет - startTime
//       const startTime =  new Date (2023, 3, 4, 15, 0, 0, 0)

//       setInterval(() => {
//         const currentTime = Date.now();
//         // по возрастанию - deltaTime
//         // const deltaTime = currentTime - startTime;
//         // обратный отсчет - deltaTime
//         const deltaTime = startTime - currentTime ;
//         const timeComponents = convertMs(deltaTime)
//         // console.log(timeComponents)
//         const { days, hours, minutes, seconds } = convertMs(deltaTime)
//         console.log(`${days}::${hours}:${minutes}:${seconds}`)
//       }, 1000);
//     },
//   };
//   timer.start();

// function convertMs(ms) {
//   // Number of milliseconds per unit of time
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   // Remaining days
//   const days = addLeadingZero(Math.floor(ms / day));
//   // Remaining hours
//   const hours = addLeadingZero(Math.floor((ms % day) / hour));
//   // Remaining minutes
//   const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
//   // Remaining seconds
//   const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

//   return { days, hours, minutes, seconds };
// }

// function addLeadingZero(value) {
//   return String(value).padStart(2, '0');
// }
//
//
// 5
// Вешаю слушатель события на startBtn и при клике на кнопку вызываю timer.start
// const refs = {
//   startBtn: document.querySelector('button[data-action-start]'),
//   stopBtn: document.querySelector('button[data-action-stop]'),
//   clockface: document.querySelector('.js-clockface'),
// };

// refs.startBtn.addEventListener('click', () => {
//   timer.start()
// })

// // Вешаю слушатель события на stopBtn и при клике на кнопку вызываю timer.stop
// refs.stopBtn.addEventListener('click', () => {
//   timer.stop()
// })

// const timer = {
//   // Добавляю новое св-во для обьекта intervalId, для распознавания
//   intervalId: null,
//   start() {
//     // по возрастанию - startTime
//     // const startTime = Date.now();
//     // обратный отсчет - startTime
//     const startTime =  new Date (2023, 3, 4, 15, 0, 0, 0)

//     this.intervalId = setInterval(() => {
//       const currentTime = Date.now();
//       // по возрастанию - deltaTime
//       // const deltaTime = currentTime - startTime;
//       // обратный отсчет - deltaTime
//       const deltaTime = startTime - currentTime ;
//       const timeComponents = convertMs(deltaTime)
//       // console.log(timeComponents)
//       const { days, hours, minutes, seconds } = convertMs(deltaTime)
//       console.log(`${days}::${hours}:${minutes}:${seconds}`)
//     }, 1000);
//   },
//   stop() {
//     clearInterval(this.intervalId)
//   }
// };

// function convertMs(ms) {
// // Number of milliseconds per unit of time
// const second = 1000;
// const minute = second * 60;
// const hour = minute * 60;
// const day = hour * 24;

// // Remaining days
// const days = addLeadingZero(Math.floor(ms / day));
// // Remaining hours
// const hours = addLeadingZero(Math.floor((ms % day) / hour));
// // Remaining minutes
// const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
// // Remaining seconds
// const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

// return { days, hours, minutes, seconds };
// }

// function addLeadingZero(value) {
//   return String(value).padStart(2, '0');
// }
//
//
// // 6
// // устраняю ошибку, т.к. если нажимать несколько раз на кнопку,
// // то на каждое событие "клик" - будет вызвана отложенная ф-я с интрервалом и таких вызовов будет - по кол-ву кликов =
// // их невозможно остановить т.к. кнопка "стоп" ловит только последнее событие
// //
// // добавляю новое св-во в обьект isActive, котрое будет контролировать вызов отложенной ф-ии
// const refs = {
//   startBtn: document.querySelector('button[data-action-start]'),
//   stopBtn: document.querySelector('button[data-action-stop]'),
//   clockface: document.querySelector('.js-clockface'),
// };

// refs.startBtn.addEventListener('click', () => {
//   timer.start();
// });

// // Вешаю слушатель события на stopBtn и при клике на кнопку вызываю timer.stop
// refs.stopBtn.addEventListener('click', () => {
//   timer.stop();
// });

// const timer = {
//   // Добавляю новое св-во для обьекта intervalId, для распознавания id отложенного обработчика
//   intervalId: null,
//   // Добавляю новое св-во для обьекта isActive, для того, чтобы если обработчик запущен
//   // (т.е. кнопка старт нажата и при повторном клике по кнопке старта - не происходил повторный запуск отложенной ф-ии)
//   isActive: false,
//   start() {
//     // если кнопка старт уже нажата, значит обрываю ф-ю - т.е. false
//     if (this.isActive) {
//       return;
//     }
//     // если кнопка старт не нажата - true, значит продолжаю выполнять кода ниже
//     this.isActive = true;
//     // по возрастанию - startTime
//     // const startTime = Date.now();
//     // обратный отсчет - startTime
//     const startTime = new Date(2023, 3, 4, 15, 0, 0, 0);

//     this.intervalId = setInterval(() => {
//       const currentTime = Date.now();
//       // по возрастанию - deltaTime
//       // const deltaTime = currentTime - startTime;
//       // обратный отсчет - deltaTime
//       const deltaTime = startTime - currentTime;
//       const timeComponents = convertMs(deltaTime);
//       // console.log(timeComponents)
//       const { days, hours, minutes, seconds } = convertMs(deltaTime);
//       console.log(`${days}::${hours}:${minutes}:${seconds}`);
//     }, 1000);
//   },
//   // при нажатии на кнопку стоп -
//   stop() {
//     // отложенная ф-я прекращается вызываться (очищается)
//     clearInterval(this.intervalId);
//   },
// };

// function convertMs(ms) {
//   // Number of milliseconds per unit of time
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   // Remaining days
//   const days = addLeadingZero(Math.floor(ms / day));
//   // Remaining hours
//   const hours = addLeadingZero(Math.floor((ms % day) / hour));
//   // Remaining minutes
//   const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
//   // Remaining seconds
//   const seconds = addLeadingZero(
//     Math.floor((((ms % day) % hour) % minute) / second)
//   );

//   return { days, hours, minutes, seconds };
// }

// function addLeadingZero(value) {
//   return String(value).padStart(2, '0');
// }
//
//
// 7
// // отрисовую интерфейс - т.е. вывожу на польз. интерфейс рез-т отложенной ф-ии с помощью ф-ии updateClockface
// // подставляю значение времени в параметр
// function updateClockface({ days, hours, minutes, seconds }) {
//   refs.clockface.textContent = `${days}::${hours}:${minutes}:${seconds}`;
// }

// const refs = {
//   startBtn: document.querySelector('button[data-action-start]'),
//   stopBtn: document.querySelector('button[data-action-stop]'),
//   clockface: document.querySelector('.js-clockface'),
// };

// refs.startBtn.addEventListener('click', () => {
//   timer.start();
// });

// // Вешаю слушатель события на stopBtn и при клике на кнопку вызываю timer.stop
// refs.stopBtn.addEventListener('click', () => {
//   timer.stop();
// });

// // устраняю ошибку, т.к. если нажимать несколько раз на кнопку,
// // то на каждое событие "клик" - будет вызвана отложенная ф-я с интрервалом и таких вызовов будет - по кол-ву кликов =
// // их невозможно остановить т.к. кнопка "стоп" ловит только последнее событие
// //
// // добавляю новое св-во в обьект isActive, котрое будет контролировать вызов отложенной ф-ии
// const timer = {
//   // Добавляю новое св-во для обьекта intervalId, для распознавания id отложенного обработчика
//   intervalId: null,
//   // Добавляю новое св-во для обьекта isActive, для того, чтобы если обработчик запущен
//   // (т.е. кнопка старт нажата и при повторном клике по кнопке старта - не происходил повторный запуск отложенной ф-ии)
//   isActive: false,
//   start() {
//     // если кнопка старт уже нажата, значит обрываю ф-ю - т.е. false
//     if (this.isActive) {
//       return;
//     }
//     // если кнопка старт не нажата - true, значит продолжаю выполнять кода ниже
//     this.isActive = true;
//     // по возрастанию - startTime
//     // const startTime = Date.now();
//     // обратный отсчет - startTime
//     const startTime = new Date(2023, 3, 4, 15, 0, 0, 0);

//     this.intervalId = setInterval(() => {
//       const currentTime = Date.now();
//       // по возрастанию - deltaTime
//       // const deltaTime = currentTime - startTime;
//       // обратный отсчет - deltaTime
//       const deltaTime = startTime - currentTime;
//       const timeComponents = convertMs(deltaTime);
//       // console.log(timeComponents)
//       // деструктуризация
//       // const { days, hours, minutes, seconds } = convertMs(deltaTime);
//       // console.log(`${days}::${hours}:${minutes}:${seconds}`);

//       // updateClockface({ days, hours, minutes, seconds });
//       updateClockface(timeComponents);

//     }, 1000);
//   },
//   // при нажатии на кнопку стоп -
//   stop() {
//     // отложенная ф-я прекращается вызываться (очищается)
//     clearInterval(this.intervalId);
//   },
// };

// function convertMs(ms) {
//   // Number of milliseconds per unit of time
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   // Remaining days
//   const days = addLeadingZero(Math.floor(ms / day));
//   // Remaining hours
//   const hours = addLeadingZero(Math.floor((ms % day) / hour));
//   // Remaining minutes
//   const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
//   // Remaining seconds
//   const seconds = addLeadingZero(
//     Math.floor((((ms % day) % hour) % minute) / second)
//   );

//   return { days, hours, minutes, seconds };
// }

// function addLeadingZero(value) {
//   return String(value).padStart(2, '0');
// }
//
//
// 8
const refs = {
  startBtn: document.querySelector('button[data-action-start]'),
  stopBtn: document.querySelector('button[data-action-stop]'),
  clockface: document.querySelector('.js-clockface'),
};

// преобразовую обьект timer в класс = экземпляр класса
// ОБЬЯВЛЕНИЕ КЛАССА
class Timer {
  // constructor() - для инициализации данных класса в вызванном экземпляре класса
  constructor({ onTick }) {
    this.intervalId = null;
    this.isActive = false;
    this.onTick = onTick;

    // вызов метода
    this.init()
  }

  // При первой загрузке - будет отображаться интерфейс с 00:00:00
  init() {
    const initTime = this.convertMs(0);
    this.onTick(initTime);
  }

  start() {
    if (this.isActive) {
      return;
    }
    this.isActive = true;

    const startTime = new Date(2023, 3, 4, 15, 0, 0, 0);
    this.intervalId = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = startTime - currentTime;
      const timeComponents = this.convertMs(deltaTime);
      // Вместо прямого вызова ф-ии updateClockface(timeComponents) - передаю через this = сохранение на интерфейсе данных при нажатии стоп
      this.onTick(timeComponents);
    }, 1000);
  }
  stop() {
    // отложенная ф-я прекращается вызываться (очищается)
    clearInterval(this.intervalId);
    this.isActive = false;
    // обнуление времени при нажатии на стоп
    const timeReset = this.convertMs(0);
    // сохранение на интерфейсе данных при нажатии стоп
    this.onTick(timeReset);
  }

  // из ф-ии делаю метод класса
  convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    // this. добавляю
    const days = this.addLeadingZero(Math.floor(ms / day));
    // Remaining hours
    const hours = this.addLeadingZero(Math.floor((ms % day) / hour));
    // Remaining minutes
    const minutes = this.addLeadingZero(Math.floor(((ms % day) % hour) / minute));
    // Remaining seconds
    const seconds = this.addLeadingZero(
      Math.floor((((ms % day) % hour) % minute) / second)
    );

    return { days, hours, minutes, seconds };
  }

  addLeadingZero(value) {
    return String(value).padStart(2, '0');
  }
}

// ВЫЗОВ КЛАССА
// Создаю экземпляр класса new Timer(), который вызывает класс Timer()
//Передаю через параметры экземпляра (обьект настроек {onTick: updateClockface}) ф-ю на рисование интерфейса (сам КЛАСС не будет иметь в себе ее)
// создаю св-во onTick - значением передаю ссылку на ф-ю
const timer = new Timer({
  onTick: updateClockface,
});

// вызов метода обьекта через ф-ю
refs.startBtn.addEventListener('click', () => {
  timer.start();
});
// вызов метода обьекта через ф-ю () => { }
refs.stopBtn.addEventListener('click', () => {
  timer.stop();
});

// вызов метода обьекта ссылкой на ф-ю (КОЛБЕК) -
// метод timer.start при использовании метода addEventListener = будет ссылаться на обьект слушателя(startBtn),
// поэтому для привязки обьекта, метод которого мы хотим вызвать - дополнительно используем метод
// refs.startBtn.addEventListener('click', timer.start.bind(timer));
// refs.stopBtn.addEventListener('click', timer.stop.bind(timer));
//
// отрисовую интерфейс - т.е. вывожу на польз. интерфейс рез-т отложенной ф-ии с помощью ф-ии updateClockface
// подставляю значение времени в параметр
function updateClockface({ days, hours, minutes, seconds }) {
  refs.clockface.textContent = `${days}::${hours}:${minutes}:${seconds}`;
}
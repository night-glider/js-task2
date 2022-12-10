//Создаём Vue приложение
const app = Vue.createApp({
  data() {
    return {
      //Определяем все необходимые переменные
      profession:"Программист",
      city:"Липецк",
      photo_url:"https://i.pinimg.com/736x/22/71/48/22714827862d17e1a1a78bd344bfc5fc.jpg",
      fio:"Жидков Иван Александрович",
      phone:"9205108779",
      email:"test@gmail.com",
      birthday:"28.08.2001",
      education:"Среднее",
      school:"Очень хорошее",
      faculty:"Невероятный",
      specialization:"Хороший мальчик",
      graduation:"2023",
      salary:50000,
      skills:"Очень много. Список огромный",
      about:"Невероятный красавчик",
    }
  },

  computed: {
    phoneIsValid() {
      var re = /^\d{6,10}$/
      return re.test(this.phone)
    },
  }
})

//Завершаем инициализацию приложения
const vm = app.mount('#app')
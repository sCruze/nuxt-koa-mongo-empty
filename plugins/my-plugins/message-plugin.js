// Экспортируем модуль с функцией для того чтобы можно было его использовать в других местах приложения
// Функция принимает 2 аргумента, text - текст, который будет отображен в сообщекнии
// И type - тип сообщения, всего 4 типа
export default function message (text = 'Сообщение', type = 'message') {
  // Создаем новый div и записываем в переменную elem
  const elem = document.createElement('div')
  // Так же создаем 2 атрибута <p> и помещаем в переменные ниже
  const icon = document.createElement('p')
  const forTextMessage = document.createElement('p')

  // В записанный div, помещаем класс my-plugin-message
  elem.classList.add('my-plugin-message')
  // В переменную textMessage в ее контент помещаем аргумент функции text
  forTextMessage.textContent = text
  // В elem добовляем дочерний элемент переменную forTextMessage
  elem.appendChild(forTextMessage)

  // Функция в которой прописана логика скрытия сообщения
  function hideMessage () {
    // Запуск функции задержки на 2с
    setTimeout(() => {
      // Через 2с, из elem удаляем класс message-active
      elem.classList.remove('message-active')
      // Запускается новая функция задержки на 1с
      setTimeout(() => {
        // Из самого главного элемента страницы, удаляется компонент elem
        document.body.removeChild(elem)
        // Создаем переменную message и записываем в нее все блоки с классом .my-plugin-message
        const messages = document.querySelectorAll('.my-plugin-message')

        // Перебираем массив messages с найдеными блоками
        // item - это каждый элемент
        messages.forEach((message) => {
          // Если переменная message не пустая, тогда выполняется следующая логика
          if (messages.length !== 0) {
            // Переменная в которыую записываем преобразованное в число свойство элемента marginTop
            // const valueMargin = Number(item.style.marginTop.slice(0, -3)) - 5
            // Записываем в свойство marginTop у элемента item, новое значение из переменной
            message.style.marginTop = `${Number(message.style.marginTop.slice(0, -3)) - 5}rem`
          }
        })
        clearTimeout()
      }, 100)
    }, 2000)
    clearTimeout()
  }

  // Здесь прописан метод switch в котором определяется логика в зависимости от того, какой type сообщения пришел в
  // аргумент функции
  switch (type) {
    // Тип сообщений для положительного результата
    case 'success':
      // В главный элемент DOM дерева, добовляется новый элемент с сообщением с именем elem
      document.body.appendChild(elem)
      // elem добовляется новый класс message-success, в последующих добовляются аналогичные классы соотвествующие типу
      elem.classList.add('message-success')
      // Функция для задержки на 10 милисекунд
      setTimeout(() => {
        // elem добовляем новый класс message-active
        elem.classList.add('message-active')
        // В контент переменной, добовляем спецсимвол
        icon.innerHTML = '&#10004;'
        // И также icon, добовляем в родительский элемент elem
        elem.appendChild(icon)
        // Вызываем функцию для скрытия и удаления элементов сообщения из DOM дерева
        hideMessage()
        clearTimeout()
        return elem
      }, 10)
      // eslint-disable-next-line no-unreachable
      break

    // Тип сообщения для ошибок
    case 'error':
      document.body.appendChild(elem)
      elem.classList.add('message-error')
      setTimeout(() => {
        elem.classList.add('message-active')
        icon.innerHTML = 'x'
        elem.appendChild(icon)
        hideMessage()
        clearTimeout()
        return elem
      }, 10)
      // eslint-disable-next-line no-unreachable
      break

    // Тип собщений, если есть какое либо предупреждение
    case 'warning':
      document.body.appendChild(elem)
      elem.classList.add('message-warning')
      setTimeout(() => {
        elem.classList.add('message-active')
        icon.textContent = '!'
        elem.appendChild(icon)
        hideMessage()
        clearTimeout()
        return elem
      }, 10)
      // eslint-disable-next-line no-unreachable
      break

    // Обычное сообщение
    case 'message':
      document.body.appendChild(elem)
      elem.classList.add('message-default')
      setTimeout(() => {
        elem.classList.add('message-active')
        icon.innerHTML = 'i'
        elem.appendChild(icon)
        document.body.appendChild(elem)
        hideMessage()
        clearTimeout()
        return elem
      }, 10)
      // eslint-disable-next-line no-unreachable
      break
  }

  // В переменную messages добовляем все элементы с классом my-plugin-message
  const messages = document.querySelectorAll('.my-plugin-message')

  // Перебираем массив со всеми элементами
  messages.forEach((item, i) => {
    // В перебираемом элементе, находим свойство стиля marginTop и прописываем ему значение порядкового номера элемента
    // умноженного на 5, единицы измерения rem
    item.style.marginTop = `${i * 5}rem`
  })
}

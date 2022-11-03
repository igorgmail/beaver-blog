# Блог 1 Анонимный блог 

## Общие сведения

Мы собираемся написать примитивный, базовый вариант блога.
У нас будут две основные модели: `Entry`s (записи) и `Tag`s (теги). В `Entry` может быть много `тегов` и `Tag` могут быть на многих `Entry`.

## Releases

 ### Release 0: Маршруты обработки запроса

Подумайте о ваших маршрутах (routes). Создайте три файла в папке routes:

1. `index.js`
2. `entries.js`
3. `tags.js`


`index.js` будет иметь только указательный маршрут, отображающий вашу домашнюю страницу.  Все пути, связанные с `Entry`, будут расположены в `entries.js`, а все, связанные с `Tag` в ` tags`.

Вот такие функции должно предлагать ваш  анонимный блог (напишите routes для каждой из них):

1. Показать все записи
2. Показать определенную запись (по id)
3. Создать новую запись 
4. Редактировать существующую запись 
5. Удалить существующую запись 
6. Показать все записи с заданным тегом. 


### Release 1: Модели

Создайте все необходимые модели. `Entry`s (записи) и `Tag`s (теги).
Добавьте ограничения. Например, если в вашей модели `Entry` есть поля `body` и `title`, вы, вероятно, не хотите разрешать сохранение `Entry`, у которой нет полей `body` и `title`. Это означает добавление ограничения `allowNull`.
Какие поля вы хотите добавить к вашей записи в блоге? Имя автора? Возможно хотите добавить модель `User`?

### Release 2: Простые страницы и формы

Создайте простые страницы и формы для реализации всех вышеперечисленных функций. Если ваш HTML хорошо структурирован, это упростит оформление стиля позже.

Ваши формы для создания и обновления моделей `Entry` должны позволять вам вводить теги. Было бы невероятно утомительно создавать теги в специально отведенном для них месте. Удобнее делать это в момент добавления статьи. Обратите внимание, если автор записи использует уже существующий тег, вы не захотите создавать новую строку-дубликат в таблице `tags`, а скорее используете уже существующий тег еще раз.

Одна из идей может заключаться в том, чтобы разрешить им вводить теги следующим образом:

```html
<label for="entry_tags">Tags:</label>
<input id="entry_tags" name="entry[tags]" value="tag1, tag2, some other tag, a fourth tag">
```


Все ваши routes должны теперь реализовать свои основные функции. Вы должны иметь возможность показывать, создавать, обновлять и удалять записи. Вы также должны иметь возможность видеть все записи для данного тега по URL-адресу, например

```text
http://localhost:9393/tags/apple
```

### Release 3: Ошибки

Используя `try/catch/finally, throw`, убедитесь, что вы корректно обрабатываете свои ошибки. Обработка не обязательно должна быть идеальной, но хорошая обработка события ошибки означает следующее: 

1. Когда пользователь совершает ошибку или нарушает какое-то правило, то он получает оповещение с подробным описанием ошибки.
2. Пользователю предоставляется возможность исправить ошибку, если это возможно.
3. Пользователю дается максимально возможное руководство по поводу того, что ему/ей необходимо сделать, чтобы исправить ошибку.

### Release 4: Стиль!  Стиль!  Стиль!

Оформите ваш блог при помощи CSS. Сделайте это так хорошо, чтобы вы могли гордиться собой и своим блогом.

### Ссылки
[Конструкция try...catch](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/try...catch)

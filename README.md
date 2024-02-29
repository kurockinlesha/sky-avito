Проект Sky-Avito

Описание

Предусмотрена авторизация/ регистрация пользователя.

Неавторизованный пользователь может:
- просматривать список объявлений на главной странице;
- просматривать страницы с информацией о продавцах.

Для авторизованного пользователя дополнительно доступны следующие опции:
- добавление нового объявления;
- редактирование уже существующего объявления;
- удаление раннее опубликованного объявления;
- доступ к личному кабинету и редактирование личной информации.

Используемые технологии для создания приложения:

- HTML;
- JavaScript;
- React;
- React-redux;
- StyledComponents.

Запуск проекта

Фронтенд

1. Склонировать репозиторий 
2. установить все зависимости (npm Install)
3. Инициализировать приложение (npm start)

Бэкенд

- Для запуска бэкенда вам потребуется установить Docker.
- Скачайте версию для своей операционной системы и запустите.
- Далее следуйте инструкциям установщика.
- После установки перезагрузите компьютер.
- Запустите Docker с помощью ярлыка.
- Скачайте архив и разархивируйте его.
- Через терминал перейдите в разархивированную папку.
- Запустите в терминале команду:docker-compose -f docker-compose-backend.yaml up -d
- После первого выполнения команды все образы подтянуться, но могут не запуститься, в этом случае повторно выполните команду:docker-compose -f docker-compose-backend.yaml up -d
- После этого бэкенд и Swagger будут доступны по адресу http://localhost:8090/
- Чтобы остановить работу бэкенда выполните:docker-compose down

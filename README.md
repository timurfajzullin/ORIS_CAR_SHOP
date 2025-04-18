# ORIS_CAR_SHOP

Инструкция по запуску проекта:

1. Создать бд carshopDB
2. В файле AppSettings.json изменить данные на свои
"ConnectionStrings": {
    "MyDBContext" : "Host=localhost;Port=5432;Database=carshopDB;Username=;Password=;"
  },

3. В консоли IDE прописать две команды:
	1.dotnet ef migrations add initial3 -s CarShop.Host -p CarShop.Database
	2.dotnet ef database update -s CarShop.Host -p CarShop.Database
Миграция сделана
4. Запустить CarShop.Host/ запустить файл \car-booking-try(back)\CarShop\CarShop.Host\bin\Debug\net9.0\CarShop.Host.exe

5. Запустить в IDE фронт (react приложение)

6. Перейти по адресу : http://localhost:5174/

Что то тыкать и говорить что Файзуллин Тимур крутой

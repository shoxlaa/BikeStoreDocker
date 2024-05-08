
# Bike api Project

Легкий учеьный проект для того что бы понять как правильно нужно работать с `Docker`,но по сути,сталкиваешься с дркгими проблемами. 
Хочу полнусть описать то как шла разработка этого проекта  с какими проблемами сталкиваешься

### Problems
- Готовая база Данных из которой нужно брать информацию 
- При вызове Api из Ract проекта  не рабоатет (Cors)


## Подключение к готовой Базе Данных

Мне была выдана готовая база данных в которой хрониалсь информация о товаре и для того чтобы использовать эту бд в моем Api прошла по гайду 

- [МЕТАНИТН НА РУССКОМ ](https://metanit.com/sharp/entityframeworkcore/1.3.php)
- [КРАТКО И БЫСТРО НА АНГЛ](https://www.entityframeworktutorial.net/efcore/create-model-for-existing-database-in-ef-core.aspx)

в котором используется `Scaffold-DbContext` 
при копировании sql `connection string` не забудь добавить `DataBase=BikeDb` для этого лучше писать в VisualStudio чем в райдере появляется ошибка которую я так и не поняла как исправить 

## Вызов локального Api  

Пояляется ошибка при вызове Api в React Проекте для этого нужно добавить пару строк кода в `Program.cs`

```c# 
builder.Services.AddCors(o => o.AddPolicy("MyPolicy", builder =>
{
    builder.AllowAnyOrigin()
        .AllowAnyMethod()
        .AllowAnyHeader();
}));
```

и ещё в app деклорируем 

```c#
app.UseCors("MyPolicy");
```

полностью код выглядет вот так 

``` c#
using bike_api.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddSingleton<BikeStoreContext>();

builder.Services.AddCors(o => o.AddPolicy("MyPolicy", builder =>
{
    builder.AllowAnyOrigin()
        .AllowAnyMethod()
        .AllowAnyHeader();
}));
var app = builder.Build();


// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("MyPolicy");
app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
```
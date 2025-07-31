# todo-app
TODO App Frontend: Angular cli v20.1.4 Backend: .NET 9.0.33 Web API (in-memory storage)
This is a full-stack TODO list application built with Angular 20 for the frontend and ASP.NET Core 9 for the backend. It demonstrates basic CRUD operations using an in-memory list (no database required).

🚀 Features
View TODO items

Add new TODOs

Delete existing TODOs

Simple and clean UI

Seamless integration between Angular and .NET

Cross-Origin Resource Sharing (CORS) is enabled

🛠 Tech Stack
Frontend	Backend
Angular 20	ASP.NET Core 9
TypeScript	C#
HttpClient	In-Memory API

📂 Project Structure
todo-app/
├── client/         # Angular app
│   ├── src/
│   │   ├── app/
│   │   │   └── app.component.ts
│   │   │   └── todo.service.ts
├── server/         # .NET Web API
│   ├── Controllers/
│   │   └── TodoController.cs
│   ├── Models/
│   │   └── TodoItem.cs
│   └── Program.cs


⚙️ Setup Instructions

Prerequisites
.NET SDK 9

Node.js & npm

Angular CLI

Backend Setup (.NET)

cd server
dotnet run
The API will be available at: http://localhost:5139/api/todo

Frontend Setup (Angular)

cd client
npm install
ng serve
The Angular app will run at: http://localhost:4200

CORS Configuration
In Program.cs of the server, make sure to include:

csharp
Copy
Edit
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy =>
    {
        policy.WithOrigins("http://localhost:4200")
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});
app.UseCors();

API Endpoints
Method	Route	Description
GET	/api/todo	Get all todos
POST	/api/todo	Add a new todo
DELETE	/api/todo/{id}	Delete a todo

Example Payload (POST)
json
Copy
Edit
{
  "task": "Learn Angular"
}

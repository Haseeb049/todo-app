# ✅ TODO App (Angular + .NET)

A full-stack TODO list application built with **Angular 20** for the frontend and **ASP.NET Core 9** Web API for the backend (using in-memory storage). Demonstrates basic CRUD operations without a database.

---

## 🚀 Features

- View TODO items  
- Add new TODOs  
- Delete existing TODOs  
- Clean and simple UI  
- Seamless integration between Angular & .NET  
- CORS-enabled cross-origin setup  

---

## 🛠 Tech Stack

**Frontend:**  
- Angular v20  
- TypeScript  
- HttpClient  

**Backend:**  
- ASP.NET Core 9  
- C#  
- In-memory list  

---

## 📁 Project Structure

todo-app/
├── client/ # Angular frontend
│ └── src/
│ └── app/
│ ├── app.component.ts
│ └── todo.service.ts
├── server/ # ASP.NET Core backend
│ ├── Controllers/
│ │ └── TodoController.cs
│ ├── Models/
│ │ └── TodoItem.cs
│ └── Program.cs


---

## ⚙️ Setup Instructions

### ✅ Prerequisites

- .NET SDK 9  
- Node.js + npm  
- Angular CLI (`npm install -g @angular/cli`)

---

### 💻 Backend Setup (.NET)

```bash
cd server
dotnet run
```              

### 🌐 Frontend Setup (Angular)

```bash
cd client
npm install
ng serve
```              
### 🔄 CORS Setup in `Program.cs`

```csharp
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
```

📬 API Endpoints
| Method | Route            | Description     |
| ------ | ---------------- | --------------- |
| GET    | `/api/todo`      | Fetch all todos |
| POST   | `/api/todo`      | Add a new todo  |
| DELETE | `/api/todo/{id}` | Delete a todo   |



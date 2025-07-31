using Microsoft.AspNetCore.Mvc;
using server.Models;

namespace server.Controllers;

[ApiController]
[Route("api/[controller]")]
public class TodoController : ControllerBase
{
    private static List<TodoItem> todos = new List<TodoItem>
    {
        new TodoItem { Id = 1, Task = "Learn Angular" },
        new TodoItem { Id = 2, Task = "Build a .NET API" }
    };

    [HttpGet]
    public ActionResult<List<TodoItem>> GetTodos()
    {
        return Ok(todos);
    }

    [HttpPost]
    public ActionResult<TodoItem> AddTodo([FromBody] TodoItem newTodo)
    {
        newTodo.Id = todos.Any() ? todos.Max(t => t.Id) + 1 : 1;
        todos.Add(newTodo);
        return CreatedAtAction(nameof(GetTodos), new { id = newTodo.Id }, newTodo);
    }

    [HttpDelete("{id}")]
    public IActionResult DeleteTodo(int id)
    {
        var todo = todos.FirstOrDefault(t => t.Id == id);
        if (todo == null)
            return NotFound();

        todos.Remove(todo);
        return NoContent();
    }
}

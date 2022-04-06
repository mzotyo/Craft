import java.util.*;

public class ToDoList {
  private List<ToDo> todos;

  public ToDoList() {
    todos = new ArrayList<ToDo>();
  }

  public ToDoList(List<ToDo> todos) {
    this.todos = new ArrayList<ToDo>(todos);
  }

  public List<ToDo> items() {
    return todos;
  } 

  public ToDoList add(ToDo todo) {
    List<ToDo> todos = new ArrayList<>(this.todos);
    todos.add(todo);

    return new ToDoList(todos);
  }
}

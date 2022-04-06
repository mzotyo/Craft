
import junit.framework.*;


public class ToDoListTest extends TestCase {

  public ToDoListTest( String testName ) {
    super( testName );
  }

  public static Test suite() {
    return new TestSuite( ToDoListTest.class );
  }

  public void testToDoList() {
    ToDoList todoList = new ToDoList();
    assertEquals(true, todoList.items().isEmpty());

    ToDo todo1 = new ToDo("description");
    todoList = todoList.add(todo1);
    assertEquals(1, todoList.items().size());
    assertEquals("description", todoList
      .items()
      .stream()
      .filter(todo -> todo.getDescription().equals("description"))
      .findFirst()
      .get()
      .getDescription());

    ToDo todo2 = new ToDo("description2");
    todoList = todoList.add(todo2);
    assertEquals(2, todoList.items().size());


//    ToDoList todoList2 = todoList.locate("description");
//    assertEquals(todo1, todoList2)
  }
}

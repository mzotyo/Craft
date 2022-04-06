import junit.framework.*;


public class ToDoTest extends TestCase {

  public ToDoTest( String testName ) {
    super( testName );
  }

  public static Test suite() {
    return new TestSuite( ToDoTest.class );
  }

  public void testCreatToDo() {
    ToDo todo = new ToDo("description");
    assertEquals("description", todo.getDescription());

    todo = new ToDo("description", "created");
    assertEquals("description", todo.getDescription());
    assertEquals("created", todo.getStatus());
  }

}

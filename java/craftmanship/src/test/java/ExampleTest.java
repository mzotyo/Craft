import junit.framework.*;


public class ExampleTest extends TestCase {

  public ExampleTest( String testName ) {
    super( testName );
  }

  public static Test suite() {
    return new TestSuite( ExampleTest.class );
  }

  public void testExample() {
    Example example = new Example(10);
    assertEquals(10, example.getNumber());
  }
}

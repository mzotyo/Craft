package tdd.by.example;

import junit.framework.*;

public class DollarTest extends TestCase {

  public DollarTest( String testName ) {
    super( testName );
  }

  public static Test suite() {
    return new TestSuite( DollarTest.class );
  }

  public void testApp() {
    Dollar five = new Dollar(5);
    Dollar product = five.times(2);
    assertEquals(10, product.amount);
    product = five.times(3);
    assertEquals(15, product.amount);
  }

  public void testEquality() {
    assertTrue(new Dollar(5).equals(new Dollar(5)));
    assertFalse(new Dollar(5).equals(new Dollar(6)));
  }
}

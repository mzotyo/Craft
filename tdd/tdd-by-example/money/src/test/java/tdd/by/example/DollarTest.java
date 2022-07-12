package tdd.by.example;

import junit.framework.Test;
import junit.framework.TestCase;
import junit.framework.TestSuite;


public class DollarTest extends TestCase
{
    public DollarTest(String testName) {
        super( testName );
    }

    public static Test suite() {
        return new TestSuite( DollarTest.class );
    }

    public void testMultiplication() {
        Dollar five = new Dollar(5);
        five.times(2);
        assertEquals(10, five.amount);
    }
}

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
        Money five = Money.dollar(5);
        assertEquals(Money.dollar(10), five.times(2));
        assertEquals(Money.dollar(15), five.times(3));
    }

    public void testFrancMultiplication() {
        Money five = Money.franc(5);
        assertEquals(Money.franc(10), five.times(2));
        assertEquals(Money.franc(15), five.times(3));
    }

    public void testEquality() {
        assertTrue(Money.dollar(5).equals(Money.dollar(5)));
        assertFalse(Money.dollar(5).equals(Money.dollar(6)));
        assertTrue(Money.franc(5).equals(Money.franc(5)));
    }

    public void testCurrency() {
        assertEquals("USD", Money.dollar(1).currency());
        assertEquals("CHF", Money.franc(1).currency());
    }

    public void testDifferentClassEquality() {
        assertTrue(new Money(5, "CHF").equals(new Franc(5, "CHF")));
    }
}

package tdd.by.example;
import java.util.*;
import java.lang.*;

class Bank
{
    private class Pair
    {
        private String from;
        private String to;

        Pair(String from, String to) {
            this.from = from;
            this.to = to;
        }

        public boolean equals(Object object) {
            Pair pair = (Pair) object;
            return from.equals(pair.from) && to.equals(pair.to);
        }

        public int hashCode() {
            return 0;
        }
    }

    private Hashtable<Pair, Integer> rates = new Hashtable<Pair, Integer>();

    Money reduce(Expression source, String to) {
        return source.reduce(this, to);
    }

    void addRate(String from, String to, int rate) {
        rates.put(new Pair(from, to), Integer.valueOf(rate));
    }

    int rate(String from, String to) {
        if(from.equals(to)) return 1;

        Integer value = rates.get(new Pair(from, to));
        return value.intValue();
    }
}

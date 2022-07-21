package tdd.by.example;

class Money implements Expression 
{
    protected int  amount;
    protected String currency;

    static Money dollar(int amount) {
        return new Money(amount, "USD");
    }

    static Money franc(int amount) {
        return new Money(amount, "CHF");
    }

    Money(int amount, String currency) {
        this.amount = amount;
        this.currency = currency;
    }

    Money times(int multiplier) {
        return new Money(amount * multiplier, currency);
    }

    Expression plus(Money addend) {
        return new Sum(this, addend);
    }

    String currency() {
        return currency;
    }

    public Money reduce(Bank bank, String to) {
        int rate = bank.rate(currency, to); 
        return new Money(amount / rate, to);
    }

    public boolean equals(Object object) {
        Money money = (Money)object;
        return amount == money.amount 
            && currency() == money.currency();
    }

    public String toString() {
        return amount + " " + currency;
    }
}

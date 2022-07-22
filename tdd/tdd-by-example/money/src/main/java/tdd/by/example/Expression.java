package tdd.by.example;

interface Expression 
{
    Money reduce(Bank bank, String to);
    
    Expression plus(Expression addend);
}

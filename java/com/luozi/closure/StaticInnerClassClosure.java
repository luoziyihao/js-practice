package com.luozi.closure;

public class StaticInnerClassClosure {

    private static int age ;


    public int grow() {
        return new Cmd().grow();
    }

    private static class Cmd{

        public int grow() {
           return ++age;
        }
    }

    public static void main(String[] args) {
        StaticInnerClassClosure staticInnerClassClosure = new StaticInnerClassClosure();
        System.out.println(staticInnerClassClosure.grow());

    }
}

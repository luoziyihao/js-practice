package com.luozi.closure;

public class StaticInnerClassClosure {

    private static int age ;


    public int grow() {
        return new Cmd().grow();
    }

    /**
     * static inner class is bound with class object, so it is only able to visit the static property of outer class
     */
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

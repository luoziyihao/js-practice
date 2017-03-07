package com.luozi.closure;

public class InnerClassClosure {

    private int age ;


    public int grow() {
        return new Cmd().grow();
    }

    private class Cmd{

        public int grow() {
           return ++age;
        }
    }

    public static void main(String[] args) {
        InnerClassClosure innerClassClosure = new InnerClassClosure();
        System.out.println(innerClassClosure.grow());

    }
}

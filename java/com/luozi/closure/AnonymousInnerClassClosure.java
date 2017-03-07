package com.luozi.closure;

public class AnonymousInnerClassClosure {

    interface Cmd{
        void apply();
    }

    public static void main(String[] args) {
        int k = 5;
        Cmd[] cmds = new Cmd[k];
        for (int i = 0; i < k; i++){
            final int j = i;
            Cmd cmd = new Cmd(){
                @Override
                public void apply(){
                    System.out.println(j);
                }
            };
            cmds[i] = cmd;
        }

        for (Cmd cmd : cmds) {
            cmd.apply();
        }
    }
}

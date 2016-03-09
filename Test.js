/*!
	Test.js  version 1.0
	Author: Jignesh Dhamecha
    
*/
import java.util.*;
import java.lang.*;
import java.io.*;
import java.util.ArrayList;


public class HelloWorld{

     public static void main(String []args){
        System.out.println("Hello World");
        BTree bt= new BTree();
		bt = addNewBT(new int[]{1,2,3,5});
	 	System.out.println(calcluatePemutations(bt));
     }
     public static int calcluatePemutations(BTree bt){
		if (bt == null) {
			return 1;
		}
		BTree btL= new BTree();
		btL = addNewBT(bt.getLeft());
		int lenLt = getSize(btL);
		BTree btR= new BTree();
		btR = addNewBT(bt.getRight());
		int lenRt = getSize(btR);
	 	//recurse sub trees
// 	 	int lenReLeft =calcluatePemutations(btL);
// 	 	int lenReRightt =calcluatePemutations(btR);
	 	//nt retNum =combination(lenLt + lenRt, lenRt) * lenReLeft * lenReRightt;
		return 1;
	}
	public static BTree addNewBT(int[] inputSeq){
		BTree bt= new BTree();
		int root=-1;
		ArrayList<Integer> alLeft = new ArrayList<>();
		ArrayList<Integer> alRight = new ArrayList<>();
		for(int i =0; i < inputSeq.length; i++){
			 if(root==-1){
			 	root = inputSeq[i];
			 }
			 else if(root<inputSeq[i]){
			 	alLeft.add(inputSeq[i]);
			 }
			 else{
			 	alRight.add(inputSeq[i]);
			 }
		}
	 
		bt.setLeft(convertIntegers(alLeft));
		bt.setRight(convertIntegers(alRight));
		bt.setRoot(root);
		
 
		return bt;
	}
	//Helper Methods
	//http://betterexplained.com/articles/easy-permutations-and-combinations/
	public static int combination(int n,int k){
		return factorial(n) / (factorial(k) * factorial(n - k));
	}
	public static int getSize(BTree bt){
   	 return 1 + bt.getLeft().length + bt.getRight().length;
   }
	 public static int factorial(int number) {
	      if (number <= 1)
	         return 1;
	      else
	         return number * factorial(number - 1);
	   }
	
	//http://stackoverflow.com/questions/718554/how-to-convert-an-arraylist-containing-integers-to-primitive-int-array
	
	public static int[] convertIntegers(ArrayList<Integer> integers)
		{
		    int[] ret = new int[integers.size()];
		    Iterator<Integer> iterator = integers.iterator();
		    for (int i = 0; i < ret.length; i++)
		    {
		        ret[i] = iterator.next().intValue();
		    }
		    return ret;
		}
}

class BTree {
       private int[] left;
       private int root;
       private int[] right;
//s
   // constructor
    public BTree() {
     
   }
   
	// getter
   public int[] getLeft() { return left; }
   public int getRoot() { return root; }
   public int[] getRight() { return right; }
   
   //setter
   public void setLeft(int[] val) { this.left = val; }
   public void setRoot(int val) { this.root = val; }
   public void setRight(int[] val) { this.right = val; }
  
 
}

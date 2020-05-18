#This code about >>>Inheritance<<<



class Operation:
    def Sum(self,n1,n2):
        SumResult=n1+n2
        print("Sum=",SumResult)
    def Sub(self,n1,n2):
        SubResult=n1-n2
        print("Sub=",SubResult)

class OperationWithMul(Operation):# now this class can inheritance class
                                  # Operation with all method >>>
    def Mul(self,n1,n2):
        MulResult=n1*n2
        print("Mul=",MulResult)





def main():
    #op=Operation() #we do not need this now
    #op.Sub(10,5)
    #op.Sum(14,18)
    opMul=OperationWithMul(); # we can print here 
    opMul.Sub(4,2)
    opMul.Sum(10,15)
    opMul.Mul(10,2)



if __name__ == '__main__':main()

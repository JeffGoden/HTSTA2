number1= int(input("Enter 1 number"))
number2= int(input("Enter a 2nd number"))

if(number1>0) and (number2<0):
    print("Both numbers are positive")

if(number1>0) or (number2):
    print(" one of them is positive")

if not(number1<0) and (number2<0):
    print("Both are positive")
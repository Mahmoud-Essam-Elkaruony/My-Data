# This code about loop control






def main():
    word="python"
    for letter in word:
        if(letter=='t'):
            continue # This loop it means print all vocabulary without "t"
        print(letter)

    print("program end")

if __name__ == '__main__':main()

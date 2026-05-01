# Count characters in your string

def count(string):
    result = {}# empty dictionary to store the countingg
    for char in string:
        if char in result:# Check if the character is already a key in the dictionary
            result[char] += 1  # If yes increase its count by 1
        else:
            result[char] = 1   # If not, add it with count = 1
    return result

print(count("abas asda"))

def love(flower1,flower2):
    if((flower1%2==0 and flower2%2==1) or (flower1%2==1 and flower2%2==0)):
        return True
    else:       
        return False
print(love(1,2))


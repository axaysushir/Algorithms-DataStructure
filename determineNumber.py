# Given a string that may represent a number, determine if it is a number
def check(s):
    try:
        s = float(s)                    
        return True
    except:
        return False

def isNumber(s):
    return check(s)

print(isNumber('12.q3'))
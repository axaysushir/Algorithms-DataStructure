def pow(x, y):
    if y == 0:
        return 1
    temp = pow(x, int(y/2))

    if y % 2 == 0:
        return temp * temp
    else:
        if y > 0:
            return x * temp * temp
        else:
            return temp * temp / x

print(pow(567889, 125985849484943))
# convert string into numbers
# ex: "1234 Hello"  res: 1234
# step 1: check is str or remove whitespace using strip if not return 0
# step 2: check sign is '+' or '-' set the sign
# step 3: Traverse througn string from start to string of the length
# step 4: Check each character if is numeric then return sign * res, convert res to str
# step 5: sign + or - and range 2 ^31 to 2 ^ 31 - 1 if res out of range return this val * sign

str = "1234 Hello"


class Solution:
    def myAtoi(self, s: str) -> int:
        if not s:
            return 0
        s = s.strip()  # RETURN COPY OF THE STRING WITH LEADING AND TRAILING WHITE SPACES
        if not s:
            return 0

        sign = 1
        start = 0
        if s[0] == '-':
            sign = -1
            start += 1
        elif s[0] == '+':
            start += 1

        res = 0
        for i in range(start, len(s)):
            if not s[i].isnumeric():
                return sign * res
            res = res * 10 + int(s[i])  # convert str to integer
            if sign == 1 and res > 2 ** 31 - 1:  # check range 2^31 -1 to 2^31
                return 2 ** 31 - 1
            elif sign == -1 and res >= 2 ** 31:
                return -2 ** 31
        return sign * res


print(Solution().myAtoi('-105') + 1)
# -104

# find first matching substr in a string
arr = ['e 2023-01-18 10:24:11.401z 1189220 19 y7zz48bxk7-eulwaepughqaaaam @ error dl02000001: connection failure  occurred in queryresult.01', 'e 2023-01-18 10:22:11.401z 1189220 18 y7zz48bxk7-eulwaepughqaaaam - error dl03000006: the company title copy company error does not exist  occurred in backend_misc:getuserid:01', 'e 2023-01-19 12:27:23.493z 3875529 23 y7_8q8fgpsz7_0ytnuhfnqaaaa0 - error dl03000006: the company title no baseline found does not exist  occurred in backend_misc:getuserid:01<br />', 'e 2023-01-19 12:27:23.493z 3875529 23 y7_8q8fgpsz7_0ytnuhfnqaaaa0 - error dl03000006: the company title no baseline found does not exist  occurred in backend_misc:getuserid:01<br />']

for i in arr:
    print(i.find('no baseline found'))
    if i.find('no baseline found') != -1:
        print(i)
        break

# get date from string
for line in f:
    datetime_str_list = line.split(" - ")
    if len(datetime_str_list) >= 1:
        try:
            actual_date = datetime.strptime(datetime_str_list[0].strip(), "%Y-%b-%d %H:%M:%S")

# how to color text in python
print("Red: \033[91m Hello World\033[0m")
print("Green: \033[92m Hello World\033[0m")
import vacations as v

# comment
months = ["January", "February", "March", "April", "May", "June",
          "July", "August", "September", "October", "November", "December"]

flag = 0

for month in months:
    if month == "June" or month == "July":
        if flag == 0:
            print("Now", v.vacation1)
            flag = 1
    elif month == "December":
        print("Now", v.vacation2)
    else:
        print("The current month is", month)

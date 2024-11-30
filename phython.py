name = []
while len(name) !=10:
    add_name = input("add: ")
    if add_name.lower() == "done":
        break
    else:
        name.append(add_name)
        print(name)
        print("stack is full")
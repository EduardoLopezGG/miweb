### Sets ###

my_set = set()
my_other_set = {}

print(type(my_set))
print(type(my_other_set)) # Inicialmente es un diccionario

my_other_set = {"brais", "Moure", 35}
print(type(my_other_set))

print(len(my_other_set))

my_other_set.add("mouredev")

print(my_other_set) # un set no es una estructura ordenada

my_other_set.add("mouredev") # un set no no acepta repetidos

print("moure" in my_other_set)

m = "Moure"

print(m in my_other_set)
print("mouri" in my_other_set)


my_other_set.remove("Moure")
print(my_other_set)

my_other_set.clear()
print(my_other_set)

del my_other_set
#print(my_other_set)

my_set = {"brais", "Moure", 35}
my_list = list(my_set)
print(my_list)
print(my_list[0])

my_other_set = {"Kotlin", "Swift", "Python"}

my_new_set = my_set.union(my_other_set)
print(my_new_set.union({"JavaScript", "C#"}))

print(my_new_set.difference(my))
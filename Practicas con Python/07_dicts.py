### Dictionaries ###

my_dict = dict()
my_other_dict = {}

print(type(my_dict))
print(type(my_other_dict))

my_other_dict = {"nombre":"brais", "apellido":"moure", "edad":35, 1: "python"}
my_dict = {
	"nombre":"brais",
	"apellido":"moure",
	"edad":35,
	"lenguajes": {"python", "swift", "kotlin"},
	1:1.77
}

print(my_dict)
print(my_other_dict)

print(len(my_other_dict))
print(len(my_dict))

print(my_dict["nombre"])

my_dict["nombre"] = "pedro"
print(my_dict["nombre"])

print(my_dict[1])

my_dict["calle"] = "calle mouredev"
print(my_dict)

del my_dict["calle"]
print(my_dict)

print("nombre" in my_dict)
print(my_dict["nombre"])

print(my_dict.items())
print(my_dict.keys())
print(my_dict.values())
print(my_dict.fromkeys(("nombre", "apellido", 1)))

my_list = ["nombre", 1, "piso"]

my_new_dict = dict.fromkeys((my_list))
print(my_new_dict)

my_new_dict = dict.fromkeys(("nombre", 1, "piso"))
print(my_new_dict)

my_new_dict = dict.fromkeys(my_dict)
print(my_new_dict)

my_new_dict = dict.fromkeys(my_dict, "Zzz")
print(my_new_dict)

my_values = my_new_dict.values()
print(type(my_values))

print(my_new_dict.values())
print(list(my_new_dict))
print(tuple(my_new_dict))
print(set(my_new_dict))
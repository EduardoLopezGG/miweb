### Funciones ###

def my_function ():
	print("esto es una funcion")

my_function()
my_function()
my_function()
my_function()

def sum_two_values(first_number, second_number):
	print(first_number + second_number)

sum_two_values(5, 7)

def sum_two_values_with_return(first_value, second_value):
	return first_value + second_value

suma = sum_two_values_with_return(7, 8)
print(suma)
suma = sum_two_values(5, 7)
print(suma)

def print_name (name, surname):
	print(f"{name} {surname}")

print_name("joaquin", "fenix")

def print_name_with_default (name, surname, alias = "Unknown"):
	print(f"{name} {surname} {alias}")

print_name_with_default("brais", "moure")

def print_upper_texts(*texts):
	for text in texts:
		print(text.upper())
		print(text.capitalize())
		print(text.lower())



print_upper_texts("hola", "python", "mouredev")
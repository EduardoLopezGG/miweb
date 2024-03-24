### Conditionals ###

my_condition = False

if my_condition: # Es lo mismo que if my_condition == True:
	print("se ejecuta la condicion del if")

my_condition = 1

if my_condition == 10:
	print("se ejecuta la condicion del segundo if")

if my_condition > 10 and my_condition < 20:
	print("es mayor que", my_condition)
elif my_condition == 1:
	print("ugu")
else:
	print("es menor o igual que", my_condition, "o menor e igual a 20")

print("la ejecucion continua")
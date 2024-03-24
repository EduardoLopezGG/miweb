### Loops ###

# While

my_condition = 0

#while my_condition <= 10:
#	print(my_condition)
#	my_condition += 2
#if my_condition == 10:
#	print("mi condicion es igaual a 10")
#else: #Opcional
#	print("mi condicion es mayor o igual a 10")

#print("la ejecucion continua")



#while my_condition < 20:
#	my_condition += 1
#	if my_condition == 15:
#		print("se detiene la condicion")
#		break
#
#	print(my_condition)

# For

my_list = [35, 56, 56, 34, 1, 8 , 62]

my_dict = {
	"nombre":"brais",
	"apellido":"moure",
	"edad":35,
	"lenguajes": {"python", "swift", "kotlin"},
	1:1.77
}


for ugu in my_dict:
	print(ugu)
	if ugu == "edad":
		break
	print("se ejecuta")
else:
	print("el bucle for para diccionario ha finalizado")

print("la ejecucion continua")

for ugu in my_dict:
	print(ugu)
	if ugu == "edad":
		continue
	else:
		print("se ejecuta")
else:
	print("el bucle for para diccionario ha finalizado")
	
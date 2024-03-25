### Exception Heading ###

numberOne, numberTwo = 5, "1"

#numberTwo = "1"

# Try except

#try:
#	print(numberOne + numberTwo)
#	print("no se ha producido un error")
#except:
	# Se ejecuta si se produce una excepcion
#	print("se ha producido un error")

# Try except else

#try:
#	print(numberOne + numberTwo)
#	print("no se ha producido un error")
#except:
#	print("se ha producido un error")
#else:
	# Se ejecuta si no se produce una excepcion
#	print("la ejecucion continua correctamente")

# Try except else finally

try:
	print(numberOne + numberTwo)
	print("no se ha producido un error")
except:
	print("se ha producido un error")
else: # Opcional
	# Se ejecuta si no se produce una excepcion
	print("la ejecucion continua correctamente")
finally: # Opcional
	# Se ejecuta siempre
	print("la ejecucion continua")

# Excepciones por tipo

try:
	print(numberOne + numberTwo)
	print("no se ha producido un error")
except TypeError:
	print("se ha producido un TypeError")
except ValueError:
	print("se ha producido un ValueError")

# Captura de la informacion de la excepcion

try:
	print(numberOne + numberTwo)
	print("no se ha producido un error")
except TypeError as excepcion:
	print("se ha producido un TypeError")
	print(excepcion)
except ValueError as error:
	print(error)
	print("se ha producido un ValueError")



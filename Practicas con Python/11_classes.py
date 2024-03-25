### classes ###

class Person:
	def __init__ (self, name, surname, alias = "Unknown"):
		self.full_name = f"{name} {surname} ({alias})" # Propiedad Publica
		self.__name = name # Propiedad Privada

	def get_name (self):
		return self.__name

	def walk (self):
		print(f"{self.full_name} Esta caminando")

my_person = Person("Brais", "Moure", "mouredev")
print(my_person.full_name)
my_person.walk()
my_person.walk()

my_other_person = Person("Manuel", "Prieto", "EduardoLopezGG")
print(my_other_person.full_name)
my_other_person.walk()
my_other_person.full_name = "Hector de Leon (El Loco de los perros)"
print(my_other_person.full_name)
my_other_person.walk()

print(my_other_person.get_name())

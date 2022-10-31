class User {
    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }
    // METODOS
    getFullName() {
        return `${this.nombre} ${this.apellido}`
    }
    addMascota(newMascota) {
        this.mascotas.push(newMascota)
    }
    countMascotas() {
        return this.mascotas.length
    }
    addBook(name, autor) {
        const libro = { name, autor }
        this.libros.push(libro)
    }
    getBookNames() {
        const booksname = []
        this.libros.forEach(libro => {
            booksname.push(libro.name)
        });
        return booksname
    }

}
const u1 = new User("Joaquin", "Guelfi", [], [])
console.log("Hola")
console.log(u1.getFullName())
u1.addMascota("gorda")
u1.addMascota("chocolate")
u1.addMascota("cuco")
console.log(u1.countMascotas())
u1.addBook("El Principito", "Antonie de Saint")
u1.addBook("Game of Thrones", "Gorge R R Martin")
console.log(u1.getBookNames())


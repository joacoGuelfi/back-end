class User {
    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = [];
        this.mascotas = [];
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
        return this.libros.name
    }

}
const u1 = new User("Joaquin", "Guelfi", [], [])
console.log("Hola")
console.log(u1.getFullName())
u1.addMascota("gorda")
u1.addMascota("chocolate")
u1.addMascota("cuco")
console.log(u1.countMascotas())
u1.addBook({ name: "el pricipito", autor: "edgar" })
console.log(u1.getBookNames())


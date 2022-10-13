const chai = require("chai");
const expect = chai.expect;
const server = require("../index");
const chaiHttp = require("chai-http");
const db = require('../models/index');
chai.use(chaiHttp);

console.log("El entorno es: "+ process.env.NODE_ENV);
before((done)=>{
	db.sequelize.sync({force:true})
	.then(()=> done(null))
	.catch(()=>{done(err)})
})


describe("API de Notas", () => {
	describe("Crear una nota",()=>{
		it("Debe crear una nota",(done)=>{
			chai
			.request(server)
			.post("/")
			.set('Accept','application/json')
			.send({
				"titulo":"Esto es una nueva nota",
				"descripcion":"Esto es la descripcion de la nota"
			})
			.then(res =>{
				const { body } = res;
				expect(body).to.be.not.empty;
				expect(res).to.have.status(201);
				done();
			}).catch(err=>{
				done(err);
			})
		})
	});
	describe("Obtener todas las notas", () => {
		it("Debe tener un status 200", (done) => {
			chai
				.request(server)
				.get("/")
				.then((res)=>{
					expect(res.status).to.be.equal(200);
					done()
				})
				.catch(err=>{
					done(err);
				})
		});
		it("Debe retornar un array",()=>{
			chai
				.request(server)
				.get("/")
				.then((res)=>{
					expect(res.body).to.be.an('array');
					done()
				})
				.catch(err=>{
					done(err);
				})
		})
	});
	describe("Obtener una nota",()=>{
		it("La nota buscada no debe ser nula",(done)=>{
			chai
			.request(server)
			.get("/1")
			.then((res)=>{
				const { body } = res;
				expect(body).to.be.not.empty;
				done()
			})
			.catch(err=>{done(err)});
		})
	})
});

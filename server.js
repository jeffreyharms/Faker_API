const express = require("express")
const app = express()
const { faker } = require('@faker-js/faker')
const port = 8000;


app.use(express.json())
app.use(express.urlencoded({extended: true}))


class Company {
    constructor() {
        this.id =  faker.random.numeric()
        this.name = faker.company.companyName() 
        this.catchphrase = faker.company.bs()
        this.address = {}
        this.address.street = faker.address.street()
        this.address.city = faker.address.city()
        this.address.state = faker.address.state()
        this.address.zip = faker.address.zipCode()
        this.address.country = faker.address.country()
    }
}

class User {
    constructor() {
        this.id = faker.random.numeric()
        this.firstName = faker.name.firstName() 
        this.lastName = faker.name.lastName()
        this.email = faker.internet.email()
        this.phone = faker.phone.number()
        this.password = faker.internet.password()
    }
}


app.get("/api/companies/new", (req, res)=>{
    const newCorp = new Company()
    res.json(newCorp)
})

app.get("/api/users/new", (req, res)=>{
    const newUser = new User()
    res.json(newUser)
})

app.get("/api/user/company", (req, res)=>{
    const newPerson = new User()
    const newCompany = new Company()
    const newEmployee = {newPerson, newCompany}
    res.json(newEmployee)
})


app.listen(port, () => console.log('Listening to Port : ${port}'))
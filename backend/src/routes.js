import { Router } from "express";

const routes = Router();

const users = [{
    id: '1',
    name: 'devid',
    email: 'devid@mail.com',
    password: '123'
}]

routes.post("/login", (req, res) => {
    const {email, password} = req.body;

    const user = users.find(
        user => user.email === email && user.password === password
    );

    if(user){
        res.status(200).json(user);
    }else{
      return res.status(401).json({message: "nao autorizado"});
    }
});

export default routes;
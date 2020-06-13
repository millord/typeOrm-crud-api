import { Router } from "express";
const router = Router();
import { getUsers } from "../controllers/user.controler";

router.get("/users", getUsers);

// router.get('/users/:id')
// router.post('/users')
// router.put('/users/:id')
// router.delete('/users/:id')

export default router;

import express from "express";
import ControllerExercicio from "../controllers/controllerExercicio.js"; // Corrigido para o nome do arquivo correto

const router = express.Router();

const controllers = new ControllerExercicio();

router.post("/somar", controllers.Somar);
router.post("/subtrair", controllers.Subtrair);
router.post("/dividir", controllers.Dividir); // Corrigido para mapear Dividir corretamente
router.post("/multiplicar", controllers.Multiplicar); // Corrigido para mapear Multiplicar corretamente

export default router;

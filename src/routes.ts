import { Router } from 'express';
import { MessagesController } from './controllers/MessagesController';
import { SettingsController } from './controllers/SettingsController';
import { UsersController } from './controllers/UsersController';

const routes = Router();
const settingsController = new SettingsController();
const usersCntroller = new UsersController();
const messagesController = new MessagesController();

routes
    .post("/settings", settingsController.create)
    .get("/settings/:username", settingsController.findByUsername)
    .put("/settings/:username", settingsController.update)
    .post("/users", usersCntroller.create) 
    .post("/messages", messagesController.create)   
    .get("/messages/:id", messagesController.showByUser)   

export { routes };
import { Request, Response } from 'express';
import { SettingsService } from '../services/settingsService';


class SettingsController {
    
    async create(req: Request, res: Response) {
        
        const { chat, username } = req.body;
         
        const settingsService = new SettingsService();
        
        try {
            const settings = await settingsService.create({chat, username})
            return res.json(settings);
        } catch (error) {
            return res.status(400).json({message: error.message});            
        }
    }

    async findByUsername(req: Request, res: Response) {
        const { username } = req.params;
        const settingsService = new SettingsService();
        const settigs = await settingsService.findByUsername(username);

        return res.json(settigs);
    }

    async update(req: Request, res: Response) {
        const { username } = req.params;
        const { chat } = req.body;
        const settingsService = new SettingsService();
        const settigs = await settingsService.update(username, chat);

        return res.json(settigs);
    }

}

export { SettingsController };
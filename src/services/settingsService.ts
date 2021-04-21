
import { getCustomRepository, Repository } from "typeorm";
import { Setting } from "../entities/Setting";
import { SettingsRepository } from "../repositories/SettingsRepository";

interface ISettingsCreate {
    chat: boolean;
    username: string;
}   


class SettingsService {
    private settingsRepository: Repository<Setting>;
    constructor() {
        this.settingsRepository = getCustomRepository(SettingsRepository);
    }
    async create({chat, username}: ISettingsCreate) {

        const userAlreadyExists = await this.settingsRepository.findOne({
            username
        });

        if(userAlreadyExists) {
            throw new Error("Este usuário já existe!");
        };

        const settings = this.settingsRepository.create({
            chat,
            username
        });

        try {
            await this.settingsRepository.save(settings);

        } catch (error) {
            return error
        }
    }
}

export { SettingsService };
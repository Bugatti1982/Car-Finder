var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Car } from '../models/index.js';
export const seedCars = () => __awaiter(void 0, void 0, void 0, function* () {
    yield Car.bulkCreate([
        {
            make: 'Lambo',
            model: 'Murci SV',
            year: 2010,
            price: 1000000
        },
        {
            make: 'Lincoln',
            model: 'Continnental MKV',
            year: 1972,
            price: 1
        },
        {
            make: 'Cadillac',
            model: 'El Dorado',
            year: 1980,
            price: 10000
        },
        {
            make: 'Pontiac',
            model: 'GTO Judge',
            year: 1968,
            price: 10000
        }
    ], { individualHooks: true });
});

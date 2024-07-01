import DB from './DB';

describe('Insert rows', () => {
    it('should throw exception when id is incorrect', () => {
        const item = {id: 'text'};
        const dataBase = new DB();
        const promise = dataBase.insert(item);
        
        return dataBase.insert(item).catch(err => {
            expect(err).toBe('ID can be only number!');
        })
    })
})

describe('Select rows', () => {
})

describe('Remove rows', () => {
})

describe('Update rows', () => {
})

describe('Truncate rows', () => {
})

describe('Get rows', () => {
    it('should include item', () => {
        const item = {id: 2};
        const dataBase = new DB(item);
        const promise = dataBase.getRows();

        promise.then(result => {
            expect(result).toContain(item);
            done();
        })
    })
})
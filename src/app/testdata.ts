import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
export class TestData implements InMemoryDbService {
    createDb() {
        let bookDetails = [
            { id: 101, name: 'Indicosmic.com', category: 'Angulist' },
            { id: 102, name: 'Indicosmic.com', category: 'Angulist' },
            { id: 103, name: 'Indicosmic.com', category: 'Angulist' },
            { id: 104, name: 'Indicosmic.com', category: 'Angulist' },
            { id: 105, name: 'Indicosmic.com', category: 'Angulist' },
            { id: 106, name: 'Indicosmic.com', category: 'Angulist' },
            { id: 107, name: 'Indicosmic.com', category: 'Angulist' },
            { id: 108, name: 'Indicosmic.com', category: 'Angulist' },
            { id: 109, name: 'Indicosmic.com', category: 'Angulist' },
            { id: 110, name: 'Indicosmic.com', category: 'Angulist' },
        ];
        return {books: bookDetails}
    }
}


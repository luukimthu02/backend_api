import { mapOrder } from './utils/sorts.js';
import { app } from './server.js';

app.get('/', (req, res) => {
    // Test Absolute import mapOrder
    console.log(mapOrder(
        [{ id: 'id-1', name: 'One' },
        { id: 'id-2', name: 'Two' },
        { id: 'id-3', name: 'Three' },
        { id: 'id-4', name: 'Four' },
        { id: 'id-5', name: 'Five' }],
        ['id-5', 'id-4', 'id-2', 'id-3', 'id-1'],
        'id'
    ));
    res.end('<h1>Hello World!</h1><hr>');
});

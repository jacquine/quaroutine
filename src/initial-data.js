const initialData = {
    tasks: {
        'task-1': { id: 'task-1', content: 'DIY a mask and donate them using mask-match.com' },
        'task-2': { id: 'task-2', content: 'Dedicate 60 minutes to do a workout you have not done in a long time'},
        'task-3': { id: 'task-3', content: 'Call grandma and have a real conversation'},
        'task-4': { id: 'task-4', content: 'Bake that Foccacia bread from bon appetit'},
    },
    columns: {
        'column-1': {
            id: 'column-1',
            title: 'help-me',
            taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],
        },
    },
    // facilitate reordering of the columns 
    columnOrder: ['column-1'],
};

export default initialData;
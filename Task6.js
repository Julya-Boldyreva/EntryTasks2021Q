var model = [
    {
        id: 0,
        title: 'Title text 1',
        text: 'Some text 1',
        user: {
            id: 0,
            name: 'user 1',
        },
    }, {
        id: 1,
        title: 'Title text 2',
        text: 'Some text 2',
        user: {
            id: 1,
            name: 'user 2',
        },
    }, {
        id: 2,
        title: 'Title text 3',
        text: 'Some text 3',
        user: {
            id: 0,
            name: 'user 1',
        },
    }, {
        id: 3,
        title: 'Title text 4',
        text: 'Some text 4',
        user: {
            id: 2,
            name: 'user 3',
        },
    }, {
        id: 4,
        title: 'Title text 5',
        text: 'Some text 5',
        user: {
            id: 0,
            name: 'user 1',
        },
    }
]


function groupByUser(){
   var newModel = [], ids = {}, posts = {};
   var i, j, cur;
    for (i = 0, j = model.length; i < j; i++) {
        cur = model[i];
        if (!(cur.user.id in ids)) {
            ids[cur.user.id] = {id: cur.user.id, name: cur.user.name, posts: []};
            newModel.push(ids[cur.user.id]);
        }
        newModel[cur.user.id].posts.push({id: cur.id, title: cur.title, text: cur.text});
    }
   // return newModel;
  console.log(newModel);
}
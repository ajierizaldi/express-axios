const axios = require('axios');

module.exports = {
    useGet: (req, res) => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                res.json(response.data);
            })
            .catch((err) => {
                res.json(err);
            });
    },
    usePost: (req, res) => {
        axios.post('https://jsonplaceholder.typicode.com/posts', {
            title: 'foo',
            body: 'bar',
            userId: 1
        })
            .then((response) => {
                res.json(response.data);
            })
            .catch((err) => {
                res.json(err);
            });
    },
    usePut: (req, res) => {
        axios.put('https://jsonplaceholder.typicode.com/posts/1', {
            id: 1,
            title: 'foo',
            body: 'bar',
            userId: 1
        })
            .then((response) => {
                res.json(response.data);
            })
            .catch((err) => {
                res.json(err);
            });
    },
    useDelete: (req, res) => {
        axios.delete('https://jsonplaceholder.typicode.com/posts/1')
            .then((response) => {
                res.json(response.data);
            })
            .catch((err) => {
                res.json(err);
            });
    },
    usePatch: (req, res) => {
        axios.patch('https://jsonplaceholder.typicode.com/posts/1', {
            title: 'foo'
        })
            .then((response) => {
                res.json(response.data);
            })
            .catch((err) => {
                res.json(err);
            });
    }
}

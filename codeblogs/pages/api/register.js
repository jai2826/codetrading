import axios from 'axios';

axios
    .post('http://localhost:1337/api/auth/local/register', {
        username:req.body.name,
        email: req.body.email,
        password: req.body.password
    })
    .then(response => {
        console.log(response);
    });

// const entry = await strapi.entityService.create('api::article.article', {
//     data: {
//         title: 'My Article',
//     },
// });

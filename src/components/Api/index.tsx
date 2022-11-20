import axios from "axios";

const url = 'https://jsonplaceholder.typicode.com/posts';

export const api = {
    getAllPosts: async () => {

        const result = await axios.get(url);
        const json = await result.data;

        return json;

        // const result = await fetch(url);
        // const json = await result.json();
        // return json;
    },

    addNewPost: async (title: string, body: string, userId: number) => {
        if (title && body) {

            const result = await axios.post(url, {
                title, body, userId
                
                // body: JSON.stringify({ title, body, userId }),
                // Headers: { 'Content-Type': 'application/json' }
            });

            const json = result.data;
            return json;

            // const result = await fetch(url, {
            //     method: 'POST',
            //     body: JSON.stringify({ title, body, userId }),
            //     headers: { 'Content-Type': 'application/json' }
            // });

            // const json = await result.json();
            // return json;

        } else {
            alert('Preencha os campos jovem!!');
        }
    }
};
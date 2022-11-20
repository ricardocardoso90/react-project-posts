import './styles.css';
import { useState } from 'react';

type Props = {
    onAdd: (title: string, body: string) => void;
};

export const PostForm = ({onAdd}: Props) => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const handleClick = () => {
        onAdd(title, body);
    };

    return (
        <div className='header'>
            <fieldset className='box'>
                <legend>Adicionar um novo Post</legend>
                <input
                    type="text"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    placeholder='Adicione um título:' />

                <textarea
                    value={body}
                    onChange={e => setBody(e.target.value)}
                    placeholder='Adicione uma descrição:'
                ></textarea>
                <button onClick={handleClick}>Adicionar</button>
            </fieldset>
        </div>
    )
};
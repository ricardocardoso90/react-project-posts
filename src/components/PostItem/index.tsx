import './styles.css';
import {Post} from '../Types';

type Props = {
    data: Post
}

export const PostItem = ({data}: Props) => {
    return (
        <div className='test-posts'>
            <h1>{data.title}</h1>
            <div>{data.body}</div>
        </div>
    )
};
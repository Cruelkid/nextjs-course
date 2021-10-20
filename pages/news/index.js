import Link from 'next/link';
import { Fragment } from 'react';

const NewsPage = () => {
    return (
        <Fragment>
            <h1>News page</h1>
            <ul>
                <li><Link href='/news/first-item'>Item 1</Link></li>
                <li><Link href='/news/second-item'>Item 2</Link></li>
            </ul>
        </Fragment>
    );
};

export default NewsPage;

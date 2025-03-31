import { List2 } from './list2.tsx';
import { Table2 } from './table2.tsx';
import { Form2 } from './form2.tsx';

export function Hobby2() {
    return (
        <>
            <div id="SoundsOfEarth">
                <img src="public/The_Sounds_of_Earth.jpg" width="600" alt="Gold-plated vinyl record carrying samples of music from a variety of cultures and eras" />
            </div>
            <p>Hi! My name is Matthew Dunn. I am a Computer Science major at WPI.</p>
            <p>My hobby is listening to music. It helps me relax and de-stress.</p>
            <List2 />
            <Table2 />
            <Form2 />
        </>
    )
}
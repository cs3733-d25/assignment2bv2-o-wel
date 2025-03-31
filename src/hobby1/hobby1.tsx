import {List1} from "./list1.tsx";
import {Table1} from "./table1.tsx";
import {Form1} from "./form1.tsx";

export function Hobby1() {
    return (
        <>
            <img src="public/Hike.jpg" width="400" alt="picture of a hike"/>
            <p>
                Hiking can be as simple as a walk in the woods to engaging
                in long backpacking trips where you carry everything you
                need with you. Overall it is about reconnecting with nature
                and getting some exercise
            </p>
            <hr />
            <List1 />
            <hr />
            <Table1 />
            <hr />
            <Form1 />
            <hr />
        </>
    );
}
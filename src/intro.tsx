export type names = {
    name1: string
    name2: string
}

export function Intro({name1, name2}:names) {


    return (
        <>
            <p> {"Hello! Our names are " + name1 + " and " + name2 + ". We are both Computer Science majors and our hobbies are Hiking and Music. We are so excited to share them with you!"}</p>
        </>
    );
}
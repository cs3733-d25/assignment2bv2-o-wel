export type names = {
    name1: string
    name2: string
}

export function Intro({name1, name2}:names) {

    const intro:string = "wow an intro of " + name1 + " and " + name2;

    // @ts-ignore
    document.getElementById("intro").innerText = intro;

    return (
        <>
            <p id="intro"></p>
        </>
    );
}
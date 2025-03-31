export function Form1() {
    return (
        <>
            <h2>Hike Recommendation Form</h2>
            <p>Let me know if you have any recommendations</p>
            <form>
                <label htmlFor="name">Enter the name of the hike:</label>
                <input type="text" id="name"/>
                <br/>
                <label htmlFor="location">Enter the location of the hike:</label>
                <input type="text" id="location"/>
                <br/>
                <br/>
                Seasons for this hike:
                <br/>
                <input type="checkbox" id="Fall"/>
                <label htmlFor="Fall">Fall</label>
                <input type="checkbox" id="Winter"/>
                <label htmlFor="Winter">Winter</label>
                <input type="checkbox" id="Spring"/>
                <label htmlFor="Spring">Spring</label>
                <input type="checkbox" id="Summer"/>
                <label htmlFor="Summer">Winter</label>
                <br/>
                <br/>
                Length of the hike:
                <br/>
                <input type="radio" id="short" name="length"/>
                <label htmlFor="short">0-5 Miles</label>
                <br/>
                <input type="radio" id="medium" name="length"/>
                <label htmlFor="medium">5-10 Miles</label>
                <br/>
                <input type="radio" id="long" name="length"/>
                <label htmlFor="long">10+ Miles</label>
                <br/>
                <br/>
                <label htmlFor="remote">How remote is the hike?</label>
                <select id="remote">
                    <option value="close">close to city/town</option>
                    <option value="medium">somewhat remote</option>
                    <option value="far">very remote</option>
                </select>
                <br/>
                <br/>
                <label htmlFor="comments">Additional Comments:</label>
                <input type="text" id="comments"/>
                <br/>
                <input type="button" value="Submit"/>
            </form>
        </>
    );
}
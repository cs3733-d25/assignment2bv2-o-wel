export function Form2() {
    return (
        <>
            <h2>Recommendation Form</h2>
            <form>
                <label htmlFor="fullname">Enter Your Name:</label>
                <input type="text" id="fullname"/>
                <br/>
                <br/>
                <label htmlFor="recommendation">Enter Your Recommendation(s):</label>
                <input type="text" id="recommendation"/>
                <br/>
                <p>Select what recommendation(s) you are giving: </p>
                <input type="checkbox" id="song"/>
                <label htmlFor="song"> Song</label>
                <br/>
                <input type="checkbox" id="album"/>
                <label htmlFor="album"> Album</label>
                <br/>
                <input type="checkbox" id="artist"/>
                <label htmlFor="artist"> Artist</label>
                <br/>
                <br/>
                <label htmlFor="genre">What genre is your recommendation?</label>
                <br/>
                <select id="genre">
                    <option value="rock">Rock</option>
                    <option value="pop">Pop</option>
                    <option value="jazz">Jazz</option>
                    <option value="country">Country</option>
                    <option value="electronic">Electronic</option>
                </select>
                <p>Select one of the following levels of recommendation: </p>
                <input type="radio" name="recommendation_level" id="not_recommended" value="not_recommended"/>
                <label htmlFor="not_recommended"> Not Worth Listening To</label>
                <br/>
                <input type="radio" name="recommendation_level" id="light_recommended" value="light_recommended"/>
                <label htmlFor="light_recommended"> Worth Giving a Listen </label>
                <br/>
                <input type="radio" name="recommendation_level" id="strong_recommended" value="strong_recommended"/>
                <label htmlFor="strong_recommended"> Favorite </label>
                <br/>
                <br/>
                <label htmlFor="comment">Comments on your Recommendation:</label>
                <br/>
                <textarea id="comment" rows="10" cols="30"></textarea>
                <br/>
                <br/>
                <input type="button" value="Submit"/>
            </form>
        </>
    )
}
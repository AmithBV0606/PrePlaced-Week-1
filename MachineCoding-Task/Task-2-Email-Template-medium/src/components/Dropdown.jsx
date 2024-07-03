function Dropdown() {
    return(
        <div>
            <label htmlFor="Template">Template : </label>
            <select name="Template" id="" className="outline-none border-2 border-slate-400 p-1 rounded-lg">
                <option value="Resignation">Resignation</option>
            </select>
        </div>
    );
}

export default Dropdown;
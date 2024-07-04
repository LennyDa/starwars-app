const Modal = () => {
    return (
        <div className="modal">
            <form>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        // className={`name${!isValidName ? ' invalid' : ''}`}
                        placeholder="Name"
                        name="name"
                        type="text"
                        // defaultValue={name}
                        // onKeyUp={nameHandler}
                    />
                </div>
            </form>
        </div>
    )
}

export default Modal
import React, { useState, useCallback } from 'react';
import { IoIosQrScanner } from "react-icons/io";
import './Drag.css';

function Drag() {
    const [file, setFile] = useState(null);
    const [dragging, setDragging] = useState(false);
    const [upload, setupload] = useState(false);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
        setupload(true)

    };

    const handleDragOver = (e) => {
        e.preventDefault();
        setDragging(true);
    };

    const handleDragLeave = () => {
        setDragging(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setDragging(false);
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            setFile(e.dataTransfer.files[0]);
            e.dataTransfer.clearData();
        }
        setupload(true)

    };
    return (
        <div>
            {!upload && (<div className='drag'>
                <div
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    className='inner-drag'

                >
                    <IoIosQrScanner style={{ fontSize: "200px" }} />
                    {/* <p>{dragging ? 'Drop file here...' : 'Drag & Drop file here or click to upload'}</p> */}
                    <input
                        type="file"
                        onChange={handleFileChange}

                    />
                </div>

                <p style={{ textAlign: "center", marginBottom: "30px" }}>Click to Upload <br /> or <br /> Drag and Drop Files</p>
                <div style={{ display: "flex", justifyContent: "space-between", padding: "20px" }}>
                    <a href="" >verification steps</a>
                    <a href="">T&C</a>
                </div>
            </div>)}

            {file && upload && (<div className='drag-upload' >
                <div style={{ display: 'flex', justifyContent: "space-between" }}>
                    <p onClick={() => setupload(false)} style={{ color: "rgb(0, 195, 255)", cursor: "pointer" }}>Cancel</p>
                    <p style={{ color: 'rgb(0, 195, 255)', cursor: "pointer" }}>Done</p>
                </div>
                <div className='inner-upload'>
                    <p>File selected : {file.name}</p>
                    <label style={{ marginTop: "20px" }} htmlFor="">Title of Project : </label>
                    <input type="text" name="title" id="" required />
                    <label style={{ marginTop: "30px" }} htmlFor="">Description : </label>
                    <textarea name="" rows={10} cols={10} id=""></textarea>
                </div>
            </div>)}

        </div>


    )
}

export default Drag
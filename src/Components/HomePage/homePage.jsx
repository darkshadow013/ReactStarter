import React, { useEffect, useState } from 'react';
import firebase from '../../firebase';
import EnhancedTable from './tableDesign';
import BasicTable from './simpleTable';
import { CircularProgress } from "@material-ui/core";

function HomePage(props) {

    const [loading, setloading] = useState(1);
    const [passwords, setPasswords] = useState([]);

    function fetchData() {
        console.log("Inside Fetch Data");
        const passRef = firebase.database().ref('/passwords');

        return new Promise((resolve) => {
            passRef.on('value', (snapshot) => {
                const data = snapshot.val();
                console.log(data);
                setPasswords(data);
                resolve(data);
            })

        });
    }

    async function initialFunction() {
        const data = await fetchData();
        console.log("After fetchData");
        console.log(data["Others"]);
        setloading(0);
    }

    useEffect(() => {
        setloading(1);
        console.log("Initial");
        initialFunction();
    }, []);

    return (
        (loading === 0) ?
            <section className="jumbotron" style={{ background: "white" }}>

                {
                    Object.keys(passwords).map((group, cnt) => {
                        console.log(group);
                        return (
                            <div id={`accordion${cnt}`} style={{paddingBottom: "10px"}}>
                                <div class="card">
                                    <div class="card-header" id={`h${cnt}`} data-toggle={`collapse`} data-target={`#c${cnt}`} aria-expanded="true" aria-controls="c1">
                                        <h5 class="mb-0">
                                            {group}
                                        </h5>
                                    </div>

                                    <div id={`c${cnt}`} class={`collapse`} aria-labelledby={`h${cnt}`} data-parent={`#accordion${cnt}`}>
                                        <div class="card-body">
                                            <BasicTable data={passwords[group]}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
            </section> : <CircularProgress style={{ margin: "auto" }} />
    );
}

export default HomePage;